import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const ProtectedRoute = () => {
  const authData = useAuth();
  console.log(authData?.tokens.accessToken);
  return authData ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;