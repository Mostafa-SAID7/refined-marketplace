import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "300%", label: "Throughput Boost" },
  { value: "1,000+", label: "IoT Endpoints" },
  { value: ".NET 8", label: "Clean Microservices" },
];

const principles = [
  {
    title: "Clean Architecture & DDD",
    body: "Architecting .NET 8 Microservices using Clean Architecture and Domain-Driven Design (DDD) boundaries so platforms scale multi-tenancy seamlessly.",
  },
  {
    title: "Real-Time Telemetry & SignalR",
    body: "High-throughput SignalR and gRPC backend integration layers managing real-time data streams and over 1,000 IoT endpoints.",
  },
  {
    title: "Measured Database Tuning",
    body: "300% system performance optimization through SQL Server query tuning, indexing, and Redis distributed caching.",
  },
  {
    title: "Full Stack Ownership",
    body: "End-to-end execution from database schemas and REST APIs down to Next.js, React, and Angular responsive frontends.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mostafa Samir | Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Senior Full Stack Engineer with 4+ years of experience specializing in high-performance .NET 8 Microservices & Next.js marketplaces.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen select-none pt-24 pb-12 overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
        {/* Header Banner */}
        <section className="py-12 text-center">
          <span className="rounded-full bg-foreground/10 px-4 py-1.5 font-sans text-xs font-black tracking-[0.25em] text-primary uppercase border border-border inline-block mb-4">
            SENIOR FULL STACK ENGINEER
          </span>
          <h1 className="font-['Oswald',sans-serif] text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight uppercase leading-tight mb-4">
            About Mostafa Samir
          </h1>
          <p className="font-sans text-sm sm:text-base text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Senior Full Stack Engineer specializing in building scalable multi-tenant platforms, .NET 8 Microservices, and high-performance modern web apps.
          </p>
        </section>

        {/* Stats Grid */}
        <section className="py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[2rem] bg-card p-6 text-center border border-border shadow-lg"
              >
                <div className="font-['Oswald',sans-serif] text-3xl sm:text-4xl font-bold text-card-foreground">
                  {s.value}
                </div>
                <div className="font-sans text-[11px] font-black tracking-wider text-card-foreground/80 uppercase mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-12">
          <h2 className="font-['Oswald',sans-serif] text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center uppercase tracking-tight">
            Engineering Approach
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-[2.5rem] bg-card p-8 border border-border shadow-[var(--shadow-glow)]"
              >
                <h3 className="font-['Oswald',sans-serif] text-2xl font-bold text-card-foreground flex items-center gap-3 mb-3">
                  <CheckCircle2 className="size-5 text-primary" />
                  {p.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-card-foreground/85 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 font-sans text-xs font-black tracking-widest text-card-foreground uppercase shadow-md border border-border hover:scale-105 transition-transform"
            >
              Skills & Tooling
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-xs font-black tracking-widest text-primary-foreground uppercase shadow-md hover:scale-105 transition-transform"
            >
              Get in Touch
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
