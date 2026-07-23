import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Section } from "./Section";
import img1 from "@/assets/blood.png";
import img2 from "@/assets/medhouse.png";
import img3 from "@/assets/eventcert.png";

const projects = [
  {
    title: "Blood Bank Management System",
    image: img1,
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    description: "End-to-end platform for donor management, blood request workflows, and an admin dashboard for real-time inventory tracking.",
  },
  {
    title: "MedHouse",
    image: img2,
    stack: ["React", "HTML", "Vite", "Node.js", "express.js"],
    description: "a full-stack hostel management system to manage student requests, medical services, room cleaning, mentoring, leave requests, and clearance processes",
  },
  {
    title: "EventCert",
    image: img3,
    stack: ["HTML", "CSS", "JavaScript"],
    description: "A Certificate Management System that uses Local Storage to manage student applications and automatically generate certificates after admin approval.",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work" subtitle="A few projects I've built while learning and shipping.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass neon-border group flex flex-col overflow-hidden rounded-2xl transition-shadow hover:glow-soft"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted/30 p-2 flex items-center justify-center">
              <img src={p.image} alt={p.title} width={1280} height={800} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground text-justify">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] text-primary">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a href="https://github.com/prasad12-sak" className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-md shadow-primary/30 transition-transform hover:scale-105">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
