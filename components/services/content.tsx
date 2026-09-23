import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { localizeHref, type Locale, type ServicesContent } from "@/lib/i18n";

type ServicesPageProps = {
  content: ServicesContent;
  locale: Locale;
};

type FocusKey = ServicesContent["focus"][number]["key"];

const FOCUS_ICONS: Record<FocusKey, ReactNode> = {
  ai: (
    <>
      <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
      <path d="M19 15l.8 1.9 1.9.8-1.9.8L19 20.4l-.8-1.9-1.9-.8 1.9-.8L19 15z" />
    </>
  ),
  ml: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M7 6.8l3.3 4M7 17.2l3.3-4M14 12h3" />
    </>
  ),
  ar: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
    </>
  ),
  apps: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
};

export default function ServicesPage({ content, locale }: ServicesPageProps) {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:z-0 before:pointer-events-none before:[background:radial-gradient(720px_460px_at_82%_12%,rgba(46,155,238,.16),transparent_62%),radial-gradient(560px_420px_at_6%_88%,rgba(21,96,212,.10),transparent_60%)]">
        <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6.5 pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="text-center max-w-[760px] mx-auto">
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-[var(--color-azure)]">
              {content.eyebrow}
            </span>
            <h1 className="text-[clamp(34px,5.2vw,58px)] font-extrabold mt-4">{content.title}</h1>
            <p className="text-[clamp(16px,1.7vw,19px)] text-[var(--color-muted)] mt-5 max-w-[580px] mx-auto">
              {content.intro}
            </p>
          </div>

          {/* FOCUS AREAS */}
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-[var(--color-muted)] text-center mt-16 md:mt-20">
            {content.focusEyebrow}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {content.focus.map((area) => (
              <article
                key={area.key}
                className="rounded-[26px] border-2 border-[var(--color-line)] bg-white px-7 py-8 md:px-9 md:py-9 transition-colors duration-300 hover:border-[rgba(46,155,238,0.45)]"
              >
                <span className="grid place-items-center w-12 h-12 rounded-full bg-[#e8f2fd] text-[var(--color-blue)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    aria-hidden
                  >
                    {FOCUS_ICONS[area.key]}
                  </svg>
                </span>
                <h2 className="text-[clamp(22px,2.4vw,28px)] font-extrabold text-[var(--color-navy)] mt-5">
                  {area.title}
                </h2>
                <p className="text-[var(--color-muted)] text-[15.5px] leading-relaxed mt-3">{area.desc}</p>
                <ul className="flex flex-col gap-2.5 mt-6">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-ink)]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[17px] h-[17px] text-[var(--color-azure)] flex-none"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVERYTHING ELSE */}
      <section className="py-24 bg-white border-y border-[rgba(189,209,232,0.24)]">
        <div className="max-w-[1180px] mx-auto px-6.5 text-center">
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-[var(--color-azure)]">
            {content.moreEyebrow}
          </span>
          <h2 className="text-[clamp(30px,4.4vw,52px)] font-extrabold mt-4">{content.moreTitle}</h2>
          <p className="text-[var(--color-muted)] text-[17px] mt-5 max-w-[560px] mx-auto">{content.moreBody}</p>
          <ul className="flex flex-wrap justify-center gap-3 mt-10 max-w-[820px] mx-auto">
            {content.more.map((item) => (
              <li
                key={item}
                className="rounded-full border-2 border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-2.5 text-[15px] font-semibold text-[var(--color-navy)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1232px] mx-auto px-6.5">
          <div className="relative overflow-hidden text-white rounded-[32px] px-10 py-18 text-center [background:radial-gradient(760px_430px_at_20%_12%,rgba(46,155,238,.32),transparent_68%),linear-gradient(135deg,#0b2264_0%,#0d286b_52%,#24538f_100%)]">
            <div className="relative z-[1] max-w-[640px] mx-auto">
              <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold">{content.cta.title}</h2>
              <p className="text-[#c7d6f2] text-lg mt-4.5">{content.cta.body}</p>
              <Button
                variant="white"
                href={localizeHref(locale, "/contact")}
                className="!mt-8.5 !px-7.5 !py-4 !text-[17px]"
              >
                {content.cta.button}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
