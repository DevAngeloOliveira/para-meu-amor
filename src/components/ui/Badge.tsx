import type { ReactNode } from "react";

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const defaultTone = className
    ? ""
    : "border-leaf/15 bg-warm-white text-leaf shadow-sm";

  return (
    <span
      className={`inline-flex min-h-9 items-center rounded-full border px-4 text-xs font-semibold ${defaultTone} ${className}`}
    >
      {children}
    </span>
  );
}
