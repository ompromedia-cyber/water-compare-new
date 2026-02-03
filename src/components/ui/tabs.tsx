'use client';

import * as React from 'react';

type TabsProps = {
  value: string;
  onValueChange: (v: string) => void;
  children: React.ReactNode;
};

export function Tabs({ children }: TabsProps) {
  return <div>{children}</div>;
}

export function TabsList({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
}

export function TabsTrigger({
  value,
  children,
  onClick,
}: {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 rounded-md bg-neutral-800 text-sm hover:bg-neutral-700"
    >
      {children}
    </button>
  );
}
