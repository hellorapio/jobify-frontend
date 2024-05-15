import constants from "../constants";
const api = constants.api + "notifications/";

export async function readNotification() {
  const res = await fetch(api, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token") || "",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data.data;
}
