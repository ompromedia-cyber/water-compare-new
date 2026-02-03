import React from "react";
import clsx from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ variant = "default", className, children, ...props }) => {
  const base = "inline-flex items-center justify-center px-4 py-2 font-medium rounded-2xl transition";
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border border-slate-300 text-slate-900 hover:bg-slate-100",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
