export const extractErrorMessage = (error: any, defaultMsg: string): string => {
    const duplicateIndicator = "UNIQUE constraint failed: product.slug";
    if (error.response?.data?.message?.includes(duplicateIndicator)) {
      return "Product already exists.";
    }
    return defaultMsg;
};