import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export function CountUpStat({
  value,
  prefix = "",
  suffix = "",
  label,
  format,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  format?: (value: number) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 28, stiffness: 90 });
  const display = useTransform(spring, (current) =>
    format
      ? format(current)
      : `${prefix}${current.toFixed(value % 1 ? 1 : 0)}${suffix}`,
  );
  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);
  return (
    <div ref={ref} className="stat-card">
      <motion.strong>{display}</motion.strong>
      <span>{label}</span>
    </div>
  );
}
