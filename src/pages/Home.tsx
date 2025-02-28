import { useState } from "react";
import { Images } from "../assets";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import SearchFilter from "../components/SearchFilter";
import ImageGrid from "../components/ImageGrid";
import { mapFilterToCategoryId } from "../utils/mappers";


const Home = () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleFilterChange = (filter: string) => {
      setSelectedFilter(filter);
    };
  
    const handleSearch = (query: string) => {
      setSearchQuery(query);
    };
    
    const categoryId = mapFilterToCategoryId(selectedFilter);

    return (
        <Layout>
            <Banner 
                image={Images.Banner.src}
                title="Winter Comfort, Timeless Design"
                subtitle="Discover Our Winter Furniture Collection"
                description="Transform your space with pieces designed for warmth and style this season."
            />
            <div className="px-20 py-20">
                <SearchFilter 
                    selectedFilter={selectedFilter}
                    onFilterChange={handleFilterChange}
                    onSearch={handleSearch}
                />
                <ProductGrid 
                    categoryId={categoryId}
                    searchQuery={searchQuery}
                />
            </div>
            <ImageGrid />
        </Layout>
    )
};

export default Home;