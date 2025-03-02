export interface SearchFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onSearch: (query: string) => void;
}
