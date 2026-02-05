import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRedux = ({ requiredRole }) => {
    const user = useSelector((state) => state.auth.user);

    if (!user) return <Navigate to="/login" replace />;
    if (requiredRole && user.role !== requiredRole)
        return <Navigate to="/" replace />;

    return <Outlet />;
};

export default ProtectedRedux;
