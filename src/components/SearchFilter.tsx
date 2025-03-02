import SearchIcon from "../assets/icons/Search.svg";
import { SearchFilterProps } from "../interfaces/SearchFilter";
import FilterButton from "./FilterButton";

const SearchFilter: React.FC<SearchFilterProps> = ({
  selectedFilter,
  onFilterChange,
  onSearch,
}) => {
  return (
    <section aria-label="Product Filters" className="mb-8 px-4">
      <h2 className="font-semibold text-[32px] leading-[40px] text-custom-dark pb-1">
        Our Products
      </h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex gap-4">
          <FilterButton
            label="New"
            filter="new"
            selectedFilter={selectedFilter}
            onFilterChange={onFilterChange}
          />
          <FilterButton
            label="Trendy"
            filter="trendy"
            selectedFilter={selectedFilter}
            onFilterChange={onFilterChange}
          />
          <FilterButton
            label="Sales"
            filter="sales"
            selectedFilter={selectedFilter}
            onFilterChange={onFilterChange}
          />
        </div>
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            aria-label="Search products"
            placeholder="Search a product"
            className="w-full px-4 py-2 border border-custom-gray rounded pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-custom-gray">
            <img src={SearchIcon} alt="Search Icon" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
