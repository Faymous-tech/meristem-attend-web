"use client";
import { useRef, useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

function maskPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 6) return raw;
  const last4 = digits.slice(-4);
  const countryCode = digits.startsWith("234") ? "+234" : `+${digits.slice(0, digits.length - 10)}`;
  return `${countryCode} *** *** ${last4}`;
}

function VerifyForm() {
  const router = useRouter();
  const params = useSearchParams();
  const rawPhone = params.get("phone") ?? "+234 800 000 0000";
  const displayPhone = maskPhone(rawPhone);

  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(60);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  // Auto-focus first input on mount
  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  // Resend countdown
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setTimeout(() => setResendCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [resendCooldown]);

  function handleChange(i: number, v: string) {
    if (!/^\d?$/.test(v)) return;
    setError("");
    const next = [...digits];
    next[i] = v;
    setDigits(next);
    if (v && i < 5) refs.current[i + 1]?.focus();
    if (next.every(Boolean)) verifyCode(next.join(""));
  }

  function handleKey(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const next = Array.from({ length: 6 }, (_, i) => pasted[i] ?? "");
    setDigits(next);
    refs.current[Math.min(pasted.length, 5)]?.focus();
    if (pasted.length === 6) verifyCode(pasted);
  }

  function verifyCode(code: string) {
    // Demo: any 6-digit code passes
    setLoading(true);
    setTimeout(() => router.push("/onboarding"), 1200);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const code = digits.join("");
    if (code.length < 6) { setError("Please enter the full 6-digit code."); return; }
    verifyCode(code);
  }

  function handleResend() {
    setDigits(["", "", "", "", "", ""]);
    setError("");
    setResendCooldown(60);
    refs.current[0]?.focus();
  }

  const filled = digits.every(Boolean);

  return (
    <div className="space-y-6">
      <div className="md:hidden mb-2">
        <img src="/attend-logo.png" alt="Attend" style={{ height: 31 }} />
      </div>

      {/* Header */}
      <div className="text-center">
        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
          <Phone className="h-6 w-6 text-gray-700" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Verify your number</h1>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          We sent a 6-digit code to
          <br />
          <span className="font-semibold text-foreground">{displayPhone}</span>
        </p>
      </div>

      {/* OTP form */}
      <form onSubmit={onSubmit} className="space-y-5" onPaste={handlePaste}>
        <div className="flex justify-between gap-2">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              inputMode="numeric"
              maxLength={1}
              value={d}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKey(i, e)}
              className={cn(
                "h-12 w-12 rounded-xl border text-center text-lg font-semibold transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                d ? "border-foreground bg-foreground/5" : "border-input bg-white",
              )}
            />
          ))}
        </div>

        {error && (
          <p className="text-center text-xs text-red-500">{error}</p>
        )}

        <Button type="submit" fullWidth size="lg" loading={loading} disabled={!filled || loading}>
          {loading ? "Verifying…" : "Confirm code"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Didn&apos;t receive a code?{" "}
          {resendCooldown > 0 ? (
            <span className="font-semibold text-muted-foreground">
              Resend in {resendCooldown}s
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="font-semibold text-foreground hover:underline"
            >
              Resend code
            </button>
          )}
        </p>
      </form>

      <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <Link href="/register" className="hover:text-foreground hover:underline transition-colors">
          Wrong number? Go back
        </Link>
        <Link href="/login" className="hover:text-foreground hover:underline transition-colors">
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense>
      <VerifyForm />
    </Suspense>
  );
}
