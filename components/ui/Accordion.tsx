"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

const Accordion = React.forwardRef((
  { children, ...props }: any,
  ref: any
) => (
  <div ref={ref} {...props}>
    {children}
  </div>
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef((
  { children, value, ...props }: any,
  ref: any
) => (
  <div ref={ref} {...props}>
    {children}
  </div>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef((
  { children, ...props }: any,
  ref: any
) => (
  <button
    ref={ref}
    className="flex w-full items-center justify-between py-4 px-4 text-left font-medium hover:bg-gray-100 transition"
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
  </button>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef((
  { children, ...props }: any,
  ref: any
) => (
  <div ref={ref} className="pb-4 pt-0 px-4" {...props}>
    {children}
  </div>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
