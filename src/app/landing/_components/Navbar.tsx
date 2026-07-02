"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/landing";
  const lightBg = !isHome || scrolled;
  const featuresActive = pathname.startsWith("/landing/features");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: lightBg ? "rgba(255,255,255,0.93)" : "transparent",
        backdropFilter: lightBg ? "blur(14px)" : "none",
        borderBottom: lightBg ? "1px solid rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link href="/landing" className="shrink-0">
          <img
            src="/attend-logo.png"
            alt="Attend"
            style={{
              height: 26,
              width: "auto",
              filter: lightBg ? "none" : "brightness(0) invert(1)",
              transition: "filter 0.3s ease",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center md:flex">
          <Link
            href="/landing/features"
            className="text-sm font-medium transition-colors"
            style={{
              color: featuresActive
                ? "#ea6c00"
                : lightBg
                ? "#374151"
                : "rgba(255,255,255,0.82)",
              fontWeight: featuresActive ? 600 : 500,
            }}
          >
            Features
          </Link>
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium transition-colors"
            style={{ color: lightBg ? "#6b7280" : "rgba(255,255,255,0.65)" }}
          >
            Sign in
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "#ea6c00" }}
          >
            Get Started <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl md:hidden"
          style={{ color: lightBg ? "#111827" : "white" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <nav className="space-y-0.5">
            <Link
              href="/landing/features"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors"
              style={{ color: featuresActive ? "#ea6c00" : "#374151" }}
            >
              Features
            </Link>
          </nav>
          <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-center text-sm font-bold text-white"
              style={{ background: "#ea6c00" }}
            >
              Get Started
            </Link>
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-center text-sm font-medium text-gray-500"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
