"use client";

import { ImageIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  className?: string;
};

export function ImageWithFallback({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-[linear-gradient(135deg,#E8D3B0,#FFFDF8_55%,#D96C6C)] text-love ${className}`}
        aria-label={alt}
        role="img"
      >
        <ImageIcon aria-hidden className="h-10 w-10 opacity-70" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      loading="eager"
      onError={() => setFailed(true)}
    />
  );
}
