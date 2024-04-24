import toast from "react-hot-toast";
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
    toast.error((await res.json()).message, {
      duration: 6000,
    });
    return;
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
    toast.error((await res.json()).message, {
      duration: 6000,
    });
    return;
  }

  return res.json();
}

export async function forgotPass() {}
export async function changePass() {}
export async function verifyAccount() {}
export async function resetPassword() {}
