import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const PLATFORM_LINKS = [
  { label: "Features", href: "/landing/features" },
  { label: "How it works", href: "/landing/how-it-works" },
  { label: "Pricing", href: "/landing/pricing" },
];

const COMPANY_LINKS = ["About", "Careers", "Press", "Contact"];
const LEGAL_LINKS = ["Privacy Policy", "Terms of Use", "Cookie Policy"];

export function LandingFooter() {
  return (
    <footer style={{ background: "#000000" }}>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <img
              src="/attend-logo.png"
              alt="Attend"
              style={{
                height: 24,
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Enterprise events infrastructure for Nigeria&apos;s capital markets — built for the institutions that move markets.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)" }}
                  aria-label="Social link"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">Platform</p>
              <ul className="space-y-2.5">
                {PLATFORM_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">Company</p>
              <ul className="space-y-2.5">
                {COMPANY_LINKS.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">Legal</p>
              <ul className="space-y-2.5">
                {LEGAL_LINKS.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-center justify-between gap-2 border-t pt-8 md:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2026 Meristem Attend. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Built by{" "}
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Meristem Securities Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
