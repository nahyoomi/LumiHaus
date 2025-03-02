import { FilterButtonProps } from "../interfaces/Button";

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  filter,
  selectedFilter,
  onFilterChange,
}) => {
  const baseClasses = "font-medium text-[16px] leading-[24px] p-[12px]";
  const colorClass =
    selectedFilter === filter ? "text-custom-blue" : "text-custom-dark";
  return (
    <button
      onClick={() => onFilterChange(filter)}
      className={`${baseClasses} ${colorClass}`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
