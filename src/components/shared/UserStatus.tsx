import { useLogout } from "@/hooks/auth/hooks";
import { useAuthContext } from "@/hooks/auth/useAuthContext";
import { Link } from "react-router-dom";
import SmallSpinner from "./SmallSpinner";

export default function UserStatus() {
  const { isAuthenticated, isLoading } = useAuthContext();
  const { logout } = useLogout();

  if (isLoading) return <SmallSpinner />;

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}
