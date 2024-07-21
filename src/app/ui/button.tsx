import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "h-10 px-4 flex items-center rounded-lg bg-blue-500 text-sm text-white font-medium transition-colors hover:bg-blue-400 focus-visible:outline-blue-600 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}
