import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";
import { Section } from "./Section";

// SVG Skill Icons with official, authentic brand vectors
const SVG_ICONS: Record<string, { color: string; glow: string; svg: React.ReactNode }> = {
  HTML: {
    color: "#E34F26",
    glow: "rgba(227, 79, 38, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#E34F26]">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm15.52 7.722h-8.48l.24 2.72h8l-.72 8.08-4.08 1.16-4.08-1.16-.28-3.08h2.64l.12 1.4 1.6.44 1.6-.44.2-2.12H5.64l-.72-8.08h12.12l-.52 5.08z" />
      </svg>
    ),
  },
  CSS: {
    color: "#1572B6",
    glow: "rgba(21, 114, 182, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#1572B6]">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm15.688 4.75H6.312l.28 3.125h10.313l-.36 3.938-4.57 1.25-4.57-1.25-.28-3.125H4.437l.47 5.375 7.063 1.938 7.063-1.938.81-9.313z" />
      </svg>
    ),
  },
  JavaScript: {
    color: "#F7DF1E",
    glow: "rgba(247, 223, 30, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path
          d="M6.4 17.5c.5.8 1.2 1.3 2.3 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.9-1.6l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-2.1 1.7-3.7 4.3-3.7 2 0 3.3.7 4.1 2.2l-2 1.3c-.4-.8-1-1.1-2-1.1-1 0-1.5.5-1.5 1.1 0 .7.5 1 1.7 1.5l.7.3c2.2.9 3.4 1.9 3.4 4 0 2.4-1.9 3.9-4.8 3.9-2.7 0-4.3-1.2-5.1-2.7l2-1.1zm6-9.4h2.7v8.9c0 2.7-1.5 3.9-3.8 3.9-2 0-3.3-.9-3.9-2.3l2.2-1.2c.4.6.8 1 1.6 1 .8 0 1.2-.3 1.2-1.5v-8.8z"
          fill="#000"
        />
      </svg>
    ),
  },
  React: {
    color: "#61DAFB",
    glow: "rgba(97, 218, 251, 0.7)",
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full fill-none stroke-current" strokeWidth="1.5">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  "Node.js": {
    color: "#68A063",
    glow: "rgba(104, 160, 99, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#68A063]">
        <path d="M12 0L1.75 5.92v11.84L12 23.68l10.25-5.92V5.92L12 0zm-1.16 16.59c-2.48 0-3.8-1.17-3.8-3.08 0-2.84 3.48-3.06 5.15-3.41v-.47c0-.82-.48-1.27-1.63-1.27-1.13 0-1.65.37-1.85 1.14l-2.07-.87c.56-1.64 2.05-2.22 3.99-2.22 2.68 0 3.65 1.22 3.65 3.19v4.72h-1.93v-.93c-.48.65-1.32 1.2-2.51 1.2zm.47-4.72c-1.13.25-3.21.46-3.21 1.76 0 .74.52 1.17 1.48 1.17 1.18 0 1.73-.66 1.73-1.66v-1.27z" />
      </svg>
    ),
  },
  "Express.js": {
    color: "#E0E0E0",
    glow: "rgba(220, 220, 220, 0.5)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-white">
        <path d="M24 18.25h-4.8l-2.4-3.6-2.4 3.6H9.6l3.6-5.4-3.4-5.1h4.8l2.2 3.3 2.2-3.3H24l-3.6 5.1 3.6 5.4zM7.2 18.25H2.4l3.6-5.4-3.4-5.1h4.8l2.2 3.3 2.2-3.3H12l-3.6 5.1 3.6 5.4z" />
      </svg>
    ),
  },
  PHP: {
    color: "#777BB4",
    glow: "rgba(119, 123, 180, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#777BB4]">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-3.87 15.5h-2.12l.67-3.35h1.95c1.47 0 2.35-.68 2.67-2.28.34-1.68-.37-2.37-1.84-2.37H5.66L4.16 15.5H2.04l2.12-10.6h4.31c2.81 0 4.29 1.34 3.73 4.14-.44 2.2-1.8 3.51-3.69 3.86l.66.6h.04zm9.32 0h-2.12l.67-3.35h1.95c1.47 0 2.35-.68 2.67-2.28.34-1.68-.37-2.37-1.84-2.37h-3.81l-1.5 7.6h-2.12l2.12-10.6h4.31c2.81 0 4.29 1.34 3.73 4.14-.44 2.2-1.8 3.51-3.69 3.86l.66.6h.04z" />
      </svg>
    ),
  },
  MySQL: {
    color: "#00618A",
    glow: "rgba(0, 97, 138, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#00618A]">
        <path d="M21.72 13.06c-.46-.35-1.05-.55-1.68-.55-.83 0-1.57.37-2.07.95l-.6.78-.71-.8A3.76 3.76 0 0013.9 12.2c-.99 0-1.91.42-2.56 1.14l-.62.71-.32-.93A3.33 3.33 0 007.24 11.0c-.83 0-1.62.31-2.22.88L.5 16.27l2.48 2.58 4.54-4.36c.14-.14.32-.21.52-.21.21 0 .4.1.52.27l1.64 2.39-2.51 3.6-2.69-1.89-1.64 2.34 4.12 2.88c.6.42 1.38.42 1.97 0l3.6-2.51 1.83 2.67c.31.45.82.72 1.37.72.23 0 .46-.05.67-.16l6.4-3.2-1.89-2.58-4.65 2.32-1.43-2.1 4.54-6.5c.18-.25.46-.39.75-.39.18 0 .35.05.51.16l1.5.89 1.89-2.58-1.87-1.1z" />
      </svg>
    ),
  },
  MongoDB: {
    color: "#47A248",
    glow: "rgba(71, 162, 72, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#47A248]">
        <path d="M12.007 0C11.758 0 11.458.11 11.23.284C8.755 2.183 4 6.782 4 12.545c0 4.606 3.486 8.35 8 8.455v.455c0 .736.31 1.545 1 1.545s1-.809 1-1.545v-.455c4.514-.105 8-3.849 8-8.455 0-5.763-4.755-10.362-7.23-12.261C12.542.11 12.242 0 12.007 0zm-.007 2.455c4.254 3.736 6 7.418 6 10.09 0 3.382-2.618 6-6 6s-6-2.618-6-6c0-2.672 1.746-6.354 6-10.09z" />
      </svg>
    ),
  },
  Firebase: {
    color: "#FFCA28",
    glow: "rgba(255, 202, 40, 0.7)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#FFCA28]">
        <path d="M3.89 15.672L6.255.803a.534.534 0 0 1 .985-.126l3.011 5.674-10.36 9.321zm16.742 2.37L17.702 3.96a.534.534 0 0 0-.946-.226l-3.32 5.526 7.196 8.782zM13.626 9.78L11.58.558a.535.535 0 0 0-.964-.176l-3.23 6.07 6.24 3.328zM3.447 16.9l7.742 4.35a1.6 1.6 0 0 0 1.56 0l7.742-4.35-4.32-8.64-12.724 8.64z" />
      </svg>
    ),
  },
  "C / C++": {
    color: "#00599C",
    glow: "rgba(0, 89, 156, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#00599C]">
        <path d="M11.85 0a11.94 11.94 0 0 0-8.44 3.5 11.94 11.94 0 0 0 0 16.89 11.94 11.94 0 0 0 16.89 0 11.94 11.94 0 0 0 0-16.89A11.86 11.86 0 0 0 11.85 0zm-.09 5.37c1.6 0 3.06.57 4.2 1.52l-1.84 1.84a3.52 3.52 0 0 0-2.36-.88c-1.94 0-3.52 1.58-3.52 3.52s1.58 3.52 3.52 3.52c.9 0 1.73-.34 2.36-.88l1.84 1.84a6.11 6.11 0 0 1-4.2 1.52A6.14 6.14 0 0 1 5.62 11.4a6.14 6.14 0 0 1 6.14-6.03zm6.39 3.73h1.36v1.36h-1.36v1.36h-1.36v-1.36h-1.36V9.1h1.36V7.74h1.36V9.1zm3.27 0h1.36v1.36h-1.36v1.36h-1.36v-1.36h-1.36V9.1h1.36V7.74h1.36V9.1z" />
      </svg>
    ),
  },
  Java: {
    color: "#E76F51",
    glow: "rgba(231, 111, 81, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#E76F51]">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.87.187 4.969-.212 0 0 .54.332 1.07.622-2.457.705-5.467.587-7.076.108-1.579-.47-.616-1.232-.616-1.232zm-1.02-2.584s-.83.633 1.012.787c2.427.202 4.417.135 7.152-.375 0 0 .37.37.702.602-3.414.71-6.79.57-8.995.12-1.748-.358-.871-1.134-.871-1.134zm-.952-2.73s-1.138.83 1.341 1.01c3.277.237 6.425.04 10.37-.694 0 0 .232.404.475.688-4.704.93-9.155.808-12.062.184-2.316-.496-1.124-1.188-1.188zm10.741-2.907c1.076.994.476 2.016.476 2.016s1.615-.845.748-2.228c-.815-1.302-2.256-1.782-2.256-1.782s.374.453 1.032 1.994zm-3.32-4.103s1.29 1.482-.413 3.655c-1.36 1.737-3.178 3.036-3.178 3.036s.52-.387 1.076-1.157c1.132-1.564.912-2.61.168-3.522-.792-.973-1.636-1.576-1.636-1.576s.484.28 1.008 1.042c.524.762.975 1.522.975 1.522zm-3.957-3.79s2.008 2.046.438 4.793c-1.173 2.053-2.976 3.593-2.976 3.593s.623-.578 1.258-1.574c1.162-1.823.95-3.088.167-4.156-.888-1.21-1.928-1.902-1.928-1.902s.642.392 1.31 1.413c.668 1.02 1.731 1.833 1.731 1.833z" />
      </svg>
    ),
  },
  "VS Code": {
    color: "#007ACC",
    glow: "rgba(0, 122, 204, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#007ACC]">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.52-3.42a.75.75 0 0 0-.98.07L.25 7.11a.75.75 0 0 0 .04 1.09l4.5 3.8-4.5 3.8a.75.75 0 0 0-.04 1.09l1.29 1.33a.75.75 0 0 0 .98.07l4.52-3.42 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.2V3.8a1.5 1.5 0 0 0-.85-1.213zM18 16.5L11.5 12 18 7.5v9z" />
      </svg>
    ),
  },
  GitHub: {
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.5)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-white">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  Git: {
    color: "#F05032",
    glow: "rgba(240, 80, 50, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#F05032]">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.9l2.637 2.637c.642-.227 1.385-.088 1.9.427.7.7.7 1.834 0 2.534-.7.7-1.834.7-2.535 0-.54-.54-.675-1.334-.407-1.996L12.78 8.19v6.522c.214.108.41.258.57.418.7.7.7 1.834 0 2.534-.7.7-1.834.7-2.535 0-.7-.7-.7-1.834 0-2.534.184-.184.4-.33.633-.435V8.163c-.233-.105-.45-.25-.633-.434-.543-.542-.676-1.342-.403-2.007L7.616 2.919 1.455 9.08c-.604.604-.604 1.582 0 2.187l10.48 10.478c.604.604 1.582.604 2.187 0l9.424-9.424c.604-.604.604-1.582 0-2.188z" />
      </svg>
    ),
  },
  "Android Studio": {
    color: "#3DDC84",
    glow: "rgba(61, 220, 132, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#3DDC84]">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.552 0 .9997.4482.9997.9993.0004.5511-.4477.9997-.9997.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.552 0 .9997.4482.9997.9993 0 .5511-.4477.9997-.9997.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.85 12 7.85c-1.8533 0-3.5902.3939-5.1368 1.0998L4.8409 5.4467a.4161.4161 0 0 0-.5676-.1521.4157.4157 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396z" />
      </svg>
    ),
  },
  Lovable: {
    color: "#FF4081",
    glow: "rgba(255, 64, 129, 0.7)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#FF4081]">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  Figma: {
    color: "#F24E1E",
    glow: "rgba(242, 78, 30, 0.6)",
    svg: (
      <svg viewBox="0 0 38 57" className="w-full h-full fill-current">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  "Google Antigravity": {
    color: "#4285F4",
    glow: "rgba(66, 133, 244, 0.7)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
      </svg>
    ),
  },
};

const groups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "PHP"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "C / C++", "Java"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "GitHub", "Git", "Android Studio", "Lovable", "Figma", "Google Antigravity"],
  },
];

