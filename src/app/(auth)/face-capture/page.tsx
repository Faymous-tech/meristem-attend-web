"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ScanFace, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

type Stage = "idle" | "scanning" | "captured";

export default function FaceCapturePage() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("idle");
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (stage === "scanning") {
      setProgress(0);
      intervalRef.current = setInterval(() => {
        setProgress((p) => Math.min(p + 2, 95));
      }, 50);
      timerRef.current = setTimeout(() => {
        clearInterval(intervalRef.current!);
        setProgress(100);
        setTimeout(() => setStage("captured"), 200);
      }, 2500);
    }
    return () => {
      clearInterval(intervalRef.current!);
      clearTimeout(timerRef.current!);
    };
  }, [stage]);

  const handleRetake = () => {
    setStage("idle");
    setProgress(0);
  };

  const handleContinue = () => {
    router.push("/onboarding");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-start md:hidden mb-2">
        <img src="/attend-logo.png" alt="Attend" style={{ height: 31 }} />
      </div>

      <div className="text-center">
        <div
          className={cn(
            "mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors",
            stage === "captured" ? "bg-emerald-100" : "bg-primary/10",
          )}
        >
          {stage === "captured" ? (
            <CheckCircle2 className="h-7 w-7 text-emerald-600" />
          ) : (
            <ScanFace className="h-7 w-7 text-primary" />
          )}
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          {stage === "captured" ? "Face verified!" : "Face registration"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {stage === "idle" && "We'll take a quick snapshot to register your face for secure event check-in."}
          {stage === "scanning" && "Hold still — scanning your face…"}
          {stage === "captured" && "Your face has been registered. You're all set to check in to events."}
        </p>
      </div>

      {/* Camera frame mockup */}
      <div className="relative mx-auto" style={{ width: 240, height: 300 }}>
        {/* Outer frame */}
        <div
          className={cn(
            "relative w-full h-full rounded-[60px] border-2 overflow-hidden flex items-center justify-center transition-colors",
            stage === "captured"
              ? "border-emerald-500 bg-emerald-50"
              : stage === "scanning"
              ? "border-primary bg-primary/5"
              : "border-border bg-muted/20",
          )}
        >
          {/* Scan line animation */}
          {stage === "scanning" && (
            <div
              className="absolute left-0 right-0 h-0.5 bg-primary/60 transition-all duration-75"
              style={{ top: `${progress}%` }}
            />
          )}

          {/* Face icon or check */}
          {stage === "captured" ? (
            <CheckCircle2 className="h-20 w-20 text-emerald-500" />
          ) : (
            <ScanFace
              className={cn(
                "h-24 w-24 transition-colors",
                stage === "scanning" ? "text-primary" : "text-muted-foreground/30",
              )}
            />
          )}
        </div>

        {/* Corner markers */}
        {(["tl", "tr", "bl", "br"] as const).map((pos) => (
          <div
            key={pos}
            className={cn(
              "absolute w-5 h-5 transition-colors",
              stage === "captured"
                ? "border-emerald-500"
                : stage === "scanning"
                ? "border-primary"
                : "border-foreground/30",
              pos === "tl" && "top-2 left-2 border-t-2 border-l-2 rounded-tl",
              pos === "tr" && "top-2 right-2 border-t-2 border-r-2 rounded-tr",
              pos === "bl" && "bottom-2 left-2 border-b-2 border-l-2 rounded-bl",
              pos === "br" && "bottom-2 right-2 border-b-2 border-r-2 rounded-br",
            )}
          />
        ))}
      </div>

      {/* Progress bar */}
      {stage === "scanning" && (
        <div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1.5 text-center text-xs text-muted-foreground">
            Analyzing biometrics…
          </p>
        </div>
      )}

      {/* Actions */}
      {stage === "idle" && (
        <div className="space-y-3">
          <Button
            fullWidth
            size="lg"
            onClick={() => setStage("scanning")}
          >
            <ScanFace className="h-4.5 w-4.5" /> Start face scan
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            No images are stored. This check runs on-device for your privacy.
          </p>
        </div>
      )}

      {stage === "scanning" && (
        <Button fullWidth size="lg" disabled loading>
          Scanning…
        </Button>
      )}

      {stage === "captured" && (
        <div className="flex gap-3">
          <Button variant="outline" fullWidth onClick={handleRetake}>
            <RefreshCw className="h-4 w-4" /> Retake
          </Button>
          <Button fullWidth onClick={handleContinue}>
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      <p className="text-center text-sm text-muted-foreground">
        <Link href="/onboarding" className="hover:underline">Skip for now</Link>
      </p>
    </div>
  );
}
