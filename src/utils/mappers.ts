/**
 * Transforms the selected filter into the corresponding category ID.
 * @param selectedFilter - The selected filter, for example 'new', 'trendy', or 'sales'.
 * @returns The category ID or undefined if no match is found.
 */
export const mapFilterToCategoryId = (selectedFilter: string): number | undefined => {
    const filterMap: Record<string, number> = {
      new: 1,
      trendy: 2,
      sales: 3,
    };
  
    return filterMap[selectedFilter];
};