"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Building2, Rocket, Lightbulb, CalendarDays,
  ShieldCheck, QrCode, Vote, Radio, CheckCircle2, Users, BarChart3,
  Twitter, Linkedin, Instagram, Menu, X, Clock, Star,
} from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Stats", href: "#stats" },
  { label: "Testimonials", href: "#testimonials" },
];

const PARTNERS = [
  "Zenith Bank", "GTCo Holdings", "Dangote Cement", "NGX Group",
  "SEC Nigeria", "Central Bank of Nigeria", "Meristem", "Access Bank",
  "UBA Group", "Stanbic IBTC", "FBNQuest", "Fidelity Bank",
];

const STEPS = [
  {
    num: "01", icon: ShieldCheck, color: "#111827",
    label: "Register & Verify",
    desc: "Create your account and complete KYC in under 2 minutes — BVN, NIN, CHN, and a face liveness check. All regulatory-grade.",
  },
  {
    num: "02", icon: CalendarDays, color: "#ea6c00",
    label: "Join Your Event",
    desc: "RSVP to AGMs, product launches, or innovation challenges. Virtual, hybrid, or in-person — your choice.",
  },
  {
    num: "03", icon: Vote, color: "#7c22c9",
    label: "Engage & Vote",
    desc: "Stream live sessions, cast real-time votes on resolutions, appoint proxies, and download verifiable receipts.",
  },
];

const STATS = [
  { value: "40K+", label: "Shareholders onboarded", Icon: Users },
  { value: "200+", label: "Events hosted", Icon: CalendarDays },
  { value: "99.8%", label: "Vote accuracy rate", Icon: BarChart3 },
  { value: "72 hrs", label: "Average setup time", Icon: Clock },
];

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
    quote: "We ran MeriHack entirely on Attend — from applications through to certificate issuance. 400+ participants, zero issues.",
    name: "Dr. Yewande Adeyemi", role: "Chief Innovation Officer", company: "Meristem Innovation Hub",
    accent: false,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80&fit=crop&crop=face",
  },
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes floatA { 0%,100% { transform: rotate(-2deg) translateY(0); } 50% { transform: rotate(-2deg) translateY(-10px); } }
        @keyframes floatB { 0%,100% { transform: rotate(1.5deg) translateY(0); } 50% { transform: rotate(1.5deg) translateY(-8px); } }
        @keyframes floatC { 0%,100% { transform: rotate(-0.5deg) translateY(0); } 50% { transform: rotate(-0.5deg) translateY(-13px); } }
        .marquee-inner { animation: marquee 30s linear infinite; }
        .marquee-inner:hover { animation-play-state: paused; }
        html { scroll-behavior: smooth; }
      `}</style>

      <div style={{ fontFamily: "Outfit, sans-serif", minHeight: "100vh", background: "#fff" }}>

        {/* ─── Navbar ─────────────────────────────────────────────── */}
        <header
          className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
          style={{
            background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
          }}
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
            <Link href="/landing">
              <img src="/attend-logo.png" alt="Attend" style={{ height: 26, width: "auto" }} />
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: scrolled ? "#374151" : "rgba(255,255,255,0.82)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/login"
                className="text-sm font-semibold transition-colors"
                style={{ color: scrolled ? "#374151" : "rgba(255,255,255,0.82)" }}
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "#ea6c00" }}
              >
                Get started <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl md:hidden"
              style={{ color: scrolled ? "#111827" : "white" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
              <nav className="space-y-0.5">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                <Link href="/login" className="block rounded-xl border border-gray-200 px-4 py-2.5 text-center text-sm font-semibold text-gray-800">
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="block rounded-xl px-4 py-2.5 text-center text-sm font-bold text-white"
                  style={{ background: "#ea6c00" }}
                >
                  Get started
                </Link>
              </div>
            </div>
          )}
        </header>

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

          {/* Watermark */}
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

          <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-12 pt-28 md:px-8">
            <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
              {/* Left */}
              <div>
                <div
                  className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
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

                <div className="mt-8 flex max-w-sm items-start gap-4 lg:ml-auto lg:max-w-[280px]">
                  <div className="mt-2 h-px flex-1 shrink-0 bg-white/20" />
                  <p className="text-sm leading-relaxed text-white/60">
                    AGMs, product launches, hackathons, and corporate events — end-to-end on a single platform built for Nigeria&apos;s capital markets.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105"
                    style={{ background: "#ea6c00", boxShadow: "0 8px 28px rgba(234,108,0,0.38)" }}
                  >
                    Get started free <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#features"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
                  >
                    See how it works
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-8 border-t border-white/10 pt-8">
                  {[
                    { val: "200+", label: "Events hosted" },
                    { val: "40K+", label: "Shareholders" },
                    { val: "99.8%", label: "Uptime" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-lg font-black text-white">{s.val}</p>
                      <p className="text-xs text-white/40">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — floating UI cards */}
              <div className="relative hidden lg:block" style={{ height: 500 }}>
                {/* Card A: AGM Live voting */}
                <div
                  className="absolute rounded-2xl border border-white/10 shadow-2xl"
                  style={{
                    width: 272,
                    top: 16,
                    left: 30,
                    background: "#0f172a",
                    padding: "16px",
                    animation: "floatA 5s ease-in-out infinite",
                    animationDelay: "0.4s",
                    zIndex: 1,
                    boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase text-white">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Live Now
                    </span>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>AGM · Resolution 3/4</span>
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
                  <div className="mt-2 flex justify-between" style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
                    <span>4,200,000 votes cast</span>
                    <span>2 min remaining</span>
                  </div>
                </div>

                {/* Card B: KYC verified */}
                <div
                  className="absolute rounded-2xl bg-white shadow-2xl"
                  style={{
                    width: 232,
                    top: 200,
                    right: 10,
                    padding: "16px",
                    animation: "floatB 6s ease-in-out infinite",
                    animationDelay: "1s",
                    zIndex: 2,
                    boxShadow: "0 32px 64px rgba(0,0,0,0.25)",
                  }}
                >
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "#dcfce7" }}>
                      <ShieldCheck className="h-4.5 w-4.5" style={{ color: "#16a34a" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">KYC Verified</p>
                      <p style={{ fontSize: 10, color: "#9ca3af" }}>Identity confirmed</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {["BVN", "NIN", "Face Match"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl px-3 py-2"
                        style={{ background: "#f9fafb" }}
                      >
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
                    width: 252,
                    bottom: 20,
                    left: 60,
                    padding: "0 0 16px",
                    animation: "floatC 4.5s ease-in-out infinite",
                    animationDelay: "0s",
                    zIndex: 3,
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
                      Product Launch
                    </span>
                  </div>
                  <div className="px-4 pt-3">
                    <p className="text-sm font-bold text-gray-900 leading-snug">MeriSave Product Launch</p>
                    <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>15 Jun 2026 · 2:00 PM · Virtual</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1" style={{ fontSize: 11, color: "#9ca3af" }}>
                        <Users className="h-3 w-3" /> 1,843 registered
                      </div>
                      <button
                        className="rounded-full px-4 py-1.5 text-[11px] font-bold text-white"
                        style={{ background: "#ea6c00" }}
                      >
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

        {/* ─── Partner logos ───────────────────────────────────────── */}
        <section className="border-y border-gray-100 bg-white py-8" id="partners">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
            Trusted by Nigeria&apos;s leading institutions
          </p>
          <div className="overflow-hidden">
            <div className="marquee-inner flex gap-14 whitespace-nowrap" style={{ width: "max-content" }}>
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400"
                >
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: ["#1e40af","#ea6c00","#7c22c9","#0891b2","#16a34a","#dc2626"][i % 6] }}
                  />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── About / value ───────────────────────────────────────── */}
        <section className="py-24 md:py-36" style={{ background: "#0f172a" }}>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <span
                className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
                style={{ borderColor: "rgba(234,108,0,0.3)", color: "#fb923c", background: "rgba(234,108,0,0.08)" }}
              >
                Why Attend
              </span>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
              <Reveal delay={80}>
                <div>
                  <p
                    className="font-black leading-none tracking-tight"
                    style={{ fontSize: "clamp(80px, 13vw, 168px)", color: "white" }}
                  >
                    40K<span style={{ color: "#ea6c00" }}>+</span>
                  </p>
                  <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                    shareholders onboarded and counting
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="space-y-5">
                  <p
                    className="font-bold leading-snug text-white"
                    style={{ fontSize: "clamp(20px, 2.4vw, 26px)" }}
                  >
                    Nigeria&apos;s capital markets deserve infrastructure as sophisticated as their ambitions.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Attend replaces paper proxies, spreadsheets, and Zoom calls with a seamless, KYC-verified digital experience — one platform for AGMs, product launches, innovation challenges, and every corporate event in between.
                  </p>
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-85"
                    style={{ background: "#ea6c00" }}
                  >
                    Start your free account <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Features bento ─────────────────────────────────────── */}
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
                <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                  From shareholder verification to live vote tallies — Attend handles the infrastructure so you can focus on what matters.
                </p>
              </div>
            </Reveal>

            {/* Bento grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">

              {/* AGM — wide */}
              <Reveal delay={80} className="md:col-span-2">
                <div
                  className="group relative h-full min-h-60 overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ background: "linear-gradient(135deg, #111827 0%, #1e3a5f 100%)" }}
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  />
                  <div
                    className="pointer-events-none absolute bottom-0 right-0 select-none font-black leading-none text-white"
                    style={{ fontSize: 110, opacity: 0.04 }}
                    aria-hidden
                  >
                    AGM
                  </div>
                  <Building2 className="mb-4 h-8 w-8" style={{ color: "rgba(255,255,255,0.6)" }} />
                  <h3 className="text-xl font-bold text-white">AGM & Shareholder Meetings</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Full digital AGM infrastructure — RSVP management, live streaming, resolutions voting, proxy forms, and post-meeting receipt generation. SEC and NGX compliant.
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

              {/* Vote — tall accent */}
              <Reveal delay={120} className="md:row-span-2">
                <div
                  className="group relative h-full min-h-80 overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ background: "linear-gradient(160deg, #ea6c00 0%, #c2410c 100%)" }}
                >
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  />
                  <Vote className="mb-4 h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold text-white">Real-time Voting</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                    Cast and tally votes on resolutions instantly. Every vote is time-stamped, shareholder-attributed, and cryptographically verifiable.
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
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${v.pct}%`, background: "rgba(255,255,255,0.85)" }}
                          />
                        </div>
                      </div>
                    ))}
                    <p className="mt-3 text-center text-white/50" style={{ fontSize: 10 }}>
                      4,200,000 votes · 2 min remaining
                    </p>
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
                    Full hackathon lifecycle — applications, team management, submissions, judging, and digital certificates.
                  </p>
                </div>
              </Reveal>

              {/* QR — wide */}
              <Reveal delay={240} className="md:col-span-2">
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-gray-200 transition-colors group-hover:text-gray-400" />
                  <div className="flex items-start gap-6">
                    <QrCode className="mt-0.5 h-7 w-7 shrink-0" style={{ color: "#0891b2" }} />
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-900">QR Check-in & Product Launches</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                        Instant in-person attendance with unique QR codes — no queues, no paper. Paired with RSVP, press kit distribution, and live event streaming for product launches.
                      </p>
                    </div>
                    <Rocket className="mt-0.5 h-7 w-7 shrink-0" style={{ color: "#ea6c00" }} />
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ─── How it works ────────────────────────────────────────── */}
        <section className="overflow-hidden bg-white py-24 md:py-32" id="how-it-works">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <span className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500">
                Process
              </span>
              <h2
                className="mt-2 font-black leading-tight text-gray-900"
                style={{ fontSize: "clamp(30px, 4.5vw, 54px)" }}
              >
                Up and running<br />in three steps
              </h2>
            </Reveal>

            <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Connector */}
              <div
                className="absolute top-14 left-[14%] right-[14%] hidden h-px md:block"
                style={{ background: "linear-gradient(90deg, #111827 0%, #ea6c00 50%, #7c22c9 100%)" }}
              />

              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.num} delay={i * 110}>
                    <div className="relative flex flex-col">
                      <div
                        className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                        style={{ background: step.color }}
                      >
                        <Icon className="h-6 w-6" />
                        <span
                          className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black text-white"
                          style={{ background: step.color, border: "2px solid white" }}
                        >
                          {i + 1}
                        </span>
                      </div>
                      <p
                        className="select-none font-black leading-none text-gray-100"
                        style={{ fontSize: 64 }}
                        aria-hidden
                      >
                        {step.num}
                      </p>
                      <h3 className="-mt-6 text-xl font-bold text-gray-900">{step.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Stats ───────────────────────────────────────────────── */}
        <section id="stats" style={{ background: "#0f172a" }}>
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
            <div
              className="grid grid-cols-2 gap-px md:grid-cols-4"
              style={{ background: "rgba(255,255,255,0.06)", borderRadius: 24, overflow: "hidden" }}
            >
              {STATS.map(({ value, label, Icon }, i) => (
                <Reveal key={label} delay={i * 70}>
                  <div
                    className="flex flex-col items-center gap-2 p-8 text-center md:p-12"
                    style={{ background: "#0f172a" }}
                  >
                    <Icon className="h-5 w-5 mb-1" style={{ color: "#ea6c00" }} />
                    <p
                      className="font-black tracking-tight text-white"
                      style={{ fontSize: "clamp(34px, 5vw, 54px)" }}
                    >
                      {value}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Testimonials ────────────────────────────────────────── */}
        <section className="py-24 md:py-32" id="testimonials" style={{ background: "#f8fafc" }}>
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500">
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
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p
                          className="text-sm font-bold"
                          style={{ color: t.accent ? "white" : "#111827" }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: t.accent ? "rgba(255,255,255,0.6)" : "#6b7280" }}
                        >
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
                color: "rgba(255,255,255,0.02)",
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
                Join 40,000+ shareholders and dozens of Nigeria&apos;s leading institutions on the platform built for the future of corporate events.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white transition-all hover:scale-105"
                  style={{ background: "#ea6c00", boxShadow: "0 12px 40px rgba(234,108,0,0.4)" }}
                >
                  Create free account <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
                >
                  Sign in
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── Footer ──────────────────────────────────────────────── */}
        <footer id="footer" className="border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xs">
                <img src="/attend-logo.png" alt="Attend" style={{ height: 24, width: "auto" }} />
                <p className="mt-3 text-xs leading-relaxed text-gray-400">
                  Enterprise events infrastructure for Nigeria&apos;s capital markets — AGMs, launches, hackathons, and more.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-600"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-900">Platform</p>
                  <ul className="space-y-2">
                    {["AGM Portal", "Product Launches", "Innovation Hub", "QR Check-in"].map((l) => (
                      <li key={l}>
                        <a href="#features" className="text-gray-400 transition-colors hover:text-gray-700">{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-900">Company</p>
                  <ul className="space-y-2">
                    {["About", "Careers", "Press", "Contact"].map((l) => (
                      <li key={l}>
                        <a href="#" className="text-gray-400 transition-colors hover:text-gray-700">{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-900">Legal</p>
                  <ul className="space-y-2">
                    {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((l) => (
                      <li key={l}>
                        <a href="#" className="text-gray-400 transition-colors hover:text-gray-700">{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-gray-100 pt-8 md:flex-row">
              <p className="text-xs text-gray-400">© 2026 Meristem Attend. All rights reserved.</p>
              <p className="text-xs text-gray-400">
                Built by <span className="font-semibold text-gray-600">Meristem Securities Ltd</span>
              </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
