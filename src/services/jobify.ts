const api = "https://jobify-vo21.onrender.com/api/v1/";

export async function notifications() {
  const res = await fetch(api + "notifications");
  return await res.json();
}
