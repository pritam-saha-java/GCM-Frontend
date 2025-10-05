const API_URL = import.meta.env.VITE_API_URL;

export const getAllProjects = async () => {

  const response = await fetch(`${API_URL}/api/projects/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch.");
  }

  return await response.json();
};