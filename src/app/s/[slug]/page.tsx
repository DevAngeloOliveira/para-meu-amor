import type { Metadata } from "next";
import { SurpriseLandingPage } from "@/components/surprise/SurpriseLandingPage";
import { DEFAULT_SLUG } from "@/features/surprises/surprise.constants";
import { getSurpriseBySlug } from "@/features/surprises/get-surprise-by-slug";
import { getPublicSiteUrl } from "@/lib/url/get-public-site-url";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [{ slug: DEFAULT_SLUG }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const surprise = await getSurpriseBySlug(slug);
  const title = `${surprise.content.coupleName} | Jardim de Nós`;
  const description = surprise.content.hero.subtitle;
  const url = `${getPublicSiteUrl()}/s/${surprise.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default async function SurprisePage({ params }: Props) {
  const { slug } = await params;
  const surprise = await getSurpriseBySlug(slug);

  return <SurpriseLandingPage surprise={surprise} />;
}
