import React from "react";

export const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>;

export const DropdownMenuTrigger: React.FC<{ asChild?: boolean; children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

export const DropdownMenuContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-white border rounded shadow p-2 ${className}`}>{children}</div>
);

export const DropdownMenuItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div className="px-2 py-1 hover:bg-slate-100 rounded cursor-pointer" {...props}>
    {children}
  </div>
);
