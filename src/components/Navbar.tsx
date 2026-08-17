import { useEffect, useState, useCallback } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "../data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const linkBase =
    "relative text-sm font-medium transition-colors duration-200";
  const linkIdle = "text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]";
  const linkActive = "text-[var(--color-accent)]";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-surface)]/95 backdrop-blur border-[var(--color-border)] shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-[var(--color-bg)]/80 backdrop-blur border-transparent"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-[15px] font-bold text-[var(--color-ink)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-accent)] text-xs font-bold text-[var(--color-bg)]">
            {initials}
          </span>
          <span className="hidden sm:inline">{personalInfo.name}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${linkBase} ${isActive ? linkActive : linkIdle}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--color-accent)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href={personalInfo.resumeFile}
            download
            className="magnetic-btn inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-bg)] transition-all hover:bg-[var(--color-accent-dark)] hover:text-[var(--color-bg)] active:scale-95"
          >
            <Download size={15} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <ul className="container-page flex flex-col py-2">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3.5 text-[15px] font-medium border-b border-[var(--color-border)] last:border-0 transition-colors ${
                        isActive
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-ink)] hover:text-[var(--color-accent)]"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <div className="container-page pb-4">
              <a
                href={personalInfo.resumeFile}
                download
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-[var(--color-bg)] transition-all active:scale-[0.98]"
              >
                <Download size={15} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
