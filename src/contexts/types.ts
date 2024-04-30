export type ReducerActionAuth = { type: "login" } | { type: "logout" };

export type ReducerStateAuth = {
  isAuthenticated: boolean;
};
