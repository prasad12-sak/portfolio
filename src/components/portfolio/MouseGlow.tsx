import { useEffect, useRef, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -400, y: -400 });
  const current = useRef({ x: -400, y: -400 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setHover(!!el?.closest("a, button, [role='button'], input, textarea, label"));
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x - 4}px, ${target.current.y - 4}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.current.x - 18}px, ${current.current.y - 18}px, 0) scale(${hover ? 1.6 : 1})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [hover]);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(96,165,250,0.10), transparent 55%)`,
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-9 w-9 rounded-full border border-primary/60 md:block"
        style={{
          transition: "transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background 200ms, border-color 200ms",
          background: hover ? "rgba(59,130,246,0.10)" : "transparent",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-2 w-2 rounded-full bg-primary md:block"
        style={{ boxShadow: "0 0 12px rgba(96,165,250,0.9)" }}
      />
    </>
  );
}
