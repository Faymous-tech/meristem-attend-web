"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Phone, Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push(`/verify?phone=${encodeURIComponent(form.phone || "+234 800 000 0000")}`), 1200);
  }

  return (
    <div className="space-y-6">
      <div className="md:hidden mb-2">
        <img src="/attend-logo.png" alt="Attend" style={{ height: 31 }} />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Join Attend in under a minute.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          name="fullName"
          label="Full name"
          leftIcon={<User className="h-4 w-4" />}
          placeholder="Ngozi Okafor"
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          leftIcon={<Mail className="h-4 w-4" />}
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
        <Input
          name="phone"
          label="Phone"
          type="tel"
          leftIcon={<Phone className="h-4 w-4" />}
          placeholder="+234 800 000 0000"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        <div>
          <Input
            name="password"
            label="Password"
            type="password"
            leftIcon={<Lock className="h-4 w-4" />}
            placeholder="Min 8 characters"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
          />
          {form.password.length > 0 && (
            <ul className="mt-2 space-y-1">
              {[
                { label: "At least 8 characters", ok: form.password.length >= 8 },
                { label: "One capital letter", ok: /[A-Z]/.test(form.password) },
                { label: "Contains a number", ok: /\d/.test(form.password) },
              ].map((h) => (
                <li key={h.label} className="flex items-center gap-1.5">
                  {h.ok
                    ? <Check className="h-3.5 w-3.5 text-green-600" strokeWidth={2.5} />
                    : <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                  }
                  <span className={`text-xs font-medium ${h.ok ? "text-green-700" : "text-red-600"}`}>
                    {h.label}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button type="submit" fullWidth size="lg" loading={loading}>
          {loading ? "Creating account" : "Create account"}
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground">
        By continuing, you agree to Attend&apos;s Terms of Service and Privacy Policy.
      </p>
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-foreground hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
