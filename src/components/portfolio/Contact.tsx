import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Send, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "./Section";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xwsires",
        "template_59lsl2r",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "uYdKv3p4FGmpYfp88"
      )
      .then(() => {
        setSent(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setSent(false), 3000);
      })
      .catch((err) => {
        console.log(err);
        console.log("Status:", err.status);
        console.log("Text:", err.text);
        alert("Message Failed");
      });
  };




  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something" subtitle="Have an idea, an opportunity, or just want to say hi? My inbox is open.">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <motion.form onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong neon-border rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
              />            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
              />            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your idea..."
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
              />            </label>
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-all hover:scale-[1.02] hover:shadow-primary/60">
                {sent ? "Sent ✓" : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

            </div>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          {[
            { icon: Mail, label: "Email", value: "prasad@example.com", href: "mailto:prasad@example.com" },
            { icon: Github, label: "GitHub", value: "@prasadrathod", href: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", value: "in/prasadrathod", href: "https://linkedin.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="glass neon-border group flex items-center gap-4 rounded-2xl p-5 transition-all hover:glow-soft hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                <div className="font-medium">{s.value}</div>
              </div>
            </a>
          ))}
          <div className="glass rounded-2xl p-5 text-sm text-muted-foreground">
            Based in India · Open to remote roles and internships worldwide.
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
