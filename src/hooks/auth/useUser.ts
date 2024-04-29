import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/me";

export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });

  return { isLoading, user, error };
}
