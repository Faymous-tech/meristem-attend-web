"use client";
import Link from "next/link";
import {
  ArrowRight, Building2, Vote, ShieldCheck, Lightbulb, QrCode,
  Rocket, Radio, FileText, Bell, Award, Wifi, Users, Lock,
} from "lucide-react";
import { Reveal } from "../_components/Reveal";

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
  {
    icon: Rocket,
    color: "#ea6c00",
    bgColor: "#fff7ed",
    title: "Launch Events",
    desc: "Full infrastructure for product unveilings and corporate launches — RSVP management, press kit distribution, live streaming, and post-event certificates.",
    points: ["RSVP & waitlists", "Press kit delivery", "Live event streaming", "Post-event reports"],
  },
  {
    icon: Lightbulb,
    color: "#7c22c9",
    bgColor: "#faf5ff",
    title: "Innovation Challenges",
    desc: "Run end-to-end innovation programmes — from open applications through team formation, project submissions, judging panels, and digital certificate issuance.",
    points: ["Application management", "Team collaboration tools", "Submission & judging", "Digital certificates"],
  },
  {
    icon: Bell,
    color: "#0891b2",
    bgColor: "#ecfeff",
    title: "Notifications & Reminders",
    desc: "Automated push notifications and email reminders keep attendees informed — from RSVP confirmation through event day reminders and vote alerts.",
    points: ["Push & email alerts", "RSVP confirmations", "Voting reminders", "Post-event notifications"],
  },
  {
    icon: Award,
    color: "#16a34a",
    bgColor: "#f0fdf4",
    title: "Certificates & Receipts",
    desc: "Every participant receives a verifiable digital receipt or certificate after their event. Issued automatically, downloadable on demand.",
    points: ["Auto-generated receipts", "Verifiable certificates", "Downloadable PDFs", "Branded templates"],
  },
  {
    icon: Users,
    color: "#1e40af",
    bgColor: "#eff6ff",
    title: "Event Administration",
    desc: "Organisers get a comprehensive dashboard — manage events, review attendee lists, track RSVPs, monitor live attendance, and export reports.",
    points: ["Organiser dashboard", "Attendee management", "Live monitoring", "Export & reporting"],
  },
  {
    icon: Lock,
    color: "#dc2626",
    bgColor: "#fef2f2",
    title: "Security & Compliance",
    desc: "Enterprise-grade security throughout — encrypted data storage, role-based access controls, and compliance documentation for regulatory submissions.",
    points: ["Data encryption", "Role-based access", "Compliance documentation", "Audit logs"],
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      {/* ─── Page Hero ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-24 pt-36 md:pt-44"
        style={{ background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="absolute -right-16 -top-8 font-black leading-none text-white"
            style={{ fontSize: 220, opacity: 0.025, letterSpacing: "-0.04em" }}
          >
            FEATURES
          </span>
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{ borderColor: "rgba(234,108,0,0.4)", color: "#fb923c", background: "rgba(234,108,0,0.1)" }}
            >
              <Wifi className="h-3 w-3" />
              Platform Features
            </span>
            <h1
              className="mt-4 font-black leading-tight text-white"
              style={{ fontSize: "clamp(36px, 5.5vw, 66px)" }}
            >
              Everything you need to run
              <br />
              <span style={{ color: "#ea6c00" }}>a modern event.</span>
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              From identity verification to live vote tallies — Attend handles every layer of your event infrastructure so you can focus on what matters.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Features grid ───────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 40}>
                  <div className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ background: f.bgColor }}
                    >
                      <Icon className="h-5 w-5" style={{ color: f.color }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.desc}</p>
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
              Ready to see it in action?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Get access to the full platform — every feature, every tool, built for Nigeria&apos;s most demanding institutions.
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
                href="/landing/how-it-works"
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                See how it works →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
