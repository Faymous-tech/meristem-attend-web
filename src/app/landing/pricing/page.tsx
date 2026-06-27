"use client";
import Link from "next/link";
import {
  ArrowRight, ShieldCheck, Vote, Users, Headphones,
  Radio, CheckCircle2, Mail, Phone,
} from "lucide-react";
import { Reveal } from "../_components/Reveal";

const INCLUDED = [
  "KYC & identity verification",
  "Live voting & resolution management",
  "Virtual, hybrid & in-person event support",
  "QR code check-in",
  "Proxy management",
  "Event documentation delivery",
  "Post-event certificates & receipts",
  "Real-time reporting dashboard",
  "Push & email notifications",
  "Dedicated onboarding support",
];

const TIERS = [
  {
    name: "Starter",
    icon: ShieldCheck,
    color: "#1e40af",
    bgColor: "#eff6ff",
    desc: "For organisations running occasional events with smaller attendee lists.",
    highlights: ["Up to 5 events per year", "Up to 500 attendees per event", "Email support", "Standard reports"],
  },
  {
    name: "Growth",
    icon: Vote,
    color: "#ea6c00",
    bgColor: "#fff7ed",
    desc: "For organisations with frequent events or larger shareholder registers.",
    highlights: ["Unlimited events", "Up to 5,000 attendees per event", "Priority support", "Advanced reporting"],
    featured: true,
  },
  {
    name: "Enterprise",
    icon: Users,
    color: "#7c22c9",
    bgColor: "#faf5ff",
    desc: "For institutions with complex requirements, high-volume events, or custom integrations.",
    highlights: ["Unlimited events & attendees", "Custom integrations", "Dedicated account manager", "SLA guarantees"],
  },
];

export default function PricingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      {/* ─── Page hero ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-24 pt-36 md:pt-44"
        style={{ background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="absolute -right-12 top-0 font-black leading-none text-white"
            style={{ fontSize: 190, opacity: 0.025, letterSpacing: "-0.04em" }}
          >
            PRICING
          </span>
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{ borderColor: "rgba(234,108,0,0.4)", color: "#fb923c", background: "rgba(234,108,0,0.1)" }}
            >
              <Radio className="h-3 w-3" />
              Pricing
            </span>
            <h1
              className="mt-4 font-black leading-tight text-white"
              style={{ fontSize: "clamp(36px, 5.5vw, 66px)" }}
            >
              Flexible pricing for
              <br />
              <span style={{ color: "#ea6c00" }}>every organisation.</span>
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              We price to fit your organisation — whether you run one AGM a year or manage a full calendar of corporate events. Get in touch and we&apos;ll build a plan around your needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Tiers ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="text-center text-sm font-medium text-gray-500">
              All plans include full platform access. Pricing is tailored — contact us to discuss your needs.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TIERS.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <Reveal key={tier.name} delay={i * 80}>
                  <div
                    className="relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      background: tier.featured ? "linear-gradient(135deg, #111827, #1e293b)" : "white",
                      border: tier.featured ? "none" : "1px solid #e5e7eb",
                    }}
                  >
                    {tier.featured && (
                      <span
                        className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white"
                        style={{ background: "#ea6c00" }}
                      >
                        Most popular
                      </span>
                    )}

                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ background: tier.featured ? "rgba(255,255,255,0.1)" : tier.bgColor }}
                    >
                      <Icon className="h-5 w-5" style={{ color: tier.featured ? "white" : tier.color }} />
                    </div>

                    <p className="text-lg font-black" style={{ color: tier.featured ? "white" : "#111827" }}>
                      {tier.name}
                    </p>
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
                      style={{ color: tier.featured ? "rgba(255,255,255,0.55)" : "#6b7280" }}
                    >
                      {tier.desc}
                    </p>

                    <div
                      className="my-6 border-t"
                      style={{ borderColor: tier.featured ? "rgba(255,255,255,0.1)" : "#f3f4f6" }}
                    />

                    <ul className="flex-1 space-y-2.5">
                      {tier.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: tier.featured ? "#ea6c00" : tier.color }}
                          />
                          <span style={{ color: tier.featured ? "rgba(255,255,255,0.75)" : "#374151" }}>
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <p
                        className="mb-3 text-xs font-semibold uppercase tracking-widest"
                        style={{ color: tier.featured ? "rgba(255,255,255,0.35)" : "#9ca3af" }}
                      >
                        Contact us for pricing
                      </p>
                      <Link
                        href="mailto:attend@meristem.com"
                        className="block w-full rounded-full py-3 text-center text-sm font-bold text-white transition-all hover:opacity-90"
                        style={{
                          background: tier.featured ? "#ea6c00" : "#111827",
                        }}
                      >
                        Get a quote
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── What's included ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500">
                Always included
              </span>
              <h2
                className="mt-3 font-black leading-tight text-gray-900"
                style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
              >
                Everything in every plan
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item, i) => (
              <Reveal key={item} delay={i * 40}>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#16a34a" }} />
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact / CTA ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-36" style={{ background: "#0f172a" }}>
        <div className="relative mx-auto max-w-4xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "#fb923c" }}>
                Talk to us
              </p>
              <h2
                className="font-black leading-tight text-white"
                style={{ fontSize: "clamp(28px, 4vw, 50px)" }}
              >
                Let&apos;s find the right plan for your organisation.
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Our team will walk you through the platform and put together a pricing package that fits your event calendar and compliance requirements.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="inline-flex w-fit items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105"
                  style={{ background: "#ea6c00", boxShadow: "0 12px 36px rgba(234,108,0,0.35)" }}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border p-5" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(234,108,0,0.15)" }}>
                    <Mail className="h-4.5 w-4.5" style={{ color: "#fb923c" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Email</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>attend@meristem.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border p-5" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(234,108,0,0.15)" }}>
                    <Phone className="h-4.5 w-4.5" style={{ color: "#fb923c" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Phone</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>+234 (0) 700 ATTEND</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border p-5" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(234,108,0,0.15)" }}>
                    <Headphones className="h-4.5 w-4.5" style={{ color: "#fb923c" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Support</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Available Mon–Fri, 8am–6pm WAT</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
