import * as React from "react";

export function Dialog({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function DialogTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span className="cursor-pointer">{children}</span>;
}

export function DialogContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h3 className="text-lg font-semibold text-slate-900">{children}</h3>;
}
