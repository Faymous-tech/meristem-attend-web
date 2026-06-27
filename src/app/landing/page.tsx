"use client";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Building2, Rocket, Lightbulb,
  ShieldCheck, QrCode, Vote, Radio, CheckCircle2, Users, Star,
} from "lucide-react";
import { Reveal } from "./_components/Reveal";

const TESTIMONIALS = [
  {
    quote: "Attend transformed our AGM from a logistical nightmare into a seamless experience. Shareholder turnout doubled and voting results were instant.",
    name: "Adaeze Nwosu", role: "Company Secretary", company: "Zenith Bank Plc",
    accent: true,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&q=80&fit=crop&crop=face",
  },
  {
    quote: "The KYC flow is the most elegant we've seen. Our shareholders verified in minutes, not days. The proxy feature alone saved weeks of admin.",
    name: "Tunde Bakare", role: "Head of Investor Relations", company: "GTCo Holdings",
    accent: false,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop&crop=face",
  },
  {
    quote: "We ran MeriHack entirely on Attend — from applications through to certificate issuance. Hundreds of participants, zero issues.",
    name: "Dr. Yewande Adeyemi", role: "Chief Innovation Officer", company: "Meristem Innovation Hub",
    accent: false,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80&fit=crop&crop=face",
  },
];

