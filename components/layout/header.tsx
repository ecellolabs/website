"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { localizeHref, type Locale, type Messages } from "@/lib/i18n";
import LanguageSwitcher from "./switcher";
import { SOCIALS } from "./socials";

type HeaderProps = {
  content: Messages["header"];
  locale: Locale;
};

type MegaLink = { label: string; desc: string; href: string; soon: boolean };
type MegaColumn = { title: string; links: readonly MegaLink[] };
type MegaMenu = {
  featured: { eyebrow: string; title: string; body: string; cta: string; href: string };
  columns: readonly MegaColumn[];
};

const COMING_SOON: Record<Locale, string> = {
  en: "Coming soon",
  fr: "Bientôt",
  de: "Demnächst",
};

const isExternal = (href: string) => /^https?:\/\//.test(href);

export default function Header({ content, locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileKey, setMobileKey] = useState<string | null>(null);
  const [headerH, setHeaderH] = useState(73);

  const headerRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const bookingHref = localizeHref(locale, "/contact");

  const activeItem = content.nav.find((l) => l.menu !== null && l.label === openKey) ?? null;
  const activeMenu = (activeItem?.menu ?? null) as unknown as MegaMenu | null;

  const mobileItem = content.nav.find((l) => l.menu !== null && l.label === mobileKey) ?? null;
  const mobileMenu = (mobileItem?.menu ?? null) as unknown as MegaMenu | null;

  /* header chrome */

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderH(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* mega men */
  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openMega = useCallback(
    (key: string) => {
      cancelClose();
      setOpenKey(key);
    },
    [cancelClose],
  );

  const closeMega = useCallback(
    (delay = 0) => {
      cancelClose();
      if (delay === 0) {
        setOpenKey(null);
        return;
      }
      closeTimer.current = setTimeout(() => setOpenKey(null), delay);
    },
    [cancelClose],
  );

  useEffect(() => cancelClose, [cancelClose]);

  // Hover-to-open only where hovering is a real input (skips touch).
  const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  useEffect(() => {
    if (!openKey) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const trigger = navRef.current?.querySelector<HTMLButtonElement>(
        `[data-mega-trigger="${openKey}"]`,
      );
      closeMega();
      trigger?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openKey, closeMega]);

  /* mobile drawer */

  // Reset the submenu on open, not on close: resetting on a link click re-renders
  // the drawer CTA's href before the browser follows it.
  const openDrawer = () => {
    setMobileKey(null);
    setMenuOpen(true);
  };

  const closeDrawer = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen, closeDrawer]);

  const solidHeader = menuOpen || Boolean(openKey);

  const navLinkClass =
    "group text-[15px] font-medium text-[#33405a] relative transition-colors duration-300 hover:text-[#0b1f3a] after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#0b1f3a] after:rounded-full after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";
  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-60 border-b transition-[background,border-color,backdrop-filter] duration-300 ${
          solidHeader
            ? "bg-[var(--color-paper)] backdrop-blur-md border-[rgba(189,209,232,0.24)]"
            : scrolled
              ? "bg-white/84 backdrop-blur-md border-[rgba(189,209,232,0.24)]"
              : "bg-transparent backdrop-blur-none border-transparent"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6.5 py-4 flex items-center justify-between gap-4.5">
          <a
            className="flex items-center gap-2.5"
            href={localizeHref(locale, "#top")}
            aria-label={content.homeLabel}
          >
            <span className="wordmark text-[31px]">ecello</span>
          </a>
          <div
            ref={navRef}
            className="hidden md:block"
            onMouseLeave={() => closeMega(160)}
            onBlur={(e) => {
              const next = e.relatedTarget as Node | null;
              if (
                next &&
                (navRef.current?.contains(next) || panelRef.current?.contains(next))
              ) {
                return;
              }
              closeMega();
            }}
          >
            <nav className="flex items-center gap-8.5">
              {content.nav.map((link) => {
                if (link.menu === null) {
                  return (
                    <a
                      key={link.href}
                      href={localizeHref(locale, link.href)}
                      className={navLinkClass}
                    >
                      {link.label}
                    </a>
                  );
                }

                const isOpen = openKey === link.label;
                return (
                  <button
                    key={link.label}
                    type="button"
                    data-mega-trigger={link.label}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-controls="mega-panel"
                    onMouseEnter={() => canHover() && openMega(link.label)}
                    onFocus={() => openMega(link.label)}
                    onClick={() => (isOpen ? closeMega() : openMega(link.label))}
                    className={`${navLinkClass} flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 ${
                      isOpen ? "text-[#0b1f3a] after:scale-x-100" : ""
                    }`}
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden
                      className={`w-2.5 h-2.5 transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M2 4.5 6 8.5 10 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <Button variant="primary" href={bookingHref}>
              {content.cta}
            </Button>
          </div>
          <div className="flex md:hidden items-center gap-2 mr-2">
            <LanguageSwitcher locale={locale} />
            <button
              className="relative z-70 flex flex-col justify-center items-center gap-1.5 w-10 h-10 -mr-2 bg-transparent border-none cursor-pointer"
              aria-label={menuOpen ? content.closeMenu : content.openMenu}
              aria-expanded={menuOpen}
              onClick={() => (menuOpen ? closeDrawer() : openDrawer())}
            >
              <span
                className={`block w-6 h-0.5 bg-[var(--color-navy)] rounded-sm transition-transform duration-300 ease-out ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--color-navy)] rounded-sm transition-opacity duration-200 ease-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--color-navy)] rounded-sm transition-transform duration-300 ease-out ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mega-menu backdrop (desktop) */}
      <div
        aria-hidden
        onClick={() => closeMega()}
        className={`hidden md:block fixed inset-0 z-54 bg-[var(--color-navy)]/25 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
          openKey ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mega-menu panel (desktop) */}
      <div
        id="mega-panel"
        ref={panelRef}
        style={{ top: headerH }}
        onMouseEnter={cancelClose}
        onMouseLeave={() => closeMega(160)}
        aria-hidden={!openKey}
        className={`hidden md:block fixed left-0 right-0 z-59 origin-top overflow-hidden transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          openKey
            ? "opacity-100 translate-y-0 visible pointer-events-auto"
            : "opacity-0 -translate-y-3 invisible pointer-events-none"
        }`}
      >
        <div className="bg-[var(--color-paper)] border-b border-[rgba(189,209,232,0.4)] shadow-[0_24px_60px_-28px_rgba(11,31,58,0.35)]">
          <div className="max-w-[1180px] mx-auto px-6.5 py-10 max-h-[52vh] overflow-y-auto">
            {activeMenu ? (
              <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] gap-14 items-start">
                {/* Featured */}
                <a
                  href={localizeHref(locale, activeMenu.featured.href)}
                  target={isExternal(activeMenu.featured.href) ? "_blank" : undefined}
                  rel={isExternal(activeMenu.featured.href) ? "noopener noreferrer" : undefined}
                  onClick={() => closeMega()}
                  className="group block rounded-2xl border border-[var(--color-line)] bg-white/70 p-7 transition-colors duration-300 hover:border-[rgba(11,31,58,0.28)]"
                >
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5b6b8a]">
                    {activeMenu.featured.eyebrow}
                  </span>
                  <h3 className="font-[family-name:var(--font-bricolage)] text-[26px] leading-[1.15] font-bold text-[var(--color-navy)] mt-3">
                    {activeMenu.featured.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[#33405a] mt-3">
                    {activeMenu.featured.body}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-navy)] mt-5">
                    {activeMenu.featured.cta}
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden
                      className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>

                {/* Link columns */}
                <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                  {activeMenu.columns.map((col) => (
                    <div key={col.title}>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5b6b8a] pb-3 border-b border-[var(--color-line)]">
                        {col.title}
                      </p>
                      <ul className="mt-3 flex flex-col">
                        {col.links.map((item) =>
                          item.soon ? (
                            <li
                              key={item.label}
                              aria-disabled
                              className="rounded-xl px-3 py-2.5 -mx-3 opacity-60 cursor-default"
                            >
                              <span className="flex items-center gap-2 text-[15px] font-semibold text-[var(--color-navy)]">
                                {item.label}
                                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] rounded-full border border-[var(--color-line)] px-2 py-0.5">
                                  {COMING_SOON[locale]}
                                </span>
                              </span>
                              <span className="block text-[13.5px] leading-[1.5] text-[#5b6b8a] mt-0.5">
                                {item.desc}
                              </span>
                            </li>
                          ) : (
                            <li key={item.label}>
                              <a
                                href={localizeHref(locale, item.href)}
                                target={isExternal(item.href) ? "_blank" : undefined}
                                rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
                                onClick={() => closeMega()}
                                className="group block rounded-xl px-3 py-2.5 -mx-3 transition-colors duration-200 hover:bg-white/80"
                              >
                                <span className="flex items-center gap-1.5 text-[15px] font-semibold text-[var(--color-navy)]">
                                  {item.label}
                                  {isExternal(item.href) ? (
                                    <svg
                                      viewBox="0 0 16 16"
                                      aria-hidden
                                      className="w-3 h-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-70 group-hover:translate-x-0"
                                    >
                                      <path
                                        d="M6 3h7v7M13 3 4 12"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  ) : null}
                                </span>
                                <span className="block text-[13.5px] leading-[1.5] text-[#5b6b8a] mt-0.5">
                                  {item.desc}
                                </span>
                              </a>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Mobile drawer backdrop */}
      <div
        onClick={closeDrawer}
        aria-hidden
        className={`fixed inset-0 z-55 bg-[var(--color-navy)]/40 backdrop-blur-sm transition-opacity duration-300 ease-out md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile left-side drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={content.openMenu}
        style={{ top: headerH }}
        className={`fixed bottom-0 left-0 z-58 w-[86%] max-w-[340px] bg-[var(--color-paper)] flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex-1 px-6 py-5 overflow-y-auto">
          {mobileMenu && mobileItem ? (
            /* Mobile submenu (replaces the main nav inside the drawer) */
            <div>
              <button
                type="button"
                onClick={() => setMobileKey(null)}
                className="flex items-center gap-2 bg-transparent border-none cursor-pointer p-0 text-[15px] font-medium text-[#33405a]"
              >
                <svg viewBox="0 0 16 16" aria-hidden className="w-3.5 h-3.5">
                  <path
                    d="M10 3 5 8l5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {content.backMenu}
              </button>

              <p className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-[var(--color-navy)] mt-4">
                {mobileItem.label}
              </p>

              <a
                href={localizeHref(locale, mobileMenu.featured.href)}
                target={isExternal(mobileMenu.featured.href) ? "_blank" : undefined}
                rel={isExternal(mobileMenu.featured.href) ? "noopener noreferrer" : undefined}
                onClick={closeDrawer}
                className="block rounded-2xl border border-[var(--color-line)] bg-white/70 p-5 mt-4"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5b6b8a]">
                  {mobileMenu.featured.eyebrow}
                </span>
                <span className="block font-[family-name:var(--font-bricolage)] text-[19px] leading-[1.2] font-bold text-[var(--color-navy)] mt-2">
                  {mobileMenu.featured.title}
                </span>
                <span className="block text-[14px] leading-[1.55] text-[#33405a] mt-2">
                  {mobileMenu.featured.body}
                </span>
              </a>

              {mobileMenu.columns.map((col) => (
                <div key={col.title} className="mt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5b6b8a] pb-2 border-b border-[var(--color-line)]">
                    {col.title}
                  </p>
                  <ul className="mt-1 flex flex-col">
                    {col.links.map((item) =>
                      item.soon ? (
                        <li key={item.label} aria-disabled className="py-3 opacity-60">
                          <span className="flex items-center gap-2 text-[16px] font-semibold text-[var(--color-navy)]">
                            {item.label}
                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] rounded-full border border-[var(--color-line)] px-2 py-0.5">
                              {COMING_SOON[locale]}
                            </span>
                          </span>
                          <span className="block text-[13.5px] leading-[1.5] text-[#5b6b8a] mt-0.5">
                            {item.desc}
                          </span>
                        </li>
                      ) : (
                        <li key={item.label}>
                          <a
                            href={localizeHref(locale, item.href)}
                            target={isExternal(item.href) ? "_blank" : undefined}
                            rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
                            onClick={closeDrawer}
                            className="block py-3"
                          >
                            <span className="flex items-center gap-1.5 text-[16px] font-semibold text-[var(--color-navy)]">
                              {item.label}
                              {isExternal(item.href) ? (
                                <svg viewBox="0 0 16 16" aria-hidden className="w-3 h-3 opacity-50">
                                  <path
                                    d="M6 3h7v7M13 3 4 12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              ) : null}
                            </span>
                            <span className="block text-[13.5px] leading-[1.5] text-[#5b6b8a] mt-0.5">
                              {item.desc}
                            </span>
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <>
              <nav className="flex flex-col">
                {content.nav.map((link) =>
                  link.menu !== null ? (
                    <button
                      key={link.label}
                      type="button"
                      aria-haspopup="true"
                      onClick={() => setMobileKey(link.label)}
                      className="flex items-center justify-between gap-3 w-full text-left bg-transparent border-0 border-b border-[var(--color-line)] cursor-pointer p-0 font-[family-name:var(--font-bricolage)] text-lg font-bold text-[var(--color-navy)] py-3"
                    >
                      {link.label}
                      <svg viewBox="0 0 16 16" aria-hidden className="w-3.5 h-3.5 opacity-50">
                        <path
                          d="M6 3l5 5-5 5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <a
                      key={link.href}
                      href={localizeHref(locale, link.href)}
                      target={isExternal(link.href) ? "_blank" : undefined}
                      rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                      onClick={closeDrawer}
                      className="flex items-center justify-between gap-3 font-[family-name:var(--font-bricolage)] text-lg font-bold text-[var(--color-navy)] py-3 border-b border-[var(--color-line)]"
                    >
                      {link.href === "#about" ? "About us" : link.label}
                      {isExternal(link.href) ? (
                        <svg viewBox="0 0 16 16" aria-hidden className="w-3.5 h-3.5 opacity-50">
                          <path
                            d="M6 3h7v7M13 3 4 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : null}
                    </a>
                  ),
                )}
              </nav>

              <div className="flex items-center gap-3 mt-6">
                {SOCIALS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid place-items-center w-10 h-10 rounded-full border-2 border-[var(--color-navy)] text-[var(--color-navy)]"
                  >
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" aria-hidden>
                      {icon}
                    </svg>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="px-6 py-5 border-t border-[var(--color-line)]">
          {/* Inside a submenu, the drawer CTA leads to that section instead of contact. */}
          {mobileMenu ? (
            <Button
              variant="primary"
              href={localizeHref(locale, mobileMenu.featured.href)}
              target={isExternal(mobileMenu.featured.href) ? "_blank" : undefined}
              rel={isExternal(mobileMenu.featured.href) ? "noopener noreferrer" : undefined}
              className="w-full justify-center"
              onClick={closeDrawer}
            >
              {mobileMenu.featured.cta}
            </Button>
          ) : (
            <Button
              variant="primary"
              href={bookingHref}
              className="w-full justify-center"
              onClick={closeDrawer}
            >
              {content.cta}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}