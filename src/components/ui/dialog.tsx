import * as React from "react";

export function Dialog({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        {title && <h2 className="mb-4 text-lg font-semibold">{title}</h2>}
        {children}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
