import { useAuthContext } from "@/hooks/auth/useAuthContext";
import { Link } from "react-router-dom";
import SmallSpinner from "./shared/SmallSpinner";
import { buttonVariants } from "./ui/button";
import UserAccountNav from "./UserAccountNav";
import { Separator } from "./ui/separator";

export default function UserStatus() {
  const { isAuthenticated, isLoading, user } = useAuthContext();
  if (isLoading) return <SmallSpinner />;

  return (
    <>
      {isAuthenticated ? (
        <UserAccountNav user={user} />
      ) : (
        <>
          <Link
            to="/login"
            className={buttonVariants({
              variant: "secondary",
            })}
          >
            Login
          </Link>
          <div className="hidden lg:flex space-x-6 h-full items-center">
            <Separator orientation="vertical" className="h-1/2" />
            <Link
              to="/sign-up"
              className={buttonVariants({
                variant: "default",
              })}
            >
              Sign up
            </Link>
          </div>
        </>
      )}
    </>
  );
}