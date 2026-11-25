import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  compact = false,
  className,
  href = "/dashboard",
}: {
  compact?: boolean;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 text-slate-900",
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 shrink-0 text-orange-600"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="12" height="12" rx="3" fill="currentColor" />
        <rect x="14" y="14" width="12" height="12" rx="3" fill="currentColor" opacity="0.5" />
        <rect x="14" y="2" width="12" height="5" rx="2" fill="currentColor" opacity="0.3" />
        <rect x="2" y="14" width="5" height="12" rx="2" fill="currentColor" opacity="0.3" />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight">
            Weblign
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
            Sales CRM
          </span>
        </span>
      )}
    </Link>
  );
}
