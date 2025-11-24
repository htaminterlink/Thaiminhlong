// API Configuration
export const API_BASE_URL =
  process.env.REACT_APP_API_URL || "https://api.trinityvietnam.vn";
export const API_KEY = process.env.REACT_APP_API_KEY || "";

// Social Media Links
export const SOCIAL_LINKS = {
  facebook:
    process.env.REACT_APP_FACEBOOK_URL || "https://facebook.com/trinityvietnam",
  instagram:
    process.env.REACT_APP_INSTAGRAM_URL ||
    "https://instagram.com/trinityvietnam",
  linkedin:
    process.env.REACT_APP_LINKEDIN_URL ||
    "https://linkedin.com/company/trinityvietnam",
};

// Contact Information
export const CONTACT_INFO = {
  email: process.env.REACT_APP_CONTACT_EMAIL || "info@trinityvietnam.vn",
  phone: process.env.REACT_APP_CONTACT_PHONE || "+84 XXX XXX XXX",
  address: "Vietnam",
};

// Animation Durations (in seconds)
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 1,
};

// Breakpoints (must match theme breakpoints)
export const BREAKPOINTS = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Routes
export const ROUTES = {
  home: "/",
  about: "/about",
  products: "/products",
  contact: "/contact",
};

// App Settings
export const APP_SETTINGS = {
  siteName: "Trinity Vietnam",
  siteDescription: "Leading Exporter of High-Quality Seafood & Tropical Fruits",
  defaultLanguage: "vi",
  supportedLanguages: ["en", "vi"],
};
