import { GA_ID, PLAUSIBLE_DOMAIN } from "./constants";

export const ANALYTICS_PROVIDER = PLAUSIBLE_DOMAIN ? "plausible" : GA_ID ? "ga" : null;

export function trackEvent(
  eventName: string,
  eventData?: Record<string, any>,
): void {
  if (typeof window === "undefined") return;

  if (PLAUSIBLE_DOMAIN && window.plausible) {
    window.plausible(eventName, { props: eventData });
  }

  if (GA_ID && window.gtag) {
    window.gtag("event", eventName, eventData);
  }

  console.debug(`[Analytics] $${eventName}`, eventData);
}

export function trackCTAClick(buttonName: string, location: string): void {
  trackEvent("cta_click", {
    button: buttonName,
    location: location,
  });
}

export function trackFormSubmission(formName: string, success: boolean): void {
  trackEvent("form_submission", {
    form: formName,
    success: success,
  });
}

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, any> }) => void;
    gtag?: (...args: any[]) => void;
  }
}
