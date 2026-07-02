"use client";
import Link from "next/link";
import { ArrowRight, CalendarDays, QrCode, Radio, FileText, Award, FolderOpen } from "lucide-react";
import { Reveal } from "../../_components/Reveal";

const FEATURES = [
  {
    icon: CalendarDays,
    color: "#1e40af",
    bgColor: "#eff6ff",
    title: "Event Builder & RSVP",
    desc: "Create and publish your event in minutes — set capacity, configure registration fields, publish an agenda, and open RSVPs with a shareable link or embedded form.",
    points: ["Flexible event builder", "Custom registration fields", "Capacity management", "Shareable RSVP link"],
  },
  {
    icon: QrCode,
    color: "#7c22c9",
    bgColor: "#faf5ff",
    title: "Digital Check-in",
    desc: "Every registered attendee receives a unique QR code. Scan at the door for instant, paperless check-in with real-time headcount and capacity alerts for organisers.",
    points: ["Unique QR per attendee", "Instant scan & verify", "Real-time headcount", "Offline-capable scanner"],
  },
  {
    icon: Radio,
    color: "#dc2626",
    bgColor: "#fef2f2",
    title: "Live Streaming",
    desc: "Broadcast your event to virtual and remote attendees simultaneously with low-latency streaming, presenter controls, and multi-platform delivery.",
    points: ["Low-latency broadcast", "Hybrid event support", "Presenter & co-host controls", "Multi-platform delivery"],
  },
  {
    icon: FileText,
    color: "#0891b2",
    bgColor: "#ecfeff",
    title: "Post-Event Document Distribution",
    desc: "Deliver post-event communiques, presentations, and resources directly to attendees' document vault. Time-lock distribution or release immediately after the session ends.",
    points: ["Automated document delivery", "Time-locked distribution", "Attendee document vault", "Download tracking"],
  },
  {
    icon: Award,
    color: "#16a34a",
    bgColor: "#f0fdf4",
    title: "Attendance Certificates",
    desc: "Issue branded, verifiable attendance certificates to every participant automatically. Downloadable on demand, shareable, and linked to the event record.",
    points: ["Auto-issued certificates", "Branded templates", "Verifiable credentials", "On-demand download"],
  },
  {
    icon: FolderOpen,
    color: "#ea6c00",
    bgColor: "#fff7ed",
    title: "Event Archive",
    desc: "Every event — its attendee list, documents, recordings, and certificates — is permanently archived and accessible to organisers and attendees on demand.",
    points: ["Full event history", "Attendee list archive", "Recording storage", "Searchable archive"],
  },
];

export default function GeneralPage() {
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
            style={{ fontSize: 140, opacity: 0.025, letterSpacing: "-0.04em" }}
          >
            EVENTS
          </span>
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{ borderColor: "rgba(234,108,0,0.4)", color: "#fb923c", background: "rgba(234,108,0,0.1)" }}
            >
              <CalendarDays className="h-3 w-3" />
              General Client Events
            </span>
            <h1
              className="mt-4 font-black leading-tight text-white"
              style={{ fontSize: "clamp(32px, 5.5vw, 62px)" }}
            >
              A professional event channel
              <br />
              <span style={{ color: "#ea6c00" }}>for every occasion</span>
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Replace ad-hoc tools with a structured, branded event experience. Host conferences, seminars, roundtables, and awards ceremonies with full RSVP, streaming, and post-event distribution.
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
              Every event, handled.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              One platform for every corporate event you run — RSVP to archive, in-person to virtual.
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
