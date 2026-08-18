import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

const channels = [
  { Icon: Mail, label: "Email", value: "m.ssaid356@gmail.com", href: "mailto:m.ssaid356@gmail.com" },
  { Icon: Phone, label: "WhatsApp / Phone", value: "+20 106 735 8073", href: "https://wa.me/+201067358073" },
  { Icon: MapPin, label: "Location", value: "Tanta / Cairo, Egypt · Remote Worldwide" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mostafa Samir | Senior Full Stack Engineer" },
      {
        name: "description",
        content:
          "Get in touch with Mostafa Samir for marketplace engineering, .NET 8 Microservices, or full-stack web applications.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen select-none pt-24 pb-12 overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-8 md:px-12">
        {/* Banner */}
        <section className="py-12 text-center">
          <span className="rounded-full bg-foreground/10 px-4 py-1.5 font-sans text-xs font-black tracking-[0.25em] text-primary uppercase border border-border inline-block mb-4">
            AVAILABLE FOR NEW PROJECTS
          </span>
          <h1 className="font-['Oswald',sans-serif] text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight uppercase leading-tight mb-4">
            Get In Touch
          </h1>
          <p className="font-sans text-sm sm:text-base text-foreground/90 max-w-xl mx-auto leading-relaxed">
            Share your project requirements, tech stack, or timeline — I respond within 24 hours.
          </p>
        </section>

        {/* Contact Channels Grid */}
        <section className="py-6 mb-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {channels.map(({ Icon, label, value, href }) => (
              <div
                key={label}
                className="rounded-[2.5rem] bg-card p-7 border border-border shadow-lg text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform"
              >
                <div className="grid size-12 place-items-center rounded-full bg-foreground/10 text-card-foreground mb-4 border border-border">
                  <Icon className="size-5 text-primary" />
                </div>
                <span className="font-sans text-[10px] font-black tracking-[0.2em] text-card-foreground/80 uppercase mb-1">
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm font-bold text-card-foreground hover:text-primary transition-colors break-all"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="font-sans text-sm font-bold text-card-foreground">{value}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <Contact showHeading={false} />
      </main>
      <Footer />
    </div>
  );
}
