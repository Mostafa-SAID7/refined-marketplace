import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExperiencePreview } from "@/components/sections/home/ExperiencePreview";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mostafa Samir | Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Professional software engineering experience of Mostafa Samir — .NET 8 Microservices, SignalR IoT telemetry, and multi-tenant marketplace architectures.",
      },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="min-h-screen select-none pt-24 pb-12 overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
        <section className="py-12 text-center">
          <span className="rounded-full bg-foreground/10 px-4 py-1.5 font-sans text-xs font-black tracking-[0.25em] text-primary uppercase border border-border inline-block mb-4">
            CAREER & MILESTONES
          </span>
          <h1 className="font-['Oswald',sans-serif] text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight uppercase leading-tight mb-4">
            Professional Experience
          </h1>
          <p className="font-sans text-sm sm:text-base text-foreground/90 max-w-xl mx-auto leading-relaxed">
            Roles, responsibilities, and measurable engineering outcomes across enterprise marketplace systems.
          </p>
        </section>

        <ExperiencePreview />
      </main>
      <Footer />
    </div>
  );
}
