"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BellRing, MessageSquare, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrefRow {
  key: string;
  label: string;
  description: string;
  icon: typeof BellRing;
}

const CHANNELS: PrefRow[] = [
  { key: "push", label: "Push notifications", description: "On-device alerts for new activity.", icon: BellRing },
  { key: "sms", label: "SMS", description: "Critical updates by text message.", icon: MessageSquare },
  { key: "email", label: "Email", description: "Notices, agendas and receipts by email.", icon: Mail },
];

export default function NotificationPreferencesPage() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>({
    push: true,
    sms: false,
    email: true,
  });

  function toggle(k: string) {
    setPrefs((p) => ({ ...p, [k]: !p[k] }));
  }

  return (
    <div className="space-y-6">
      <Link href="/profile" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <header>
        <h1 className="text-2xl font-bold text-foreground">Notification preferences</h1>
        <p className="text-sm text-muted-foreground">
          Choose how and when you&apos;d like to hear from Attend.
        </p>
      </header>

      <Section title="Delivery channels" rows={CHANNELS} prefs={prefs} toggle={toggle} />
    </div>
  );
}

function Section({
  title,
  rows,
  prefs,
  toggle,
}: {
  title: string;
  rows: PrefRow[];
  prefs: Record<string, boolean>;
  toggle: (k: string) => void;
}) {
  return (
    <section>
      <h3 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>
      <ul className="overflow-hidden rounded-2xl border border-border bg-white">
        {rows.map((r, i) => {
          const Icon = r.icon;
          const on = prefs[r.key];
          return (
            <li
              key={r.key}
              className={cn(
                "flex items-center justify-between gap-3 px-4 py-3",
                i > 0 && "border-t border-border",
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.label}</p>
                  <p className="text-xs text-muted-foreground">{r.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggle(r.key)}
                role="switch"
                aria-checked={on}
                className={cn(
                  "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200",
                  on ? "bg-primary" : "bg-muted",
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-[left] duration-200",
                    on ? "left-[22px]" : "left-0.5",
                  )}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
