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
    <div className="mb-10 md:mb-14">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[var(--color-ink)]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
          {description}
        </p>
      )}
      <div className="mt-6 h-px w-12 bg-[var(--color-accent)]" />
    </div>
  );
}
