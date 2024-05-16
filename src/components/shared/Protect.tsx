import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "@/hooks/auth/useAuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
  role?: string;
};

export default function ProtectedRoute({
  children,
  role,
}: ProtectedRouteProps) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, user } = useAuthContext();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
      if (role) {
        if (user?.role !== role) navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate, role, user?.role]
  );

  if (isLoading) return <Spinner />;

  if (isAuthenticated) {
    if (role) {
      if (user?.role === role) {
        return children;
      }
    } else {
      return children;
    }
  }
}
