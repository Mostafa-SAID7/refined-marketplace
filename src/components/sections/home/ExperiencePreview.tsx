import { useState } from "react";
import { MapPin, MessageSquare, ChevronRight, ArrowRight } from "lucide-react";

const eventsData = [
  {
    year: "2024",
    iconText: "⚡",
    name: "WE3DS Company",
    location: "Tanta, EG",
    topic: "Senior Full Stack Developer",
  },
  {
    year: "2023",
    iconText: "AR",
    name: "Freelance Marketplace",
    location: "Cairo, EG",
    topic: "Full Stack Developer",
  },
  {
    year: "2024",
    iconText: "●",
    name: "Multi-Tenant Platform",
    location: "Enterprise, EG",
    topic: "300% Speed Optimization",
    featured: true,
  },
  {
    year: "2021",
    iconText: "❖",
    name: "Computer Science B.Sc.",
    location: "HTI University, EG",
    topic: "Degree Credential",
  },
];

export function ExperiencePreview() {
  const [activeTab, setActiveTab] = useState("TALKS");

  return (
    <section id="events" className="w-full bg-background py-20 px-4 sm:px-8 md:px-12 text-foreground select-none">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="font-['Oswald',sans-serif] text-4xl sm:text-5xl md:text-6xl font-bold text-center text-foreground mb-8 tracking-tight">
          Conferences & Events
        </h2>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {["INTERVIEWS", "TALKS", "EXHIBITION"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2.5 font-sans text-xs font-black tracking-[0.2em] uppercase transition-all ${
                activeTab === tab
                  ? "bg-foreground text-background shadow-md scale-105"
                  : "bg-foreground/10 text-foreground border border-border hover:bg-foreground/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Event Rows */}
        <div className="flex flex-col gap-4">
          {eventsData.map(({ year, iconText, name, location, topic, featured }) => (
            <div
              key={name}
              className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-[2rem] transition-all duration-300 ${
                featured
                  ? "bg-foreground text-background shadow-[var(--shadow-glow)] scale-[1.02]"
                  : "bg-card text-card-foreground border border-border shadow-md hover:bg-card/90"
              }`}
            >
              <div className="flex items-center gap-6 sm:gap-8 w-full sm:w-auto">
                <span className="font-['Oswald',sans-serif] text-sm font-bold opacity-80 min-w-10">
                  {year}
                </span>

                <div
                  className={`grid size-10 place-items-center rounded-full font-black text-sm ${
                    featured ? "bg-primary text-primary-foreground" : "bg-foreground/15 text-primary"
                  }`}
                >
                  {iconText}
                </div>

                <h3
                  className={`font-['Oswald',sans-serif] text-xl sm:text-2xl font-bold tracking-tight ${
                    featured ? "text-background" : "text-card-foreground"
                  }`}
                >
                  {name}
                </h3>
              </div>

              <div className="flex items-center gap-6 sm:gap-8 w-full sm:w-auto justify-between sm:justify-end">
                <div className="flex items-center gap-1.5 text-xs font-bold opacity-90">
                  <MapPin className="size-3.5 text-primary" />
                  <span>{location}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold opacity-90">
                  <MessageSquare className="size-3.5 text-primary" />
                  <span>{topic}</span>
                </div>

                {featured ? (
                  <button className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm hover:scale-105 transition-transform">
                    <ArrowRight className="size-4 stroke-[3]" />
                  </button>
                ) : (
                  <ChevronRight className="size-5 opacity-60" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
