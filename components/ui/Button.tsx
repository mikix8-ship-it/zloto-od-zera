"use client";

import * as React from "react";

const Button = React.forwardRef((
  { className, size, variant, children, ...props }: any,
  ref: any
) => {
  const baseClass = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  let sizeClass = "px-4 py-2 text-sm";
  if (size === "lg") sizeClass = "px-8 py-3 text-lg";
  if (size === "sm") sizeClass = "px-3 py-1 text-xs";
  
  let variantClass = "bg-gray-900 text-white hover:bg-gray-800";
  if (variant === "outline") variantClass = "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50";
  if (variant === "gold") variantClass = "bg-yellow-500 text-black hover:bg-yellow-600";
  
  return (
    <button
      ref={ref}
      className={`${baseClass} ${sizeClass} ${variantClass} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export { Button };
