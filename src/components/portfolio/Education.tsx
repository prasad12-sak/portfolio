import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "Currently Pursuing",
    university: "Prof. Ram Meghe College of Engineering & Management, Badnera (SGBAU)",
    detail:
      "Deepening my expertise in software engineering, systems, and full-stack development.",
  },
  {
    degree: "Diploma in Information Technology",
    school: "Completed",
    university: "Government Polytechnic, Washim (MSBTE)",
    detail:
      "Built foundations across programming, databases, and web technologies.",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic journey">
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="glass neon-border rounded-2xl p-6"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary neon-border">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{it.degree}</h3>
            <div className="mt-1 text-sm text-primary">{it.school}</div>
            <div className="mt-1 text-sm text-muted-foreground">
              {it.university}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{it.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
