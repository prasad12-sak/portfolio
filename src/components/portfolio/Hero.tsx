import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Download, Mail, ChevronDown, Sparkles } from "lucide-react";
import resumePdf from "@/assets/Spyonix.pdf";

const techs = ["React", "TypeScript", "Node.js", "MongoDB", "Express.js", "Firebase", "Tailwind"];

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setTxt(w.slice(0, txt.length + 1));
          if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
        } else {
          setTxt(w.slice(0, txt.length - 1));
          if (txt.length - 1 === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? 40 : 90,
    );
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return txt;
}

export function Hero() {
  const typed = useTyping(techs);
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const tx = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 90, damping: 20 });
  const ty = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 90, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center px-5 pt-24"
      style={{ perspective: "1400px" }}
    >
      {/* soft halo */}
      <motion.div
        aria-hidden
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.35), rgba(96,165,250,0.10) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="mx-auto max-w-5xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for Internships & Freelance
          <Sparkles className="h-3 w-3 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,8vw,7rem)] font-bold leading-[1.02] tracking-[-0.04em]"
          style={{ transform: "translateZ(80px)" }}
        >
          Hi, I'm{" "}
          <span className="text-gradient inline-block">Prasad Rathod</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ transform: "translateZ(50px)" }}
        >
          Information Technology Student · Full Stack Developer · UI/UX Designer crafting immersive, performant web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl glass-strong px-5 py-3 font-mono text-sm sm:text-base"
          style={{ transform: "translateZ(60px)" }}
        >
          <span className="text-primary">{">"}</span>
          <span className="text-muted-foreground">building with</span>
          <span className="text-gradient font-semibold min-w-[7ch] text-left">{typed}</span>
          <span className="ml-1 inline-block h-5 w-[2px] bg-primary animate-blink-caret" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
          style={{ transform: "translateZ(70px)" }}
        >
          <a
  href="https://spyonix-digital-solution.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.9)]"
>
  <span className="relative z-10">Ask for Project</span>

  <ExternalLink className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
</a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download="spyonix.pdf"
            className="group inline-flex items-center gap-2 rounded-xl glass-strong neon-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:glow-soft"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <ChevronDown className="h-5 w-5 animate-scroll-hint text-primary" />
      </motion.a>
    </section>
  );
}
