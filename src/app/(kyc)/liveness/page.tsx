"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ScanFace, CheckCircle2 } from "lucide-react";

type Stage = "idle" | "scanning" | "verified";

export default function LivenessPage() {
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
        setTimeout(() => setStage("verified"), 200);
      }, 2500);
    }
    return () => {
      clearInterval(intervalRef.current!);
      clearTimeout(timerRef.current!);
    };
  }, [stage]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (stage === "verified") router.push("/success");
        else if (stage === "idle") setStage("scanning");
      }}
      className="space-y-6"
    >
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
            <ScanFace className="h-5 w-5 text-gray-700" />
          )}
        </div>
        <h1 className="text-xl font-bold text-foreground">
          {stage === "verified" ? "Liveness confirmed!" : "Liveness check"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {stage === "idle" && "A quick biometric check to confirm you are the account holder."}
          {stage === "scanning" && "Hold still — analyzing your face…"}
          {stage === "verified" && "Your identity has been confirmed. You are all set."}
        </p>
      </div>

      {/* Camera frame */}
      <div className="relative mx-auto" style={{ width: 220, height: 280 }}>
        <div
          className={cn(
            "relative w-full h-full rounded-[55px] border-2 overflow-hidden flex items-center justify-center transition-colors",
            stage === "verified"
              ? "border-emerald-500 bg-emerald-50"
              : stage === "scanning"
              ? "border-gray-900 bg-gray-50"
              : "border-border bg-muted/20",
          )}
        >
          {stage === "scanning" && (
            <div
              className="absolute left-0 right-0 h-0.5 bg-gray-900/40 transition-all duration-75"
              style={{ top: `${progress}%` }}
            />
          )}
          {stage === "verified" ? (
            <CheckCircle2 className="h-16 w-16 text-emerald-500" />
          ) : (
            <ScanFace
              className={cn(
                "h-20 w-20 transition-colors",
                stage === "scanning" ? "text-gray-800" : "text-muted-foreground/25",
              )}
            />
          )}
        </div>
        {(["tl", "tr", "bl", "br"] as const).map((pos) => (
          <div
            key={pos}
            className={cn(
              "absolute w-5 h-5 transition-colors",
              stage === "verified" ? "border-emerald-500" : "border-foreground/30",
              pos === "tl" && "top-2 left-2 border-t-2 border-l-2 rounded-tl",
              pos === "tr" && "top-2 right-2 border-t-2 border-r-2 rounded-tr",
              pos === "bl" && "bottom-2 left-2 border-b-2 border-l-2 rounded-bl",
              pos === "br" && "bottom-2 right-2 border-b-2 border-r-2 rounded-br",
            )}
          />
        ))}
      </div>

      {stage === "scanning" && (
        <div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gray-900 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1.5 text-center text-xs text-muted-foreground">
            No images are stored
          </p>
        </div>
      )}

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          fullWidth
          onClick={() => router.push("/chn")}
          disabled={stage === "scanning"}
        >
          Back
        </Button>
        <Button
          type="submit"
          fullWidth
          loading={stage === "scanning"}
          disabled={stage === "scanning"}
        >
          {stage === "verified" ? "Complete verification" : "Start check"}
        </Button>
      </div>
    </form>
  );
}
