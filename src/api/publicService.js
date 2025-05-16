const API_URL = import.meta.env.VITE_API_URL;

export const getAllMiningPackages = async () => {

  const response = await fetch(`${API_URL}/api/public/all-packages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch mining packages.");
  }

  return await response.json();
};