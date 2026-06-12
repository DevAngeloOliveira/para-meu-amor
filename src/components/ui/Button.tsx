import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "green";
};

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "green";
  children: ReactNode;
};

const variants = {
  primary:
    "bg-love text-warm-white shadow-[0_14px_34px_rgba(178,58,58,0.2)] hover:bg-rose",
  green:
    "bg-leaf text-warm-white shadow-[0_14px_34px_rgba(47,107,79,0.18)] hover:bg-forest",
  secondary:
    "border border-earth/15 bg-warm-white text-coffee shadow-[0_12px_28px_rgba(91,58,41,0.08)] hover:border-love/45 hover:text-love",
};

const base =
  "inline-flex min-h-[58px] items-center justify-center rounded-full px-[29px] text-base font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-love";

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function LinkButton({
  className = "",
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
