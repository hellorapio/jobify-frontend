import constants from "./constants";
const api = constants.api + "users/";

export async function getCurrentUser() {
  const res = await fetch(api + "me", {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token") || "",
    },
  });

  if (!res.ok) {
    throw new Error((await res.json()).message);
  }

  return res.json();
}
