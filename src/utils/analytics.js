// src/utils/analytics.js

/**
 * Track an event with Umami Analytics
 * @param {string} eventName - The name of the event to track
 * @param {object} eventData - Additional data to send with the event
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.umami) {
    try {
      window.umami.track(eventName, eventData);
      // Optional: Log for debugging in development
      if (import.meta.env.DEV) {
        console.log(`[Analytics] Tracked: ${eventName}`, eventData);
      }
    } catch (error) {
      console.warn('[Analytics] Tracking error:', error);
    }
  } else if (import.meta.env.DEV) {
    console.log(`[Analytics] Umami not loaded, would have tracked: ${eventName}`, eventData);
  }
};

/**
 * Predefined event names for consistency across the application
 */
export const EVENTS = {
  CV_DOWNLOAD: 'download-cv',
  RESUME_DOWNLOAD: 'download-resume',
  EMAIL_CLICK: 'email-click',
  WHATSAPP_CLICK: 'whatsapp-click',
  GITHUB_CLICK: 'github-click',
  LINKEDIN_CLICK: 'linkedin-click',
  DEMO_CLICK: 'demo-click',
  PROJECT_VIEW: 'project-view',
  FORM_SUBMIT: 'form-submit',
  CONTACT_SUBMIT: 'contact-submit',
  PAGE_VIEW: 'pageview',
  NAVIGATION: 'navigation',
};