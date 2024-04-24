import { AuthContext } from "@/hooks/auth/useAuthContext";
import { useUser } from "@/hooks/auth/useUser";
import { useReducer } from "react";
import { ReducerActionAuth, ReducerStateAuth } from "./types";

type AuthProviderProps = {
  children: React.ReactNode;
};

function reducer(
  state: ReducerStateAuth,
  action: ReducerActionAuth
): typeof initialState {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true };
    case "logout":
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error("Unknown Type has been passed");
  }
}

const initialState: ReducerStateAuth = {
  user: null,
  isAuthenticated: false,
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [{ isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const { isLoading, user, error } = useUser();

  return (
    <AuthContext.Provider
      value={{ isLoading, user, error, isAuthenticated, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
}
