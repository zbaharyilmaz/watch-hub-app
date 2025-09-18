/**
 * Application constants
 */

export const APP_CONFIG = {
  name: "Watch Hub",
  description: "Your Ultimate Entertainment Hub",
  version: "1.0.0",
  author: "Watch Hub Team",
};

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  DASHBOARD: "/dashboard",
  FAVORITES: "/favorites",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
};

export const API_ENDPOINTS = {
  MOVIES: "/api/movies",
  USERS: "/api/users",
  FAVORITES: "/api/favorites",
};

export const THEME = {
  COLORS: {
    PRIMARY: "amber-500",
    SECONDARY: "blue-500",
    SUCCESS: "green-500",
    WARNING: "yellow-500",
    ERROR: "red-500",
  },
  BREAKPOINTS: {
    SM: "640px",
    MD: "768px",
    LG: "1024px",
    XL: "1280px",
  },
};

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
};

export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
};
