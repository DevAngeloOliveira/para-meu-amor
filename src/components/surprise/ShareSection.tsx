"use client";

import { Check, Share2 } from "lucide-react";
import { useMemo, useState } from "react";
import type { SurpriseContent } from "@/features/surprises/surprise.types";
import { buildWhatsAppShareUrl } from "@/lib/share/build-whatsapp-share-url";
import { copyToClipboard } from "@/lib/share/copy-to-clipboard";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { QRCodeCard } from "../ui/QRCodeCard";

type Props = {
  share: SurpriseContent["share"];
  shareUrl: string;
  title: string;
};

export function ShareSection({ share, shareUrl, title }: Props) {
  const [copied, setCopied] = useState(false);
  const whatsAppUrl = useMemo(
    () => buildWhatsAppShareUrl(shareUrl, title),
    [shareUrl, title],
  );

  async function handleCopy() {
    const ok = await copyToClipboard(shareUrl);
    setCopied(ok);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="bg-forest pb-20 text-warm-white">
      <Container>
        <div className="grid gap-8 border border-sand/25 p-7 md:grid-cols-[1fr_190px] md:items-center md:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#eaa0a0]">
              {share.eyebrow}
            </p>
            <h2 className="serif mt-4 max-w-2xl text-3xl font-medium leading-tight md:text-4xl">
              {share.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-warm-white/72">
              {share.description}
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-11 items-center justify-center border border-sand/45 px-5 text-xs font-semibold text-sand transition hover:bg-sand/10"
              >
                {copied ? (
                  <Check aria-hidden className="mr-2 h-4 w-4" />
                ) : (
                  <Share2 aria-hidden className="mr-2 h-4 w-4" />
                )}
                {copied ? "Link copiado" : "Compartilhar"}
              </button>
              <LinkButton
                href={whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="min-h-11 rounded-none border-sand/30 bg-transparent px-5 text-xs text-sand hover:border-sand hover:bg-sand/10 hover:text-sand"
              >
                WhatsApp
              </LinkButton>
            </div>
          </div>
          <QRCodeCard value={shareUrl} />
        </div>
      </Container>
    </section>
  );
}

