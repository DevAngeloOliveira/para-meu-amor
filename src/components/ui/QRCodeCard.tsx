"use client";

import { QRCodeSVG } from "qrcode.react";

export function QRCodeCard({ value }: { value: string }) {
  return (
    <div className="mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-[28px] border border-earth/15 bg-warm-white p-3 shadow-sm md:h-40 md:w-40">
      <QRCodeSVG
        value={value}
        size={124}
        bgColor="#FFFDF8"
        fgColor="#2B1A12"
        level="M"
        includeMargin={false}
      />
    </div>
  );
}
