import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    role: "UI/UX Design Intern",
    company: "Skooliq",
    period: "Internship",
    points: [
      "Designed user interfaces for education-focused products",
      "Collaborated closely with developers on component handoff",
      "Built responsive designs across mobile and desktop",
      "Iterated on flows to improve overall user experience",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked" subtitle="Hands-on experience turning ideas into real, shipped interfaces.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" />
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-12 md:pl-0"
          >
            <div className="absolute left-2.5 bottom-6 grid h-4 w-4 place-items-center rounded-full bg-primary shadow-[0_0_16px_rgba(59,130,246,0.8)] md:left-1/2 md:-translate-x-1/2" />
            <div className="glass-strong neon-border rounded-2xl p-6 md:ml-[52%]">
              <div className="flex items-center gap-2 text-primary">
                <Briefcase className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest">{it.period}</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold">{it.role}</h3>
              <div className="text-sm text-muted-foreground">{it.company}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
