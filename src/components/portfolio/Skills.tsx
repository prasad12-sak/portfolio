import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "C / C++", level: 70 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "GitHub", level: 88 },
      { name: "Git", level: 85 },
      { name: "Android Studio", level: 85 },
      { name: "Lovable", level: 80 },
      { name: "Figma", level: 80 },
      { name: "Google Antigravity", level: 60 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Toolbelt & stack" subtitle="A snapshot of the tech I use to design, build, and deploy modern web products.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="glass neon-border group rounded-2xl p-6 transition-shadow hover:glow-soft"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <span className="text-xs text-primary">{g.skills.length} skills</span>
            </div>
            <ul className="max-h-[220px] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {g.skills.map((s) => (
                <li key={s.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-foreground">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg,#3B82F6,#60A5FA)", boxShadow: "0 0 12px rgba(59,130,246,0.6)" }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
