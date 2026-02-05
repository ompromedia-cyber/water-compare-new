import * as React from "react";

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-block">{children}</div>;
}

export function DropdownMenuTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span className="cursor-pointer">{children}</span>;
}

export function DropdownMenuContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute right-0 z-50 mt-2 min-w-[180px] rounded-2xl border border-white/60 bg-white/90 p-2 shadow-xl backdrop-blur">
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
      {children}
    </div>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-2 h-px bg-slate-200" />;
}
