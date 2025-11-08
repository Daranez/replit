import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

export function trackServiceView(serviceName: string) {
  trackEvent('view_service', {
    service_name: serviceName,
  });
}

export function trackContactFormSubmit() {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'Contact Form',
  });
}

export function trackLeadMagnetDownload(downloadType: string) {
  trackEvent('lead_magnet_download', {
    event_category: 'conversion',
    download_type: downloadType,
  });
}

export function trackNewsletterSignup() {
  trackEvent('newsletter_signup', {
    event_category: 'conversion',
    event_label: 'Newsletter',
  });
}

export function trackCalendlyOpen() {
  trackEvent('calendly_open', {
    event_category: 'engagement',
    event_label: 'Schedule Demo',
  });
}

export function trackCTAClick(ctaLabel: string) {
  trackEvent('cta_click', {
    event_category: 'engagement',
    cta_label: ctaLabel,
  });
}
