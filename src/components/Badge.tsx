type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent";
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  if (variant === "accent") {
    return (
      <span className="inline-flex items-center rounded-md border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent-dark)]">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink-soft)]">
      {children}
    </span>
  );
}
