import { motion } from "framer-motion";
import { Award, Github, Code2, BookOpen } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Award, title: "Certificates", body: "Multiple certifications across web development, UI/UX, and modern JavaScript." },
  { icon: Github, title: "GitHub Profile", body: "Active open-source contributions and personal projects shipped publicly." },
  { icon: Code2, title: "Coding Achievements", body: "Consistent problem solving across algorithms and data structures." },
  { icon: BookOpen, title: "Learning Journey", body: "Constantly exploring new frameworks, tools, and design patterns." },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Milestones & growth">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, rotate: -0.5 }}
            className="glass neon-border rounded-2xl p-6"
          >
            <it.icon className="h-6 w-6 text-primary" />
            <div className="mt-3 font-display font-semibold">{it.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
