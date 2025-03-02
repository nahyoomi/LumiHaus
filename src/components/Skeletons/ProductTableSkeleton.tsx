const ProductTableSkeleton: React.FC = () => {
    return (
        <div className="animate-pulse flex flex-col gap-4 p-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="h-[96px] bg-gray-200 rounded"></div>
        ))}
      </div>
    );
};

export default ProductTableSkeleton;