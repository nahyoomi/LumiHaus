import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-custom-blue mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-custom-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-custom-blue text-white rounded-full font-medium"
        >
          Return to Home
        </button>
      </div>
    </Layout>
  );
};

export default NotFound;