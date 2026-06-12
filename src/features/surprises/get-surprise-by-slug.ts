import { notFound } from "next/navigation";
import { DEFAULT_SLUG, localSurprise } from "./surprise.constants";
import type { Surprise } from "./surprise.types";

export async function getSurpriseBySlug(slug: string): Promise<Surprise> {
  if (slug !== DEFAULT_SLUG) {
    notFound();
  }

  return localSurprise;
}
