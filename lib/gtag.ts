declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Page View
export const pageview = (url: string) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Generic Event
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

// Phone Call
export const trackPhoneCall = (location: string) => {
  event({
    action: "call_click",
    category: "engagement",
    label: location,
  });
};

// Contact Form
export const trackContactForm = () => {
  event({
    action: "contact_form_submit",
    category: "lead",
  });
};

// CTA Button
export const trackCTA = (location: string) => {
  event({
    action: "cta_click",
    category: "engagement",
    label: location,
  });
};