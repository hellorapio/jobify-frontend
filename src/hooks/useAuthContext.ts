import { createContext, useContext } from "react";

export const AuthContext = createContext(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("You can't use Auth Context outside the Provider");
  return context;
}
