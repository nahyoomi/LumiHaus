/**
 * Validates email and password credentials.
 * @param email - The email address to validate.
 * @param password - The password to validate.
 * @returns An error message string if validation fails, otherwise null.
 */
export function validateCredentials(email: string, password: string): string | null {
    if (!email || !password) return "Please enter your email and password";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? null : "Please enter a valid email address";
}