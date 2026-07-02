"use client";
import Link from "next/link";
import { ArrowRight, Globe, Users, Lock, Radio, MessageSquare, BarChart2, Rocket } from "lucide-react";
import { Reveal } from "../../_components/Reveal";

const FEATURES = [
  {
    icon: Globe,
    color: "#ea6c00",
    bgColor: "#fff7ed",
    title: "Branded Event Microsite",
    desc: "Create a fully branded event page with countdown timer, event details, speaker profiles, and RSVP form — live in minutes, customised to your identity.",
    points: ["Custom branding & colour scheme", "Countdown timer", "Speaker & agenda pages", "Mobile-responsive design"],
  },
  {
    icon: Users,
    color: "#1e40af",
    bgColor: "#eff6ff",
    title: "Tiered Invitation Management",
    desc: "Control who gets in and when. Segment your audience into tiers — press, VIPs, partners, general public — each with different access levels and registration flows.",
    points: ["Audience segmentation", "Tiered access control", "Personalised invite links", "Capacity limits per tier"],
  },
  {
    icon: Lock,
    color: "#7c22c9",
    bgColor: "#faf5ff",
    title: "Embargoed Press Kit Release",
    desc: "Pre-load press kits, product assets, and statements. Set a release time and they go live automatically — no manual distribution, no leaks.",
    points: ["Time-locked asset release", "Secure pre-load vault", "Auto-distribution on go-live", "Download tracking"],
  },
  {
    icon: Radio,
    color: "#dc2626",
    bgColor: "#fef2f2",
    title: "Live Launch Broadcast",
    desc: "Stream your launch event to registered attendees with low-latency video, screen sharing, and presenter controls — fully integrated with your event page.",
    points: ["Low-latency streaming", "Screen & slide sharing", "Presenter controls", "Recording & replay"],
  },
  {
    icon: MessageSquare,
    color: "#0891b2",
    bgColor: "#ecfeff",
    title: "Interactive Engagement",
    desc: "Keep your audience engaged with live polls, moderated Q&A sessions, and reaction tools — all visible to presenters in real time.",
    points: ["Live audience polls", "Moderated Q&A queue", "Real-time reactions", "Presenter dashboard"],
  },
  {
    icon: BarChart2,
    color: "#16a34a",
    bgColor: "#f0fdf4",
    title: "Post-Launch Analytics",
    desc: "See exactly who attended, when they joined, how long they stayed, and which content they engaged with — in a clean post-event report.",
    points: ["Attendance & drop-off data", "Engagement heatmaps", "Asset download tracking", "Exportable reports"],
  },
];

export default function LaunchesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-24 pt-36 md:pt-44"
        style={{ background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden>
          <span
            className="absolute -right-8 -top-4 font-black leading-none text-white"
            style={{ fontSize: 160, opacity: 0.025, letterSpacing: "-0.04em" }}
          >
            LAUNCH
          </span>
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{ borderColor: "rgba(234,108,0,0.4)", color: "#fb923c", background: "rgba(234,108,0,0.1)" }}
            >
              <Rocket className="h-3 w-3" />
              Product Launch Events
            </span>
            <h1
              className="mt-4 font-black leading-tight text-white"
              style={{ fontSize: "clamp(32px, 5.5vw, 62px)" }}
            >
              Launch your product to a
              <br />
              <span style={{ color: "#ea6c00" }}>registered, engaged audience</span>
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Create branded event microsites, manage tiered invitations, release embargoed press kits at the perfect moment, and broadcast your launch live — all from one platform.
            </p>
            <div className="mt-8">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105"
                style={{ background: "#ea6c00", boxShadow: "0 12px 36px rgba(234,108,0,0.38)" }}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Feature cards ───────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 50}>
                  <div className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ background: f.bgColor }}
                    >
                      <Icon className="h-5 w-5" style={{ color: f.color }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{f.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{f.desc}</p>
                    <ul className="mt-5 space-y-1.5 border-t border-gray-50 pt-5">
                      {f.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: f.color }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-36" style={{ background: "#0f172a" }}>
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#fb923c" }}>
              Get started today
            </p>
            <h2
              className="font-black leading-tight text-white"
              style={{ fontSize: "clamp(30px, 5vw, 58px)" }}
            >
              Ready to launch with impact?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Build your launch event in minutes — branded, controlled, and broadcast-ready from day one.
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
                href="/login"
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Already have an account? Sign in →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