// Interactive 3D Ball Component for each skill
function SkillBall({ name, index }: { name: string; index: number }) {
  const info = SVG_ICONS[name] || {
    color: "#3B82F6",
    glow: "rgba(59, 130, 246, 0.6)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  };

  // Motion values for 3D cursor tilt interaction
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-30, 30], [25, -25]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-30, 30], [-25, 25]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="flex flex-col items-center justify-center p-2 group/ball"
    >
      {/* 3D Perspective Container */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center cursor-pointer"
        style={{ perspective: "800px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-shadow duration-300"
        >
          {/* Outer Rotating Glowing Atmosphere Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12 + (index % 4), repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1.5 rounded-full border border-dashed pointer-events-none transition-colors"
            style={{
              borderColor: `${info.color}40`,
              boxShadow: `0 0 15px ${info.glow}`,
            }}
          />

          {/* 3D Sphere Ball Core with 3D Rotation Animation */}
          <motion.div
            animate={{
              rotateY: [0, 360],
              y: [-2, 2, -2],
            }}
            transition={{
              rotateY: { duration: 10 + (index % 3) * 2, repeat: Infinity, ease: "linear" },
              y: { duration: 3 + (index % 2), repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.4) 0%, ${info.color} 50%, #030712 100%)`,
              boxShadow: `0 8px 25px ${info.glow}, inset 0 2px 6px rgba(255,255,255,0.6), inset 0 -6px 14px rgba(0,0,0,0.85)`,
            }}
          >
            {/* Glossy Top Highlight */}
            <div className="absolute top-1 left-2 w-5 h-2.5 rounded-full bg-white/40 blur-[1px] transform -rotate-12 pointer-events-none" />
          </motion.div>

          {/* Skill Icon Centered inside 3D Ball */}
          <div
            className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-transform group-hover/ball:scale-110"
            style={{
              color: info.color === "#FFFFFF" ? "#FFFFFF" : info.color,
              transform: "translateZ(14px)",
            }}
          >
            {info.svg}
          </div>
        </motion.div>
      </div>

      {/* Skill Name */}
      <span className="mt-2 text-xs font-semibold text-slate-300 group-hover/ball:text-primary transition-colors text-center max-w-[95px] truncate">
        {name}
      </span>
    </motion.div>
  );
}

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
            className="glass neon-border group rounded-2xl p-6 transition-shadow hover:glow-soft flex flex-col justify-start"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-foreground">{g.title}</h3>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {g.skills.length} skills
              </span>
            </div>

            {/* 3D Ball Grid starting immediately from top */}
            <div className="grid grid-cols-3 gap-3 justify-items-center items-start">
              {g.skills.map((skillName, idx) => (
                <SkillBall key={skillName} name={skillName} index={idx} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

