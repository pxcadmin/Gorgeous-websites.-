import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
export function Button({
  children,
  to = "/strategy-session",
  variant = "primary",
}: {
  children: ReactNode;
  to?: string;
  variant?: "primary" | "ghost";
}) {
  return (
    <Link to={to} className={`button button-${variant}`}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
