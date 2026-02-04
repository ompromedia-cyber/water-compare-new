import * as React from "react";

export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  );
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-slate-100">{children}</thead>;
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className="border-b">{children}</tr>;
}

export function TableCell({
  children,
  header,
}: {
  children: React.ReactNode;
  header?: boolean;
}) {
  const Tag = header ? "th" : "td";
  return (
    <Tag className="px-3 py-2 text-left font-normal">
      {children}
    </Tag>
  );
}
