import { Download, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--color-border)] pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)]">
            <MapPin size={12} className="text-[var(--color-accent)]" />
            {personalInfo.location}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[var(--color-ink)] sm:text-5xl">
            {personalInfo.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-[var(--color-accent)] sm:text-xl">
            {personalInfo.title}
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
            {personalInfo.tagline} Skilled in Clean Architecture, MVVM,
            Firebase, REST APIs, and real-time service applications spanning
            food delivery, grocery, taxi booking, and parcel management.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={personalInfo.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Mail size={16} aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
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
        </div>
      </div>
    </section>
  );
}
