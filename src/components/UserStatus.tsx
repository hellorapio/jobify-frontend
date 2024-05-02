import { useAuthContext } from "@/hooks/auth/useAuthContext";
import { Link } from "react-router-dom";
import SmallSpinner from "./shared/SmallSpinner";
import { Button, buttonVariants } from "./ui/button";
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
          <Button
            asChild
            className={buttonVariants({
              variant: "secondary",
            })}
          >
            <Link to="/login">Login</Link>
          </Button>
          <div className="hidden lg:flex space-x-6 h-full items-center">
            <Separator orientation="vertical" className="h-1/2" />
            <Button
              asChild
              className={buttonVariants({
                variant: "default",
              })}
            >
              <Link to="/sign-up">Sign up</Link>
            </Button>
          </div>
        </>
      )}
    </>
  );
}
