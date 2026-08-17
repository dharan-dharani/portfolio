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
            variants={fadeInUp}
            className="mt-6 text-4xl font-extrabold leading-tight text-[var(--color-ink)] sm:text-5xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-2 text-lg font-semibold text-[var(--color-accent)] sm:text-xl"
          >
            {typedRole}
            <span className="typing-cursor" aria-hidden="true" />
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base"
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
              className="magnetic-btn inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition-colors hover:bg-[var(--color-accent-dark)] hover:text-[var(--color-bg)]"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Mail size={16} aria-hidden="true" />
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
