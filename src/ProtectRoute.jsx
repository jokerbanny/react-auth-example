import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  //   const user = {logIn: false}
  const user = localStorage.getItem("token");
  return user && user.loggIn;
};

function ProtectRoute() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectRoute;
