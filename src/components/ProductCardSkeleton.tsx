const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white shadow rounded overflow-hidden animate-pulse">
      <div className="w-full h-[312px] bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;