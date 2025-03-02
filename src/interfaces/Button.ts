export interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: 'text' | 'outlined' | 'tonal';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export interface FilterButtonProps {
  label: string;
  filter: string;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}