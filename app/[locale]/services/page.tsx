import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesPage from "@/components/services/content";
import { getMessages, isLocale, locales } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { services } = getMessages(locale);

  return {
    title: services.metadata.title,
    description: services.metadata.description,
    alternates: {
      canonical: `/${locale}/services`,
      languages: Object.fromEntries(locales.map((lang) => [lang, `/${lang}/services`])),
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ServicesPage content={getMessages(locale).services} locale={locale} />;
}
