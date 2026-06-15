"use client";
import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import {
  ArrowLeft, CalendarDays, Clock, MapPin, Users, Bookmark, Share2,
  QrCode, CheckCircle2, Check, Monitor, Wifi, Vote, FileText,
  BookOpen, ShieldAlert, ChevronRight, Radio, UserCheck,
} from "lucide-react";
import { MOCK_EVENTS } from "@/lib/mock-data";
import { ModuleBadge } from "@/components/attend/ModuleBadge";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn, formatDate, initialsFor } from "@/lib/utils";
import { useUserStore } from "@/lib/user-store";

const SAVED_KEY = "attend_saved_events";
function getSaved(): string[] {
  try { return JSON.parse(localStorage.getItem(SAVED_KEY) ?? "[]"); } catch { return []; }
}

const FORMAT_LABEL: Record<string, string> = {
  virtual: "Virtual Event", hybrid: "Hybrid Event", "in-person": "In-Person Event",
};
const FORMAT_ICON: Record<string, typeof Monitor> = {
  virtual: Monitor, hybrid: Wifi, "in-person": MapPin,
};

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { kycStatus } = useUserStore();
  const event = MOCK_EVENTS.find((e) => e.id === id);
  const [rsvp, setRsvp] = useState(event?.rsvpStatus === "confirmed");
  const [rsvpLoading, setRsvpLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => { setSaved(getSaved().includes(id)); }, [id]);
  if (!event) return notFound();

  const FormatIcon = FORMAT_ICON[event.format] ?? MapPin;
  const fill = event.capacity ? Math.round((event.rsvpCount / event.capacity) * 100) : null;

  function toggleSave() {
    const list = getSaved();
    const next = saved ? list.filter((x) => x !== id) : [...list, id];
    localStorage.setItem(SAVED_KEY, JSON.stringify(next));
    setSaved(!saved);
  }

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: event!.title, url }).catch(() => {});
    } else {
      await navigator.clipboard.writeText(url);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  }

  async function handleRSVP() {
    setRsvpLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setRsvp(true);
    setRsvpLoading(false);
  }

  async function handleCancelRSVP() {
    if (!confirm("Cancel your RSVP for this event?")) return;
    setRsvpLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setRsvp(false);
    setRsvpLoading(false);
  }

  const isWaitlisted = event.rsvpStatus === "waitlisted" && !rsvp;

  return (
    <div className="pb-28 space-y-6">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      {/* Hero header */}
      <header
        className="relative overflow-hidden rounded-3xl p-6 text-white md:p-8"
        style={{ background: event.thumbnailColor }}
      >
        <div className="absolute -right-10 -bottom-12 select-none text-[180px] font-black leading-none text-white/10">
          {initialsFor(event.organiser)}
        </div>
        <div className="relative space-y-4">
          <div className="flex items-center gap-2">
            <ModuleBadge module={event.module} solid />
            {event.status === "live" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600/85 px-3 py-1 text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                LIVE
              </span>
            )}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/80">{event.organiser}</p>
            <h1 className="text-2xl font-bold leading-tight md:text-3xl">{event.title}</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip icon={CalendarDays}>{formatDate(event.date)}</Chip>
            <Chip icon={Clock}>{event.startTime} – {event.endTime}</Chip>
            <Chip icon={Users}>{event.rsvpCount.toLocaleString()} attending</Chip>
            {event.venue && <Chip icon={MapPin}>{event.venue}</Chip>}
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {rsvp ? (
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/20 px-4 py-2.5 text-sm font-semibold backdrop-blur">
                <CheckCircle2 className="h-4 w-4" /> You&apos;re confirmed
              </span>
            ) : null}
            <Link href="/events/qr-checkin">
              <button className="inline-flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/20">
                <QrCode className="h-4 w-4" /> QR check-in
              </button>
            </Link>
            <button
              onClick={toggleSave}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
              title={saved ? "Remove from saved" : "Save event"}
            >
              <Bookmark className={cn("h-4 w-4", saved && "fill-white")} />
            </button>
            <button
              onClick={handleShare}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors"
              title={shared ? "Link copied!" : "Share event"}
            >
              {shared ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Description */}
      <section className="space-y-3">
        <p className="text-sm leading-relaxed text-foreground/80">{event.description}</p>
        <div className="flex flex-wrap gap-2">
          {event.tags.map((t) => <Badge key={t} variant="muted">{t}</Badge>)}
        </div>
      </section>

      {/* Details card */}
      <section className="rounded-2xl bg-muted/50 border border-border p-4 space-y-4">
        <DetailRow icon={<CalendarDays className="h-4 w-4" style={{ color: event.thumbnailColor }} />}>
          <p className="text-sm font-semibold">{formatDate(event.date)}</p>
          <p className="text-xs text-muted-foreground">{event.startTime} – {event.endTime}</p>
        </DetailRow>
        <hr className="border-border" />
        <DetailRow icon={<FormatIcon className="h-4 w-4" style={{ color: event.thumbnailColor }} />}>
          <p className="text-sm font-semibold">{FORMAT_LABEL[event.format]}</p>
          {event.venue && <p className="text-xs text-muted-foreground">{event.venue}</p>}
        </DetailRow>
        {event.capacity && (
          <>
            <hr className="border-border" />
            <DetailRow icon={<Users className="h-4 w-4" style={{ color: event.thumbnailColor }} />}>
              <p className="text-sm font-semibold">{event.rsvpCount.toLocaleString()} registered</p>
              <p className="text-xs text-muted-foreground">of {event.capacity.toLocaleString()} capacity</p>
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${fill}%`, backgroundColor: event.thumbnailColor }} />
              </div>
            </DetailRow>
          </>
        )}
      </section>

      {/* AGM module section */}
      {event.module === "AGM" && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">AGM Actions</h2>
          {kycStatus !== "full" ? (
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3.5">
              <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-amber-800">Identity verification required to access AGM actions</p>
              </div>
              <Link href="/kyc" className="text-xs font-semibold text-amber-600 hover:underline shrink-0">
                Verify
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {event.format !== "virtual" && (
                <Link href={`/agm/proxy?eventId=${event.id}`}>
                  <ActionRow icon={<FileText className="h-5 w-5" style={{ color: event.thumbnailColor }} />} label="Appoint a Proxy" />
                </Link>
              )}
              <Link href="/agm/pre-vote">
                <ActionRow icon={<Vote className="h-5 w-5" style={{ color: event.thumbnailColor }} />} label="Pre-AGM Voting" />
              </Link>
            </div>
          )}
        </section>
      )}

      {/* Hackathon module section */}
      {event.module === "HACKATHON" && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Challenge Actions</h2>
          <div className="space-y-2">
            <Link href={`/hackathon/${event.challengeId ?? "chl_001"}`}>
              <ActionRow
                icon={<BookOpen className="h-5 w-5 text-purple-600" />}
                label="View Challenge Brief"
                bg="bg-purple-50"
                labelColor="text-purple-800"
              />
            </Link>
            <Link href="/hackathon/my-applications">
              <ActionRow icon={<Users className="h-5 w-5" style={{ color: event.thumbnailColor }} />} label="My Application" />
            </Link>
          </div>
        </section>
      )}

      {/* Launch module section */}
      {event.module === "LAUNCH" && (
        <section className="space-y-3">
          {event.status === "upcoming" && (
            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-orange-700 mb-1">Launching soon</p>
              <p className="text-2xl font-bold text-orange-900 mb-0.5">
                {(() => {
                  const d = Math.ceil((new Date(event.date).getTime() - Date.now()) / 86400000);
                  return d > 0 ? `${d} day${d !== 1 ? "s" : ""} to go` : "Launching today!";
                })()}
              </p>
              <p className="text-sm text-orange-700">
                {new Date(event.date).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })} at {event.startTime}
              </p>
            </div>
          )}
          <h2 className="text-sm font-semibold text-foreground">Audience Access</h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Press / Media", color: "text-purple-700", bg: "bg-purple-50" },
              { label: "VIP Guests", color: "text-amber-700", bg: "bg-amber-50" },
              { label: "Public", color: "text-gray-700", bg: "bg-gray-100" },
            ].map(({ label, color, bg }) => (
              <div key={label} className={cn("rounded-xl py-3 px-2 flex items-center justify-center text-center", bg)}>
                <span className={cn("text-xs font-semibold", color)}>{label}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm font-semibold text-orange-900 mb-1">Press Kit</p>
            <p className="text-sm text-orange-700 leading-relaxed">
              {event.pressKitReleased
                ? "Press kit and product assets are now available for download."
                : "Press kit and product assets are released the moment the launch goes live."}
            </p>
          </div>
        </section>
      )}

      {/* Speakers */}
      {event.speakers.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {event.module === "AGM" ? "Key Participants" : "Speakers"}
          </h2>
          <div className="space-y-2">
            {event.speakers.map((spk) => (
              <div key={spk.id} className="flex items-center gap-3 rounded-2xl border border-border bg-muted/30 px-4 py-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: event.thumbnailColor }}
                >
                  {spk.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{spk.name}</p>
                  <p className="text-xs text-muted-foreground">{spk.title} · {spk.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Agenda */}
      {event.agenda.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {event.module === "AGM" ? "Resolutions & Agenda" : "Agenda"}
          </h2>
          <div className="relative space-y-0">
            {event.agenda.map((item, idx) => (
              <div key={item.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "h-2.5 w-2.5 rounded-full shrink-0 mt-3",
                      item.isCurrent ? "ring-2 ring-offset-2" : ""
                    )}
                    style={{ backgroundColor: item.isCurrent ? event.thumbnailColor : "#d1d5db" }}
                  />
                  {idx < event.agenda.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-1 mb-0" />
                  )}
                </div>
                <div className="pb-4">
                  <p className={cn("text-sm", item.isCurrent ? "font-semibold" : "text-foreground/80")}
                     style={item.isCurrent ? { color: event.thumbnailColor } : {}}>
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.startTime} · {item.duration} min</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur px-4 py-3 md:left-64">
        {event.status === "live" ? (
          <Button
            className="w-full gap-2"
            onClick={() => router.push(`/agm/live`)}
            style={{ backgroundColor: event.thumbnailColor }}
          >
            <Radio className="h-4 w-4" /> Join Live Session →
          </Button>
        ) : isWaitlisted ? (
          <Button className="w-full" variant="outline" disabled>On waitlist</Button>
        ) : rsvp ? (
          <div className="flex gap-3">
            <Button
              className="flex-1"
              variant="outline"
              onClick={handleCancelRSVP}
              disabled={rsvpLoading}
            >
              {rsvpLoading ? "Cancelling…" : "Cancel RSVP"}
            </Button>
            {event.module === "AGM" && (
              <Link href="/agm/pre-vote" className="flex-1">
                <Button className="w-full" style={{ backgroundColor: event.thumbnailColor }}>Pre-Vote</Button>
              </Link>
            )}
            {event.module === "HACKATHON" && (
              <Link href={`/hackathon/apply?challengeId=${event.challengeId ?? "chl_001"}`} className="flex-1">
                <Button className="w-full" style={{ backgroundColor: event.thumbnailColor }}>Apply Now</Button>
              </Link>
            )}
            {event.module === "GENERAL" && event.status === "ended" && (
              <Link href={`/events/certificate?eventId=${event.id}`} className="flex-1">
                <Button className="w-full" variant="outline">View Certificate</Button>
              </Link>
            )}
          </div>
        ) : (
          <Button
            className="w-full"
            onClick={handleRSVP}
            disabled={rsvpLoading}
            style={{ backgroundColor: event.thumbnailColor }}
          >
            {rsvpLoading ? "Confirming…" : "Confirm Attendance (RSVP)"}
          </Button>
        )}
      </div>
    </div>
  );
}

function Chip({ icon: Icon, children }: { icon: typeof CalendarDays; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium backdrop-blur">
      <Icon className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function DetailRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-background border border-border">
        {icon}
      </div>
      <div className="flex-1 pt-0.5">{children}</div>
    </div>
  );
}

function ActionRow({
  icon, label, bg = "bg-muted/50", labelColor = "text-foreground",
}: {
  icon: React.ReactNode; label: string; bg?: string; labelColor?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between rounded-2xl border border-border px-4 py-3.5 hover:bg-muted/70 transition-colors cursor-pointer", bg)}>
      <div className="flex items-center gap-3">
        {icon}
        <span className={cn("text-sm font-medium", labelColor)}>{label}</span>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}
