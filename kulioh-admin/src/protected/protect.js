import { Navigate } from "react-router-dom";
export default function Protected(props) {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    return <Navigate to={"/login"} />;
  }
  return props.children;
}