export default function LandingHome() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1800&q=80&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(8,12,24,0.96) 0%, rgba(17,24,39,0.88) 55%, rgba(17,24,39,0.65) 100%)" }}
        />

        {/* Background watermark */}
        <div
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-end overflow-hidden"
          aria-hidden
        >
          <span
            style={{
              fontSize: "clamp(110px, 20vw, 320px)",
              fontWeight: 900,
              color: "rgba(255,255,255,0.03)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              transform: "translateX(6%)",
            }}
          >
            ATTEND
          </span>
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 md:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Left — headline & CTAs */}
            <div className="flex flex-col gap-6">
              <div
                className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
                style={{ borderColor: "rgba(234,108,0,0.5)", color: "#fb923c", background: "rgba(234,108,0,0.1)" }}
              >
                <Radio className="h-3 w-3" />
                Nigeria&apos;s enterprise events platform
              </div>

              <h1
                className="font-black leading-[0.95] tracking-tight text-white"
                style={{ fontSize: "clamp(44px, 6.5vw, 84px)" }}
              >
                The smarter{" "}
                <span style={{ color: "#ea6c00" }}>✦</span>
                <br />
                way to{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #ea6c00, #f59e0b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  attend.
                </span>
              </h1>

              <p
                className="max-w-md text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                AGMs, product launches, innovation challenges, and every corporate event — end-to-end on a single platform built for Nigeria&apos;s capital markets.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105"
                  style={{ background: "#ea6c00", boxShadow: "0 8px 28px rgba(234,108,0,0.38)" }}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/landing/how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
                >
                  See how it works
                </Link>
              </div>
            </div>

            {/* Right — floating UI cards */}
            <div className="relative hidden lg:block" style={{ height: 500 }}>
              {/* Card A: Live voting */}
              <div
                className="absolute rounded-2xl border border-white/10 shadow-2xl"
                style={{
                  width: 272, top: 16, left: 30,
                  background: "#0f172a", padding: "16px",
                  animation: "floatA 5s ease-in-out infinite",
                  animationDelay: "0.4s", zIndex: 1,
                  boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Live Now
                  </span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>Resolution 3/4</span>
                </div>
                <p className="text-sm font-bold text-white leading-snug">
                  Zenith Bank Plc
                  <br />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>Re-election of Directors</span>
                </p>
                <div className="mt-3 space-y-2 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.06)" }}>
                  {[
                    { label: "For", pct: 84, active: true },
                    { label: "Against", pct: 12, active: false },
                    { label: "Abstain", pct: 4, active: false },
                  ].map((v) => (
                    <div key={v.label}>
                      <div className="mb-1 flex justify-between" style={{ fontSize: 10 }}>
                        <span style={{ color: v.active ? "white" : "rgba(255,255,255,0.45)" }}>{v.label}</span>
                        <span style={{ color: "white", fontWeight: 700 }}>{v.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${v.pct}%`, background: v.active ? "#ea6c00" : "rgba(255,255,255,0.25)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card B: KYC verified */}
              <div
                className="absolute rounded-2xl bg-white shadow-2xl"
                style={{
                  width: 232, top: 200, right: 10,
                  padding: "16px",
                  animation: "floatB 6s ease-in-out infinite",
                  animationDelay: "1s", zIndex: 2,
                  boxShadow: "0 32px 64px rgba(0,0,0,0.25)",
                }}
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "#dcfce7" }}>
                    <ShieldCheck className="h-4 w-4" style={{ color: "#16a34a" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">KYC Verified</p>
                    <p style={{ fontSize: 10, color: "#9ca3af" }}>Identity confirmed</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {["BVN", "NIN", "Face Match"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-xl px-3 py-2" style={{ background: "#f9fafb" }}>
                      <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 500 }}>{item}</span>
                      <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "#16a34a" }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card C: Event RSVP */}
              <div
                className="absolute rounded-2xl bg-white shadow-2xl"
                style={{
                  width: 252, bottom: 20, left: 60,
                  padding: "0 0 16px",
                  animation: "floatC 4.5s ease-in-out infinite",
                  animationDelay: "0s", zIndex: 3,
                  overflow: "hidden",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.25)",
                }}
              >
                <div className="relative h-20 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80&fit=crop"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }} />
                  <span
                    className="absolute bottom-2 left-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white"
                    style={{ background: "#ea6c00" }}
                  >
                    Launch Event
                  </span>
                </div>
                <div className="px-4 pt-3">
                  <p className="text-sm font-bold text-gray-900 leading-snug">MeriSave Product Launch</p>
                  <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>15 Jun 2026 · 2:00 PM · Virtual</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1" style={{ fontSize: 11, color: "#9ca3af" }}>
                      <Users className="h-3 w-3" /> Registered
                    </div>
                    <button className="rounded-full px-4 py-1.5 text-[11px] font-bold text-white" style={{ background: "#ea6c00" }}>
                      RSVP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.3)" }}>
          <span style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <div className="h-8 w-px" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </div>
      </section>

      {/*
       * ─── Partner logos strip ─────────────────────────────────────
       * Commented out — to be restored when partner logos are verified
       *
       * <section className="border-y border-gray-100 bg-white py-8">
       *   <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
       *     Trusted by Nigeria's leading institutions
       *   </p>
       *   <div className="overflow-hidden">
       *     <div className="marquee-inner flex gap-14 whitespace-nowrap" style={{ width: "max-content" }}>
       *       {[...PARTNERS, ...PARTNERS].map((p, i) => (
       *         <span key={i} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400">
       *           <span className="inline-block h-2 w-2 rounded-full" style={{ background: COLORS[i % 6] }} />
       *           {p}
       *         </span>
       *       ))}
       *     </div>
       *   </div>
       * </section>
       */}

      {/* ─── Value section ───────────────────────────────────────── */}
      <section className="py-24 md:py-36" style={{ background: "#0f172a" }}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
              style={{ borderColor: "rgba(234,108,0,0.3)", color: "#fb923c", background: "rgba(234,108,0,0.08)" }}
            >
              Why Attend
            </span>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal delay={80}>
              <p
                className="font-black leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
              >
                One<br />
                <span style={{ color: "#ea6c00" }}>platform.</span>
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="space-y-5">
                <p
                  className="font-bold leading-snug text-white"
                  style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}
                >
                  Nigeria&apos;s capital markets deserve infrastructure as sophisticated as their ambitions.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Attend replaces paper proxies, spreadsheets, and fragmented tools with a seamless, KYC-verified digital experience — one platform for every corporate event, built for the institutions that move markets.
                </p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-85"
                  style={{ background: "#ea6c00" }}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Features overview ───────────────────────────────────── */}
      <section className="py-24 md:py-32" id="features" style={{ background: "#f8fafc" }}>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500">
                  Features
                </span>
                <h2
                  className="mt-2 font-black leading-tight text-gray-900"
                  style={{ fontSize: "clamp(30px, 4.5vw, 54px)" }}
                >
                  Everything you need<br />to run a modern event
                </h2>
              </div>
              <Link
                href="/landing/features"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-70"
                style={{ color: "#ea6c00" }}
              >
                View all features <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* Bento grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* Shareholder Meetings — wide */}
            <Reveal delay={80} className="md:col-span-2">
              <div
                className="group relative h-full min-h-60 overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #111827 0%, #1e3a5f 100%)" }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />
                <Building2 className="mb-4 h-8 w-8" style={{ color: "rgba(255,255,255,0.6)" }} />
                <h3 className="text-xl font-bold text-white">Shareholder Meetings</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Full digital meeting infrastructure — RSVP management, live streaming, resolutions voting, proxy forms, and post-meeting receipt generation. Regulatory compliant.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Live voting", "Proxy forms", "Compliance", "Digital receipts"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-3 py-1 text-xs font-medium"
                      style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Real-time Voting — tall accent */}
            <Reveal delay={120} className="md:row-span-2">
              <div
                className="group relative h-full min-h-80 overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "linear-gradient(160deg, #ea6c00 0%, #c2410c 100%)" }}
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                <Vote className="mb-4 h-8 w-8 text-white" />
                <h3 className="text-xl font-bold text-white">Real-time Voting</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                  Cast and tally votes on resolutions instantly. Every vote is time-stamped, shareholder-attributed, and verifiable.
                </p>
                <div className="mt-8 rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.14)" }}>
                  <p className="mb-3 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Resolution 3 · Live
                  </p>
                  {[
                    { label: "For", pct: 84 },
                    { label: "Against", pct: 12 },
                    { label: "Abstain", pct: 4 },
                  ].map((v) => (
                    <div key={v.label} className="mb-2.5">
                      <div className="mb-1 flex justify-between" style={{ fontSize: 11 }}>
                        <span className="text-white/75">{v.label}</span>
                        <span className="font-bold text-white">{v.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}>
                        <div className="h-full rounded-full" style={{ width: `${v.pct}%`, background: "rgba(255,255,255,0.85)" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* KYC */}
            <Reveal delay={160}>
              <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-gray-200 transition-colors group-hover:text-gray-400" />
                <ShieldCheck className="mb-3 h-7 w-7" style={{ color: "#16a34a" }} />
                <h3 className="text-base font-bold text-gray-900">KYC & Identity Verification</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  BVN, NIN, CHN with face liveness detection — regulatory-grade identity in under 2 minutes.
                </p>
              </div>
            </Reveal>

            {/* Innovation */}
            <Reveal delay={200}>
              <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-gray-200 transition-colors group-hover:text-gray-400" />
                <Lightbulb className="mb-3 h-7 w-7" style={{ color: "#7c22c9" }} />
                <h3 className="text-base font-bold text-gray-900">Innovation Challenges</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  Full challenge lifecycle — applications, team management, submissions, judging, and digital certificates.
                </p>
              </div>
            </Reveal>

            {/* QR + Launches — wide */}
            <Reveal delay={240} className="md:col-span-2">
              <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-gray-200 transition-colors group-hover:text-gray-400" />
                <div className="flex items-start gap-6">
                  <QrCode className="mt-0.5 h-7 w-7 shrink-0" style={{ color: "#0891b2" }} />
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900">QR Check-in & Launch Events</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                      Instant in-person attendance with unique QR codes — no queues, no paper. Paired with RSVP, press kit distribution, and live streaming.
                    </p>
                  </div>
                  <Rocket className="mt-0.5 h-7 w-7 shrink-0" style={{ color: "#ea6c00" }} />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white" id="testimonials">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500">
                  Testimonials
                </span>
                <h2
                  className="mt-2 font-black leading-tight text-gray-900"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
                >
                  Loved by Nigeria&apos;s<br />leading institutions
                </h2>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-500">4.9 / 5</span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div
                  className="flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: t.accent ? "linear-gradient(135deg, #ea6c00, #c2410c)" : "white",
                    border: t.accent ? "none" : "1px solid #e5e7eb",
                  }}
                >
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-3.5 w-3.5"
                        style={{
                          fill: t.accent ? "rgba(255,255,255,0.7)" : "#fbbf24",
                          color: t.accent ? "rgba(255,255,255,0.7)" : "#fbbf24",
                        }}
                      />
                    ))}
                  </div>
                  <p
                    className="flex-1 text-sm leading-relaxed"
                    style={{ color: t.accent ? "rgba(255,255,255,0.88)" : "#374151" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    className="mt-6 flex items-center gap-3 border-t pt-5"
                    style={{ borderColor: t.accent ? "rgba(255,255,255,0.15)" : "#f3f4f6" }}
                  >
                    <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-bold" style={{ color: t.accent ? "white" : "#111827" }}>
                        {t.name}
                      </p>
                      <p className="text-xs" style={{ color: t.accent ? "rgba(255,255,255,0.6)" : "#6b7280" }}>
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 md:py-44" style={{ background: "#0f172a" }}>
        <div
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
          aria-hidden
        >
          <span
            style={{
              fontSize: "clamp(90px, 18vw, 260px)",
              fontWeight: 900,
              color: "rgba(255,255,255,0.025)",
              letterSpacing: "-0.04em",
            }}
          >
            ATTEND
          </span>
        </div>

        <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#fb923c" }}>
              Get started today
            </p>
            <h2
              className="font-black leading-tight text-white"
              style={{ fontSize: "clamp(34px, 6vw, 72px)" }}
            >
              Ready to modernise
              <br />
              <span style={{ color: "#ea6c00" }}>your events?</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-lg text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Join Nigeria&apos;s leading institutions on the platform built for the future of corporate events.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white transition-all hover:scale-105"
                style={{ background: "#ea6c00", boxShadow: "0 12px 40px rgba(234,108,0,0.4)" }}
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
