"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-base-950 disabled:pointer-events-none disabled:opacity-50",
          size === "md" ? "h-10 px-4 text-sm" : "h-8 px-3 text-xs",
          variant === "primary" &&
            "bg-signal text-white hover:bg-signal/90 shadow-[0_0_0_1px_rgba(94,119,255,0.5)]",
          variant === "outline" &&
            "border border-base-600 text-ink-100 hover:border-signal/60 hover:text-white bg-base-900/60",
          variant === "ghost" && "text-ink-300 hover:text-white hover:bg-base-800",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
