import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } as const },
};

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="About" title={about.heading} />
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 md:max-w-3xl"
        >
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={item}
              className="text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
