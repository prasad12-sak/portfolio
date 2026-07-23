export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* deep base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 15% -10%, rgba(59,130,246,0.22), transparent 55%), radial-gradient(1000px 700px at 90% 110%, rgba(96,165,250,0.16), transparent 55%), radial-gradient(600px 500px at 50% 50%, rgba(37,99,235,0.06), transparent 60%), linear-gradient(180deg,#050816 0%,#080e1f 50%,#0B1120 100%)",
        }}
      />
      {/* aurora sweep */}
      <div
        className="absolute -inset-[20%] opacity-40 animate-aurora"
        style={{
          background:
            "conic-gradient(from 120deg at 50% 50%, transparent 0deg, rgba(59,130,246,0.18) 60deg, transparent 140deg, rgba(96,165,250,0.14) 220deg, transparent 300deg)",
          filter: "blur(60px)",
        }}
      />
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.12] animate-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 25%, transparent 78%)",
        }}
      />
      {/* floating 3D shapes */}
      <div
        className="absolute left-[6%] top-[12%] h-44 w-44 rounded-[2rem] border border-primary/25 animate-float-slow"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.10), rgba(96,165,250,0.02))",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 30px 80px -20px rgba(59,130,246,0.35)",
          transform: "perspective(800px) rotateX(12deg) rotateY(-14deg)",
        }}
      />
      <div
        className="absolute right-[8%] top-[55%] h-28 w-28 rotate-45 border border-accent/40 animate-float-med"
        style={{
          background: "linear-gradient(135deg, rgba(96,165,250,0.14), transparent)",
          boxShadow: "0 20px 60px -10px rgba(96,165,250,0.35)",
        }}
      />
      <div
        className="absolute left-[42%] bottom-[8%] h-36 w-36 rounded-full border border-primary/25 animate-float-slow"
        style={{
          animationDelay: "-3s",
          boxShadow: "inset 0 0 60px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.18)",
        }}
      />
      {/* fine particles */}
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-pulse-glow"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            width: (i % 3) + 1 + "px",
            height: (i % 3) + 1 + "px",
            animationDelay: `${(i % 6) * 0.5}s`,
            boxShadow: "0 0 8px rgba(147,197,253,0.9)",
          }}
        />
      ))}
      {/* film grain / noise */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
