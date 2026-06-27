"use client";
import Link from "next/link";
import {
  ArrowRight, ShieldCheck, CalendarDays, Vote,
  UserCheck, FileCheck2, QrCode, Laptop, Radio,
} from "lucide-react";
import { Reveal } from "../_components/Reveal";

const STEPS = [
  {
    num: "01",
    color: "#111827",
    label: "Register & Verify",
    summary: "Create your account and complete identity verification in under 2 minutes.",
    substeps: [
      { icon: UserCheck, text: "Sign up with your name, email, and phone number" },
      { icon: ShieldCheck, text: "Verify your identity with BVN, NIN, or CHN" },
      { icon: FileCheck2, text: "Complete a quick face liveness check" },
      { icon: ShieldCheck, text: "Identity confirmed — your account is ready" },
    ],
    note: "Attend uses regulatory-grade verification so your identity meets the compliance requirements of every corporate event on the platform.",
  },
  {
    num: "02",
    color: "#ea6c00",
    label: "RSVP & Prepare",
    summary: "Browse upcoming events, register your attendance, and prepare before the event day.",
    substeps: [
      { icon: CalendarDays, text: "Browse events you're eligible to attend" },
      { icon: FileCheck2, text: "Register or RSVP with one tap" },
      { icon: FileCheck2, text: "Receive event documents — notices, agendas, press kits" },
      { icon: ShieldCheck, text: "Set up a proxy if you can't attend in person" },
    ],
    note: "All event documents are delivered directly to your Attend inbox. Proxy appointments are captured digitally and executed automatically during voting.",
  },
  {
    num: "03",
    color: "#7c22c9",
    label: "Participate & Engage",
    summary: "Join the event, follow the live agenda, vote on resolutions, and receive your verifiable receipt.",
    substeps: [
      { icon: QrCode, text: "Check in with your unique QR code (in-person) or join the stream" },
      { icon: Laptop, text: "Follow the live agenda on your device" },
      { icon: Vote, text: "Cast your vote on resolutions in real time" },
      { icon: FileCheck2, text: "Download your verifiable attendance receipt or certificate" },
    ],
    note: "Whether you attend in person, virtually, or as a remote voter — your participation is fully captured and documented.",
  },
];

const FAQS = [
  {
    q: "How long does KYC verification take?",
    a: "For most users, identity verification is completed in under 2 minutes. You'll need your BVN, NIN, or CHN, and a device with a front camera for the face liveness check.",
  },
  {
    q: "Can I vote if I can't attend in person?",
    a: "Yes. You can join events virtually via the live stream and vote remotely, or appoint a proxy before the event to vote on your behalf.",
  },
  {
    q: "Is my personal data secure?",
    a: "All personal data is encrypted at rest and in transit. Access is controlled by role-based permissions and full audit logs are maintained.",
  },
  {
    q: "What events can I attend on Attend?",
    a: "Attend supports annual general meetings, product launches, innovation challenges, and a range of other corporate events listed by registered organisations.",
  },
  {
    q: "What if I lose my QR code?",
    a: "Your QR code is always available in the Attend app under your registered events. You can regenerate and download it at any time before check-in.",
  },
];

export default function HowItWorksPage() {
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
            className="absolute -right-20 top-4 font-black leading-none text-white"
            style={{ fontSize: 180, opacity: 0.025, letterSpacing: "-0.04em" }}
          >
            PROCESS
          </span>
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{ borderColor: "rgba(234,108,0,0.4)", color: "#fb923c", background: "rgba(234,108,0,0.1)" }}
            >
              <Radio className="h-3 w-3" />
              How it works
            </span>
            <h1
              className="mt-4 font-black leading-tight text-white"
              style={{ fontSize: "clamp(36px, 5.5vw, 66px)" }}
            >
              Up and running
              <br />
              <span style={{ color: "#ea6c00" }}>in three steps.</span>
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              From account creation to your first vote — the entire journey takes minutes, not days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Steps ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="space-y-16 md:space-y-24">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] lg:gap-16">
                  {/* Step marker */}
                  <div className="flex items-start gap-4 md:flex-col md:gap-3">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white shadow-lg"
                      style={{ background: step.color }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <p
                        className="text-3xl font-black leading-none tracking-tight"
                        style={{ color: "rgba(0,0,0,0.06)", fontSize: 64 }}
                        aria-hidden
                      >
                        {step.num}
                      </p>
                    </div>
                  </div>

                  {/* Step content */}
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 md:text-3xl">{step.label}</h2>
                    <p className="mt-2 text-base text-gray-500">{step.summary}</p>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {step.substeps.map((sub, j) => {
                        const Icon = sub.icon;
                        return (
                          <div
                            key={j}
                            className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3.5"
                          >
                            <div
                              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                              style={{ background: step.color + "18" }}
                            >
                              <Icon className="h-3.5 w-3.5" style={{ color: step.color }} />
                            </div>
                            <p className="text-sm text-gray-600">{sub.text}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div
                      className="mt-5 rounded-2xl border-l-4 px-4 py-3"
                      style={{ borderColor: step.color, background: step.color + "08" }}
                    >
                      <p className="text-xs leading-relaxed text-gray-500">{step.note}</p>
                    </div>
                  </div>
                </div>

                {/* Connector between steps */}
                {i < STEPS.length - 1 && (
                  <div className="mt-16 hidden justify-center md:flex md:mt-24" aria-hidden>
                    <div
                      className="h-16 w-px"
                      style={{ background: "linear-gradient(to bottom, #e5e7eb, transparent)" }}
                    />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <span className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500">
              FAQ
            </span>
            <h2
              className="mt-2 font-black leading-tight text-gray-900"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Common questions
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <p className="text-sm font-bold text-gray-900">{faq.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-36" style={{ background: "#0f172a" }}>
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#fb923c" }}>
              Ready when you are
            </p>
            <h2
              className="font-black leading-tight text-white"
              style={{ fontSize: "clamp(30px, 5vw, 58px)" }}
            >
              Start in minutes.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Create your account, complete KYC, and join your first event — all on one platform.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105"
                style={{ background: "#ea6c00", boxShadow: "0 12px 36px rgba(234,108,0,0.38)" }}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/landing/features"
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Explore all features →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
