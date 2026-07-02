"use client";
import Link from "next/link";
import { ArrowRight, Trophy, UserPlus, ClipboardList, Radio, BarChart2, Award, Lightbulb } from "lucide-react";
import { Reveal } from "../../_components/Reveal";

const FEATURES = [
  {
    icon: Trophy,
    color: "#ea6c00",
    bgColor: "#fff7ed",
    title: "Challenge Directory",
    desc: "Publish your innovation challenge with full details — eligibility criteria, timeline, prizes, and judging rubric — discoverable to applicants across the platform.",
    points: ["Public challenge listing", "Eligibility filters", "Prize & timeline display", "Judging criteria breakdown"],
  },
  {
    icon: UserPlus,
    color: "#1e40af",
    bgColor: "#eff6ff",
    title: "Team Application & Formation",
    desc: "Applicants register individually or form teams directly on the platform. Manage team size limits, invite teammates by email, and track formation status.",
    points: ["Individual & team registration", "Team invite links", "Size & composition rules", "Application deadline enforcement"],
  },
  {
    icon: ClipboardList,
    color: "#7c22c9",
    bgColor: "#faf5ff",
    title: "Application Status Tracking",
    desc: "Every applicant gets a live status dashboard — from submitted to shortlisted to finalist. Organisers control stage transitions and communicate updates in-platform.",
    points: ["Live status dashboard", "Stage-gate approvals", "In-platform notifications", "Bulk status updates"],
  },
  {
    icon: Radio,
    color: "#dc2626",
    bgColor: "#fef2f2",
    title: "Session Streaming",
    desc: "Stream workshops, mentorship sessions, and the live pitch finals to all participants and judges — with breakout room support for team working sessions.",
    points: ["Live pitch streaming", "Workshop broadcasts", "Breakout room support", "Recording & archive"],
  },
  {
    icon: BarChart2,
    color: "#0891b2",
    bgColor: "#ecfeff",
    title: "Judging Dashboard",
    desc: "Judges score submissions against a configurable rubric. Scores aggregate automatically, rankings update in real time, and results are exportable for transparency.",
    points: ["Configurable scoring rubric", "Real-time leaderboard", "Blind judging mode", "Score export & audit trail"],
  },
  {
    icon: Award,
    color: "#16a34a",
    bgColor: "#f0fdf4",
    title: "Certificates & Leaderboard",
    desc: "Every participant receives a verifiable certificate of participation. Winners get branded award documents. A public leaderboard celebrates finalists and winners.",
    points: ["Auto-issued certificates", "Branded winner documents", "Public leaderboard", "Verifiable credential links"],
  },
];

export default function InnovationPage() {
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
            HACK
          </span>
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{ borderColor: "rgba(234,108,0,0.4)", color: "#fb923c", background: "rgba(234,108,0,0.1)" }}
            >
              <Lightbulb className="h-3 w-3" />
              Hackathons &amp; Innovation Challenges
            </span>
            <h1
              className="mt-4 font-black leading-tight text-white"
              style={{ fontSize: "clamp(32px, 5.5vw, 62px)" }}
            >
              Manage the full innovation
              <br />
              <span style={{ color: "#ea6c00" }}>challenge lifecycle</span>
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              From challenge discovery and team applications to live pitch sessions, judging, and winner announcements — Attend handles every stage of your innovation programme.
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
              Ready to run your next challenge?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              From applications to award ceremonies — Attend runs every stage of your innovation programme end-to-end.
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
