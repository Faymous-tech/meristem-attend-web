"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Stage = "idle" | "detecting" | "verified";

const OVAL_W = 224;
const OVAL_H = 296;

export default function LivenessPage() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("idle");

  // Scan line (detecting state)
  const scanDirRef = useRef(1);
  const [scanY, setScanY] = useState(0);

  // Pulse ring (detecting state) — driven by React state + CSS transition
  const [pulseExpanded, setPulseExpanded] = useState(false);

  const scanIntervalRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const pulseIntervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const detectTimerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (stage !== "detecting") {
      clearInterval(scanIntervalRef.current!);
      clearInterval(pulseIntervalRef.current!);
      clearTimeout(detectTimerRef.current!);
      setScanY(0);
      scanDirRef.current = 1;
      setPulseExpanded(false);
      return;
    }

    // Scan line bounces top ↔ bottom
    scanIntervalRef.current = setInterval(() => {
      setScanY((y) => {
        const next = y + scanDirRef.current * 1.8;
        if (next >= 100) { scanDirRef.current = -1; return 100; }
        if (next <= 0)   { scanDirRef.current =  1; return 0; }
        return next;
      });
    }, 30);

    // Pulse ring toggles every 900 ms
    pulseIntervalRef.current = setInterval(() => {
      setPulseExpanded((v) => !v);
    }, 900);

    // Simulate face detected after 2.8 s
    detectTimerRef.current = setTimeout(() => {
      clearInterval(scanIntervalRef.current!);
      clearInterval(pulseIntervalRef.current!);
      setStage("verified");
    }, 2800);

    return () => {
      clearInterval(scanIntervalRef.current!);
      clearInterval(pulseIntervalRef.current!);
      clearTimeout(detectTimerRef.current!);
    };
  }, [stage]);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <div
          className={cn(
            "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
            stage === "verified" ? "bg-emerald-100" : "bg-gray-100",
          )}
        >
          {stage === "verified" ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          ) : (
            <svg className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c0-3.31 3.13-6 7-6s7 2.69 7 6" />
              <path d="M3 5.5A9 9 0 0 1 5.5 3M21 5.5A9 9 0 0 0 18.5 3M3 18.5A9 9 0 0 0 5.5 21M21 18.5A9 9 0 0 1 18.5 21" />
            </svg>
          )}
        </div>
        <h1 className="text-xl font-bold text-foreground">
          {stage === "verified" ? "Identity confirmed!" : "Face Verification"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {stage === "idle"      && "A quick biometric check to confirm you are the account holder."}
          {stage === "detecting" && "Hold still — analyzing your face…"}
          {stage === "verified"  && "Your biometric check is complete. You’re all set."}
        </p>
      </div>

      {/* Oval camera frame */}
      <div className="flex flex-col items-center">
        {/* Ring + oval wrapper */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: OVAL_W + 56, height: OVAL_H + 56 }}
        >
          {/* Pulsing ring — visible only while detecting */}
          {stage === "detecting" && (
            <div
              className="absolute rounded-full border-2 border-gray-900 transition-all duration-700"
              style={{
                width:        OVAL_W + 56,
                height:       OVAL_H + 56,
                borderRadius: (OVAL_W + 56) / 2,
                transform:    pulseExpanded ? "scale(1.1)" : "scale(1)",
                opacity:      pulseExpanded ? 0.12 : 0.35,
              }}
            />
          )}

          {/* Oval itself */}
          <div
            className="relative overflow-hidden flex items-center justify-center transition-colors duration-500"
            style={{
              width:           OVAL_W,
              height:          OVAL_H,
              borderRadius:    OVAL_W / 2,
              borderWidth:     2,
              borderStyle:     "solid",
              borderColor:     stage === "verified" ? "#10b981" : stage === "detecting" ? "#111827" : "#d1d5db",
              backgroundColor: stage === "verified" ? "#052e16" : "#1a1f2e",
            }}
          >
            {/* Scanning line */}
            {stage === "detecting" && (
              <div
                className="absolute left-0 right-0 h-px"
                style={{
                  top:        `${scanY}%`,
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
                }}
              />
            )}

            {/* Verified state */}
            {stage === "verified" && (
              <CheckCircle2 className="h-16 w-16 text-emerald-400" />
            )}

            {/* Idle / detecting: face silhouette oval */}
            {stage !== "verified" && (
              <div
                className="rounded-full border border-white/20"
                style={{ width: 86, height: 110 }}
              />
            )}

            {/* Corner scan brackets */}
            {(["tl", "tr", "bl", "br"] as const).map((pos) => (
              <div
                key={pos}
                className={cn(
                  "absolute w-5 h-5 transition-colors duration-500",
                  stage === "verified" ? "border-emerald-400" : "border-white/40",
                  pos === "tl" && "top-3 left-3 border-t-2 border-l-2 rounded-tl",
                  pos === "tr" && "top-3 right-3 border-t-2 border-r-2 rounded-tr",
                  pos === "bl" && "bottom-3 left-3 border-b-2 border-l-2 rounded-bl",
                  pos === "br" && "bottom-3 right-3 border-b-2 border-r-2 rounded-br",
                )}
              />
            ))}
          </div>
        </div>

        {/* Instruction label */}
        <p
          className={cn(
            "mt-3 text-sm font-semibold text-center transition-colors",
            stage === "verified" ? "text-emerald-600" : "text-foreground",
          )}
        >
          {stage === "idle"      && "Position your face within the oval"}
          {stage === "detecting" && "Hold still…"}
          {stage === "verified"  && "Verified ✓"}
        </p>

        {/* Analyzing indicator */}
        {stage === "detecting" && (
          <div className="mt-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-900 animate-pulse" />
            <span className="text-xs text-muted-foreground">Analyzing biometrics…</span>
          </div>
        )}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col gap-3">
        {stage === "idle" && (
          <>
            <Button fullWidth onClick={() => setStage("detecting")}>
              Start Check
            </Button>
            <button
              type="button"
              onClick={() => router.push("/success")}
              className="text-sm text-center text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              Skip — I&apos;ll complete this later
            </button>
          </>
        )}

        {stage === "detecting" && (
          <Button fullWidth disabled loading>
            Verifying…
          </Button>
        )}

        {stage === "verified" && (
          <Button fullWidth onClick={() => router.push("/success")}>
            Continue
          </Button>
        )}
      </div>

      {/* Privacy note */}
      <p className="text-center text-xs text-muted-foreground">
        No images are stored. This check runs entirely on-device.
      </p>
    </div>
  );
}
