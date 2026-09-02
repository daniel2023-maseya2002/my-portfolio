// src/utils/analytics.js

/**
 * Track an event with Umami Analytics
 * @param {string} eventName - The name of the event to track
 * @param {object} eventData - Additional data to send with the event
 */
export const trackEvent = (eventName, eventData = {}) => {
  // Skip tracking if not in browser
  if (typeof window === 'undefined') return;
  
  // Check if Umami is available
  if (window.umami && typeof window.umami.track === 'function') {
    try {
      window.umami.track(eventName, eventData);
      if (import.meta.env.DEV) {
        console.log(`[Analytics] Tracked: ${eventName}`, eventData);
      }
    } catch (error) {
      // Silently handle tracking errors (like 429 rate limiting)
      // Don't log 429 errors in production to avoid console noise
      if (import.meta.env.DEV && error.message !== 'Failed to fetch') {
        console.warn('[Analytics] Tracking error:', error);
      }
    }
  } else if (import.meta.env.DEV) {
    console.log(`[Analytics] Umami not loaded, would have tracked: ${eventName}`, eventData);
  }
};

/**
 * Predefined event names for consistency across the application
 */
export const EVENTS = {
  // Existing events
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
  
  // Digital Twin events
  DIGITAL_TWIN_OPENED: 'digital-twin-opened',
  DIGITAL_TWIN_STARTED: 'digital-twin-started',
  DIGITAL_TWIN_SECTION_VIEWED: 'digital-twin-section-viewed',
  TWIN_NODE_SELECTED: 'twin-node-selected',
  MODE_SELECTED: 'mode-selected',
  TECHNOLOGY_VIEWED: 'technology-viewed',
  PROJECT_VIEWED: 'project-viewed',
  PROJECT_DEMO_CLICKED: 'project-demo-clicked',
  ASSISTANT_OPENED: 'assistant-opened',
  ASSISTANT_QUESTION_SUBMITTED: 'assistant-question-submitted',
  EXPERIENCE_VIEWED: 'experience-viewed',
  ENGINEERING_DNA_VIEWED: 'engineering-dna-viewed',
  WHAT_I_BUILD_VIEWED: 'what-i-build-viewed',
  
  // LIFE OS events
  LIFE_OS_OPEN: 'life-os-open',
  GOAL_SELECTED: 'goal-selected',
  SKILL_SELECTED: 'skill-selected',
  PROJECT_SELECTED: 'project-selected',
  RECOMMENDATION_VIEWED: 'recommendation-viewed',
  WHAT_IF_USED: 'what-if-used',
  ASSISTANT_QUESTION: 'assistant-question'
};