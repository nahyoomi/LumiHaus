/**
 * Extracts a meaningful error message from an API error object.
 *
 * This helper checks if the error message indicates a duplicate product error
 * (as determined by the unique constraint for "product.slug"). If this specific
 * error is detected, it returns a custom message. Otherwise, it returns the provided default message.
 *
 * @param error - The error object returned from an API call.
 * @param defaultMsg - A default error message to use when no specific error is detected.
 * @returns The custom error message if a duplicate is found, or the default message.
 */
export const extractErrorMessage = (error: any, defaultMsg: string): string => {
  const duplicateIndicator = "UNIQUE constraint failed: product.slug";
  if (error.response?.data?.message?.includes(duplicateIndicator)) {
    return "Product already exists.";
  }
  return defaultMsg;
};
