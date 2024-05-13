import { useAuthContext } from "@/hooks/auth/useAuthContext";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import SmallSpinner from "../shared/SmallSpinner";

export default function UserAccBtn() {
  const { isAuthenticated, isLoading } = useAuthContext();
  return (
    <Button variant="secondary" asChild>
      <Link to={isAuthenticated ? "/dashboard" : "sign-up"}>
        {isLoading ? (
          <SmallSpinner />
        ) : isAuthenticated ? (
          "View Your Account"
        ) : (
          "Don't have an account ?"
        )}
      </Link>
    </Button>
  );
}
