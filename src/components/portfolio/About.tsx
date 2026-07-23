import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket } from "lucide-react";
import { Section } from "./Section";
import avatar from "@/assets/avatar.png";

const cards = [
  { icon: Code2, title: "Clean Code", body: "Writing scalable, maintainable code with modern best practices." },
  { icon: Sparkles, title: "Design Focus", body: "Blending functionality with elegant, thoughtful interfaces." },
  { icon: Rocket, title: "Always Learning", body: "Exploring new frameworks, tools, and problem-solving patterns." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Passion meets code" subtitle="I'm an IT student turning curiosity into full-stack products that feel modern, fast, and intuitive.">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass-strong neon-border relative aspect-square overflow-hidden rounded-3xl glow-soft">
            <img src={avatar} alt="Prasad Rathod" width={800} height={800} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-2xl glass-strong px-4 py-3 text-sm">
            <div className="text-xs text-muted-foreground">Currently</div>
            <div className="font-semibold text-gradient">BE IT · Full Stack</div>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-muted-foreground text-justify"
          >
            I'm <span className="text-foreground font-semibold">Prasad Rathod</span>, an Information Technology student and aspiring Full Stack Developer. I love architecting web
            experiences that combine performance, accessibility, and beautiful UI. From{" "}
            <span className="text-primary">MERN stack</span> apps to design systems, I focus on shipping polished, production-ready work.
          </motion.p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass neon-border rounded-2xl p-5"
              >
                <c.icon className="h-6 w-6 text-primary" />
                <div className="mt-3 font-display font-semibold">{c.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
