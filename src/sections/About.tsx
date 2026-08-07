import { useReveal } from "../hooks/useReveal";
import SectionHeading from "../components/SectionHeading";
import { about } from "../data/portfolio";

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="About" title={about.heading} />
        <div
          ref={ref}
          className="reveal grid gap-4 md:max-w-3xl"
        >
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
