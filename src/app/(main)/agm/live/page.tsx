"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Users,
  MessageSquare,
  Vote,
  Send,
  Check,
  X,
  Minus,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react";
import { MOCK_EVENTS, MOCK_RESOLUTIONS } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Tab = "qa" | "ballot";

const COUNTDOWN_DURATION = 45;
const openRes = MOCK_RESOLUTIONS.find((r) => r.votingOpen);

const MOCK_QA_QUESTIONS = [
  { id: "q1", who: "Adaeze N.", time: "10:12 AM", text: "Will the final dividend be paid in cash or scrip, and what is the expected payment timeline?", answered: true },
  { id: "q2", who: "Femi A.", time: "10:18 AM", text: "What is management's outlook on FX volatility for H2 2026, and how is the bank hedging its dollar-denominated liabilities?", answered: false },
  { id: "q3", who: "Chidi O.", time: "10:25 AM", text: "Can the board comment on the revenue contribution of the digital banking subsidiary to the group?", answered: false },
];

export default function LivePage() {
  const event = MOCK_EVENTS.find((e) => e.id === "evt_001")!;
  const [tab, setTab] = useState<Tab>("qa");
  const [vote, setVote] = useState<"for" | "against" | "abstain" | null>(
    openRes?.preVote ?? null,
  );
  const [q, setQ] = useState("");
  const [qSent, setQSent] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [videoHidden, setVideoHidden] = useState(false);
  const countdownEndsAt = useRef<number>(Date.now() + COUNTDOWN_DURATION * 1000);
  const [countdown, setCountdown] = useState(COUNTDOWN_DURATION);
  const [countdownExpired, setCountdownExpired] = useState(false);

  useEffect(() => {
    if (!openRes?.votingOpen) return;
    const t = setInterval(() => {
      const remaining = Math.max(0, Math.round((countdownEndsAt.current - Date.now()) / 1000));
      setCountdown(remaining);
      if (remaining <= 0) { clearInterval(t); setCountdownExpired(true); }
    }, 1000);
    return () => clearInterval(t);
  }, []);

  function sendQuestion(e: React.FormEvent) {
    e.preventDefault();
    if (!q.trim()) return;
    setUserQuestion(q.trim());
    setQSent(true);
    setQ("");
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <Link href="/agm" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Leave meeting
        </Link>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            Live
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            {event.rsvpCount.toLocaleString()} watching
          </span>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {event.organiser}
        </p>
        <h1 className="text-xl font-bold text-foreground md:text-2xl">{event.title}</h1>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {/* Stream */}
        <div className="lg:col-span-3">
          {videoHidden ? (
            <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  <span className="h-1 w-1 rounded-full bg-white" /> Live
                </span>
                <p className="text-sm font-semibold text-white line-clamp-1">{event.title}</p>
              </div>
              <button
                onClick={() => setVideoHidden(false)}
                className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20"
              >
                <ChevronDown className="h-3.5 w-3.5" /> Expand
              </button>
            </div>
          ) : (
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                  <Play className="h-9 w-9 fill-white text-white" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                  Live Stream
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Now showing: Resolution 3 — Re-election of Directors
                </p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
                <span>00:42:18 elapsed</span>
                <span>HD · 1080p</span>
              </div>
              <button
                onClick={() => setVideoHidden(true)}
                className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-black/40 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-black/60"
              >
                <ChevronUp className="h-3.5 w-3.5" /> Minimise
              </button>
            </div>
          )}

          {/* Countdown strip */}
          {openRes?.votingOpen && (
            <div
              className={cn(
                "mt-2 flex items-center gap-2 rounded-xl px-4 py-2.5 transition-colors",
                countdownExpired
                  ? "bg-slate-500"
                  : countdown <= 10
                  ? "bg-red-600"
                  : "bg-amber-500",
              )}
            >
              <Vote className="h-4 w-4 shrink-0 text-white" />
              <p className="text-sm font-semibold text-white">
                {countdownExpired
                  ? `Voting closed — Resolution ${openRes.number}`
                  : `Voting open · Resolution ${openRes.number} · ${countdown}s remaining`}
              </p>
            </div>
          )}

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-border bg-white p-3 text-center">
              <p className="text-xs text-muted-foreground">Quorum</p>
              <p className="text-base font-semibold text-foreground">68.4%</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-3 text-center">
              <p className="text-xs text-muted-foreground">Resolution</p>
              <p className="text-base font-semibold text-foreground">3 of 4</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-3 text-center">
              <p className="text-xs text-muted-foreground">Time left</p>
              <p className="text-base font-semibold text-foreground">12 min</p>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="flex border-b border-border">
              {[
                { id: "qa" as Tab, label: "Q&A", icon: MessageSquare },
                { id: "ballot" as Tab, label: "Ballot", icon: Vote },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-1.5 py-3 text-xs font-semibold",
                    tab === id ? "border-b-2 border-primary text-primary" : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" /> {label}
                </button>
              ))}
            </div>

            <div className="max-h-[420px] overflow-y-auto p-4">
              {tab === "qa" && (
                <div className="flex flex-col gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Submitted Questions
                  </p>
                  <ul className="space-y-2">
                    {MOCK_QA_QUESTIONS.map((item) => (
                      <li key={item.id} className="rounded-xl border border-border bg-white p-3">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <p className="text-xs font-semibold text-foreground">{item.who}</p>
                          <div className="flex items-center gap-2">
                            {item.answered && (
                              <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                                <CheckCircle className="h-3 w-3" /> Addressed
                              </span>
                            )}
                            <p className="text-[11px] text-muted-foreground">{item.time}</p>
                          </div>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
                      </li>
                    ))}
                    {qSent && (
                      <li className="rounded-xl border border-primary/20 bg-primary/5 p-3">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <p className="text-xs font-semibold text-primary">You</p>
                          <p className="text-[11px] text-muted-foreground">Just now · Pending review</p>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">{userQuestion}</p>
                      </li>
                    )}
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    Questions are reviewed by the moderator before being shown to the Chair.
                  </p>
                  {!qSent && (
                    <form onSubmit={sendQuestion} className="flex gap-2">
                      <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Submit a question to the Chair..."
                        className="h-10 flex-1 rounded-xl border border-input bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                      <Button type="submit" size="sm" className="bg-slate-900 hover:bg-slate-800">
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </div>
              )}

              {tab === "ballot" && openRes && (
                <div className="space-y-4">
                  {openRes.preVote && (
                    <div
                      className={cn(
                        "rounded-xl border px-4 py-3",
                        openRes.preVote === "for"
                          ? "border-emerald-200 bg-emerald-50"
                          : openRes.preVote === "against"
                          ? "border-red-200 bg-red-50"
                          : "border-amber-200 bg-amber-50",
                      )}
                    >
                      <p
                        className={cn(
                          "text-sm font-semibold capitalize",
                          openRes.preVote === "for"
                            ? "text-emerald-700"
                            : openRes.preVote === "against"
                            ? "text-red-700"
                            : "text-amber-700",
                        )}
                      >
                        You previously voted: {openRes.preVote}
                      </p>
                      {!countdownExpired && (
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          You can change your vote before the countdown ends
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                      Resolution {openRes.number}
                    </p>
                    <h3 className="mt-0.5 text-base font-semibold text-foreground">
                      {openRes.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {openRes.description}
                    </p>
                  </div>

                  {countdownExpired ? (
                    <div className="rounded-xl bg-muted py-6 text-center">
                      <p className="text-sm font-semibold text-muted-foreground">
                        Voting has closed for this resolution.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-3 gap-2">
                        {(["for", "against", "abstain"] as const).map((opt) => {
                          const selected = vote === opt;
                          const Icon = opt === "for" ? Check : opt === "against" ? X : Minus;
                          const tone =
                            opt === "for"
                              ? "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                              : opt === "against"
                              ? "border-red-200 text-red-700 hover:bg-red-50"
                              : "border-border text-muted-foreground hover:bg-muted";
                          const selectedTone =
                            opt === "for"
                              ? "bg-emerald-600 text-white border-emerald-600"
                              : opt === "against"
                              ? "bg-red-600 text-white border-red-600"
                              : "bg-slate-700 text-white border-slate-700";
                          return (
                            <button
                              key={opt}
                              onClick={() => setVote(opt)}
                              className={cn(
                                "flex flex-col items-center gap-1 rounded-xl border px-2 py-3 text-xs font-semibold capitalize transition-colors",
                                selected ? selectedTone : tone,
                              )}
                            >
                              <Icon className="h-4 w-4" /> {opt}
                            </button>
                          );
                        })}
                      </div>
                      <Button fullWidth disabled={!vote}>
                        {vote ? `Cast vote: ${vote}` : "Choose an option"}
                      </Button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
