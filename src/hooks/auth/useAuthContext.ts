import { ReducerActionAuth } from "@/contexts/types";
import { IUser } from "@/types";
import { Dispatch, createContext, useContext } from "react";

type AuthContextType = {
  isLoading: boolean;
  user: IUser | null;
  error: object | null;
  isAuthenticated: boolean;
  dispatch: Dispatch<ReducerActionAuth>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("You can't use Auth Context outside the Provider");
  return context;
}
