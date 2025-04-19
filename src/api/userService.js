const API_URL = import.meta.env.VITE_API_URL;

export const getUserBalance = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${API_URL}/api/user/get-balance?userName=${user.username}`, {
    method: "GET",
    headers: {
      Authorization: `${user.tokenType} ${user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch balance.");
  }

  const balance = await response.json();
  return balance;
};
