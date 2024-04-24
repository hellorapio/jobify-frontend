import { IUser } from "@/types";

export type ReducerActionAuth = { type: "login" } | { type: "logout" };

export type ReducerStateAuth = {
  user: IUser | null;
  isAuthenticated: boolean;
};
