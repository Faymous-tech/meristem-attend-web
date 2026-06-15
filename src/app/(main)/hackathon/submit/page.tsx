"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, Github, Globe, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MOCK_CHALLENGE } from "@/lib/mock-data";

const sf = MOCK_CHALLENGE.submissionFields;

export default function SubmitPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    demo: "",
    repo: "",
    description: "",
    pitchVideoUrl: "",
    demoVideoUrl: "",
  });
  const [pitchDeckFile, setPitchDeckFile] = useState<File | null>(null);
  const [demoVideoFile, setDemoVideoFile] = useState<File | null>(null);
  const [additionalDocFile, setAdditionalDocFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/hackathon/certificate"), 1500);
  }

  const valid =
    form.title.trim().length > 0 &&
    (!sf.description || form.description.trim().length > 10);

  const hasLinks = sf.githubUrl || sf.demoUrl;
  const hasPresentation = sf.pitchDeck || sf.pitchVideoUrl;
  const hasDemo = sf.demoVideoUrl;
  const hasAdditional = sf.additionalDocs;

  return (
    <div className="space-y-6">
      <Link
        href="/hackathon"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">
          MeriHack 2026 — Submission
        </p>
        <h1 className="mt-1 text-2xl font-bold text-foreground">Submit your project</h1>
        <p className="text-sm text-muted-foreground">
          Fill in the fields below to submit your team&apos;s entry.
        </p>
      </header>

      <form onSubmit={submit} className="space-y-5 rounded-2xl border border-border bg-white p-6 shadow-sm">

        {/* ── Project Details ── */}
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-2 mb-3">
          Project Details
        </p>

        <Input
          name="title"
          label="Project title"
          placeholder="e.g. MicroVest"
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
        />

        {sf.description && (
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Project description</label>
            <textarea
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              rows={6}
              placeholder="What you built, who it's for, and what makes it stand out."
              className="w-full rounded-xl border border-input bg-white p-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary"
            />
          </div>
        )}

        {/* ── Links ── */}
        {hasLinks && (
          <>
            <hr className="border-border" />
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-2 mb-3">
              Links
            </p>
            <div className={`grid gap-4 ${sf.githubUrl && sf.demoUrl ? "md:grid-cols-2" : ""}`}>
              {sf.demoUrl && (
                <Input
                  name="demo"
                  label="Demo URL"
                  leftIcon={<Globe className="h-4 w-4" />}
                  placeholder="https://demo.example.com"
                  value={form.demo}
                  onChange={(e) => update("demo", e.target.value)}
                />
              )}
              {sf.githubUrl && (
                <Input
                  name="repo"
                  label="Source repository"
                  leftIcon={<Github className="h-4 w-4" />}
                  placeholder="https://github.com/team/project"
                  value={form.repo}
                  onChange={(e) => update("repo", e.target.value)}
                />
              )}
            </div>
          </>
        )}

        {/* ── Presentation ── */}
        {hasPresentation && (
          <>
            <hr className="border-border" />
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-2 mb-3">
              Presentation
            </p>

            {sf.pitchDeck && (
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Pitch deck (PDF)</label>
                <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/30 p-8 text-center transition-colors hover:bg-muted/50">
                  <Upload className="h-6 w-6 text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground">
                    {pitchDeckFile ? pitchDeckFile.name : "Click to upload"}
                  </p>
                  <p className="text-xs text-muted-foreground">PDF · max 25MB · landscape preferred</p>
                  <input
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={(e) => setPitchDeckFile(e.target.files?.[0] ?? null)}
                  />
                </label>
              </div>
            )}

            {sf.pitchVideoUrl && (
              <Input
                name="pitchVideoUrl"
                label="Pitch video URL (optional)"
                leftIcon={<Video className="h-4 w-4" />}
                placeholder="https://youtube.com/watch?v=... or loom.com/..."
                value={form.pitchVideoUrl}
                onChange={(e) => update("pitchVideoUrl", e.target.value)}
              />
            )}
          </>
        )}

        {/* ── Demo ── */}
        {hasDemo && (
          <>
            <hr className="border-border" />
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-2 mb-3">
              Demo
            </p>

            <Input
              name="demoVideoUrl"
              label="Demo video URL (optional)"
              leftIcon={<Video className="h-4 w-4" />}
              placeholder="https://youtube.com/watch?v=... or loom.com/..."
              value={form.demoVideoUrl}
              onChange={(e) => update("demoVideoUrl", e.target.value)}
            />

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px flex-1 bg-border" />
              <span className="font-semibold">OR</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Upload demo video</label>
              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/30 p-8 text-center transition-colors hover:bg-muted/50">
                <Upload className="h-6 w-6 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">
                  {demoVideoFile ? demoVideoFile.name : "Click to upload"}
                </p>
                <p className="text-xs text-muted-foreground">MP4 / MOV · max 500MB</p>
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => setDemoVideoFile(e.target.files?.[0] ?? null)}
                />
              </label>
            </div>
          </>
        )}

        {/* ── Additional Materials ── */}
        {hasAdditional && (
          <>
            <hr className="border-border" />
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-2 mb-3">
              Additional Materials
            </p>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Additional documents (optional)</label>
              <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/30 p-8 text-center transition-colors hover:bg-muted/50">
                <Upload className="h-6 w-6 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">
                  {additionalDocFile ? additionalDocFile.name : "Click to upload"}
                </p>
                <p className="text-xs text-muted-foreground">PDF / DOC / ZIP · max 10MB</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.zip"
                  className="hidden"
                  onChange={(e) => setAdditionalDocFile(e.target.files?.[0] ?? null)}
                />
              </label>
            </div>
          </>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" loading={loading} disabled={!valid}>
            Submit project
          </Button>
        </div>
      </form>
    </div>
  );
}
