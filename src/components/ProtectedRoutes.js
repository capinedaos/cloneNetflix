import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  
  const user = "cesar";

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
