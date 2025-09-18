/**
 * Validation utilities
 */

import { VALIDATION } from "@/config/constants";

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export function isValidEmail(email) {
  return VALIDATION.EMAIL_REGEX.test(email);
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} Validation result with isValid and errors
 */
export function validatePassword(password) {
  const errors = [];

  if (password.length < VALIDATION.PASSWORD_MIN_LENGTH) {
    errors.push(
      `Password must be at least ${VALIDATION.PASSWORD_MIN_LENGTH} characters long`
    );
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }

  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one number");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password must contain at least one special character");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate username
 * @param {string} username - Username to validate
 * @returns {Object} Validation result with isValid and errors
 */
export function validateUsername(username) {
  const errors = [];

  if (username.length < VALIDATION.USERNAME_MIN_LENGTH) {
    errors.push(
      `Username must be at least ${VALIDATION.USERNAME_MIN_LENGTH} characters long`
    );
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errors.push("Username can only contain letters, numbers, and underscores");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate movie rating
 * @param {number} rating - Rating to validate
 * @returns {boolean} Is valid rating
 */
export function isValidRating(rating) {
  return typeof rating === "number" && rating >= 0 && rating <= 10;
}

/**
 * Sanitize string input
 * @param {string} input - Input to sanitize
 * @returns {string} Sanitized input
 */
export function sanitizeInput(input) {
  if (typeof input !== "string") return "";

  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .substring(0, 1000); // Limit length
}
