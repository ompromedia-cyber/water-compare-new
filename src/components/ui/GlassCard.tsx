import React from "react";
import clsx from "clsx";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  subtle?: boolean;
};

export const GlassCard: React.FC<GlassCardProps> = ({ subtle = false, className, children, ...props }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white/50 backdrop-blur p-4 shadow-md",
        subtle && "bg-white/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
