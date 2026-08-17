import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";
import { personalInfo } from "../data/portfolio";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const clipReveal = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const typedRole = useTypewriter({
    words: ["Flutter Developer", "Mobile App Developer", "Cross-platform Engineer"],
    typeSpeed: 70,
    deleteSpeed: 35,
    pauseDelay: 2000,
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--color-border)] pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        className="hero-grid absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04),transparent_70%)] -z-10"
        aria-hidden="true"
      />

      <div className="container-page grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)]"
          >
            <MapPin size={12} className="text-[var(--color-accent)]" />
            {personalInfo.location}
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={clipReveal}
            className="mt-6 text-4xl font-extrabold leading-[1.1] text-[var(--color-ink)] sm:text-5xl md:text-6xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-3 text-lg font-semibold text-[var(--color-accent)] sm:text-xl md:text-2xl"
          >
            {typedRole}
            <span className="typing-cursor" aria-hidden="true" />
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={personalInfo.resumeFile}
              download
              className="magnetic-btn group inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)] transition-all hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.25)] hover:bg-[var(--color-accent-dark)] active:scale-95"
            >
              <Download size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="magnetic-btn group inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-all hover:border-[var(--color-ink-faint)] hover:bg-[var(--color-surface)] active:scale-95"
            >
              <Mail size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5" />
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div className="absolute -inset-3 -z-10 rounded-2xl border border-[var(--color-border)] hidden sm:block" />
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm">
            <img
              src={personalInfo.photo}
              alt={`Portrait of ${personalInfo.name}, ${personalInfo.title}`}
              className="aspect-square w-full object-cover"
              width={480}
              height={480}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
