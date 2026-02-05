import * as React from "react";

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  return <span className="relative inline-block">{children}</span>;
}

export function TooltipTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span className="cursor-help">{children}</span>;
}

export function TooltipContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="absolute z-50 mt-2 rounded-xl bg-slate-900 px-3 py-2 text-xs text-white shadow-lg">
      {children}
    </span>
  );
}
