import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRoutesProps {
    children: React.ReactElement;
}

const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoutes;