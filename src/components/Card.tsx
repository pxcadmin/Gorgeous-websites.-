import type { ReactNode } from "react";
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  key?: string;
}) {
  return <article className={`content-card ${className}`}>{children}</article>;
}
