import constants from "./constants";
const api = constants.api + "auth/";

export async function login(body: object) {
  const res = await fetch(api + "login", {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error((await res.json()).message);
  }

  return res.json();
}

export async function signup(body: object) {
  const res = await fetch(api + "signup", {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error((await res.json()).message);
  }

  return res.json();
}

export async function logout() {
  const res = await fetch(api + "logout", {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error((await res.json()).message);
  }

  return res.json();
}

export async function forgotPass(email: object) {
  const res = await fetch(api + "forgot-password", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error((await res.json()).message);
  }

  return res.json();
}

export async function changePass() {}
export async function verifyAccount() {}
export async function resetPassword() {}
