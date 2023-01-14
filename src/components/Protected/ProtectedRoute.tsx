import { Navigate } from "react-router-dom";

const Protected = ({ children }: { children: JSX.Element }) => {
  const token:string | null = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};
export default Protected;
