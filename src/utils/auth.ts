/**
 * Authentication utility functions
 */

/**
 * Clears all user authentication data from localStorage and cookies
 */
export const clearUserAuth = (): void => {
  // Clear access token from localStorage
  localStorage.removeItem('accessToken');
  // Clear username from localStorage
  localStorage.removeItem('username');
  // Clear access token from cookies
  document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

/**
 * Stores user authentication data in localStorage and cookies
 */
export const storeUserAuth = (token: string, username: string): void => {
  // Store in localStorage for client-side checks
  localStorage.setItem('accessToken', token);
  localStorage.setItem('username', username);
  
  // Store in cookies for middleware
  document.cookie = `accessToken=${token}; path=/`;
}; 