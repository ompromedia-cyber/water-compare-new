import * as React from "react";

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-block">{children}</div>;
}

export function DropdownMenuTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export function DropdownMenuContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute right-0 z-50 mt-2 w-48 rounded-2xl border bg-white p-2 shadow-xl">
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
      className="cursor-pointer rounded-xl px-3 py-2 text-sm hover:bg-slate-100"
    >
      {children}
    </div>
  );
}
