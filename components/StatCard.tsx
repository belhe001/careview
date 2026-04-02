import type { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  description: string;
  "aria-label"?: string;
}

export function StatCard({
  icon,
  label,
  value,
  description,
  "aria-label": ariaLabel,
}: StatCardProps) {
  return (
    <article
      className="bg-[#181c27] border border-[#252a38] rounded-xl px-7 py-6"
      aria-label={ariaLabel ?? label}
    >
      <div className="flex items-center gap-2.5 text-[#8b92a4] text-sm font-medium">
        <span aria-hidden="true">{icon}</span>
        {label}
      </div>
      <p
        className="text-[56px] font-bold leading-none mt-4 tracking-tight text-white"
        aria-live="polite"
        aria-atomic="true"
      >
        {value}
      </p>
      <p className="text-[#8b92a4] text-xs mt-2.5 leading-relaxed">
        {description}
      </p>
    </article>
  );
}
