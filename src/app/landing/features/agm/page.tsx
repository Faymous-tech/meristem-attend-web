"use client";
import Link from "next/link";
import { ArrowRight, Building2, Vote, ShieldCheck, FileText, QrCode, Radio, Wifi } from "lucide-react";
import { Reveal } from "../../_components/Reveal";

const FEATURES = [
  {
    icon: Building2,
    color: "#1e40af",
    bgColor: "#eff6ff",
    title: "Shareholder Meetings",
    desc: "End-to-end digital meeting management — RSVP, capacity management, live streaming, agenda distribution, and post-meeting documentation. Supports in-person, virtual, and hybrid formats.",
    points: ["RSVP & attendance tracking", "Live resolution management", "Virtual & hybrid support", "SEC/NGX compliance tools"],
  },
  {
    icon: Vote,
    color: "#ea6c00",
    bgColor: "#fff7ed",
    title: "Real-time Voting",
    desc: "Shareholders cast votes on resolutions in real time from any device. Results are tallied instantly with a verifiable audit trail — no waiting, no disputes.",
    points: ["Live vote tallying", "Time-stamped records", "Verifiable audit trail", "Multi-resolution support"],
  },
  {
    icon: ShieldCheck,
    color: "#16a34a",
    bgColor: "#f0fdf4",
    title: "KYC & Identity Verification",
    desc: "Regulatory-grade identity verification using BVN, NIN, and CHN — paired with face liveness detection. Get shareholders verified in under 2 minutes.",
    points: ["BVN, NIN, CHN verification", "Face liveness detection", "Regulatory-grade compliance", "Instant approval flow"],
  },
  {
    icon: FileText,
    color: "#0891b2",
    bgColor: "#ecfeff",
    title: "Proxy Management",
    desc: "Shareholders can appoint a named proxy or designate the Chairman as proxy — all digitally. Proxy instructions are captured and executed automatically during voting.",
    points: ["Digital proxy forms", "Chairman proxy support", "Named proxy appointment", "Automated proxy execution"],
  },
  {
    icon: QrCode,
    color: "#7c22c9",
    bgColor: "#faf5ff",
    title: "QR Check-in",
    desc: "Every registered attendee receives a unique QR code for instant in-person check-in. Eliminate registration queues and get real-time attendance visibility.",
    points: ["Unique QR per attendee", "Instant scan & verify", "Real-time head count", "Offline-capable scanner"],
  },
  {
    icon: Radio,
    color: "#dc2626",
    bgColor: "#fef2f2",
    title: "Live Streaming",
    desc: "Broadcast events to virtual and remote attendees with low-latency streaming. Integrated with the voting system so remote shareholders can participate fully.",
    points: ["Low-latency broadcast", "Remote voting integration", "Recording & playback", "Multi-platform delivery"],
  },
];

export default function AGMPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-24 pt-36 md:pt-44"
        style={{ background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden>
          <span
            className="absolute -right-12 -top-4 font-black leading-none text-white"
            style={{ fontSize: 220, opacity: 0.025, letterSpacing: "-0.04em" }}
          >
            AGM
          </span>
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{ borderColor: "rgba(234,108,0,0.4)", color: "#fb923c", background: "rgba(234,108,0,0.1)" }}
            >
              <Wifi className="h-3 w-3" />
              Virtual AGMs &amp; Investor Relations
            </span>
            <h1
              className="mt-4 font-black leading-tight text-white"
              style={{ fontSize: "clamp(32px, 5.5vw, 62px)" }}
            >
              Run compliant, verified shareholder
              <br />
              <span style={{ color: "#ea6c00" }}>meetings from anywhere</span>
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Attend handles the full AGM lifecycle — from notice publication and identity verification to live voting, quorum tracking, and post-meeting audit logs. Built for CAMA 2020 and SEC Nigeria compliance.
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
              Ready to modernise your AGMs?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Join Nigeria&apos;s leading institutions on the platform built for compliant, digital shareholder meetings.
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
