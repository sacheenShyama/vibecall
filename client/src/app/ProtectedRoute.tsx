import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute=()=>{
const isAuthenticated=true;
// const {isAuthenticated}=useAuth();

return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default ProtectedRoute;