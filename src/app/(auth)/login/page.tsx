"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(
      () => router.push(`/verify?phone=${encodeURIComponent(phone || "+234 800 000 0000")}`),
      1000
    );
  }

  return (
    <div className="space-y-6">
      <div className="md:hidden mb-2">
        <img src="/attend-logo.png" alt="Attend" style={{ height: 44 }} />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Enter your phone number and we&apos;ll send you a sign-in code.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          name="phone"
          label="Phone number"
          type="tel"
          autoComplete="tel"
          leftIcon={<Phone className="h-4 w-4" />}
          placeholder="+234 800 000 0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="submit" fullWidth size="lg" loading={loading}>
          {loading ? "Sending code…" : "Send OTP"}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        New to Attend?{" "}
        <Link href="/register" className="font-semibold text-foreground hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
