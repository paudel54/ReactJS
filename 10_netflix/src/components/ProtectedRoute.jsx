import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function ProtectedRoute({ Children }) {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return Children;
  }
}

export default ProtectedRoute;
