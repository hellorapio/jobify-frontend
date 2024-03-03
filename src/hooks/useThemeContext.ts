import { createContext, useContext } from "react";

export const ThemeContext = createContext(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("You can't use Auth Context outside the Provider");
  return context;
}
