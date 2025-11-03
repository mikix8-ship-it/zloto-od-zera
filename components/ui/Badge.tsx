"use client";

import * as React from "react";

const Badge = React.forwardRef((
  { className, children, ...props }: any,
  ref: any
) => (
  <div
    ref={ref}
    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${className || ''}`}
    {...props}
  >
    {children}
  </div>
));
Badge.displayName = "Badge";

export { Badge };
