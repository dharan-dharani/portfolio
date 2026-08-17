import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10 md:mb-14"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-2xl font-bold text-[var(--color-ink)] md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
          {description}
        </p>
      )}
      <motion.div
        className="mt-6 h-px w-12 bg-[var(--color-accent)]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}
