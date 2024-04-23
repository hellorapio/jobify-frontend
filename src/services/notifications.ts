import constants from "@/services/constants";

export async function notifications() {
  const res = await fetch(constants.api + "notifications");
  return await res.json();
}
