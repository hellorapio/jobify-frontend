import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/auth";
import { ReducerActionAuth } from "@/contexts/types";
import { Dispatch } from "react";

export function useUser(dispatch: Dispatch<ReducerActionAuth>) {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, error };
}
