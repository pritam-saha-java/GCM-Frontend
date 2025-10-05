const API_URL = import.meta.env.VITE_API_URL;

export const getMembers = async () => {
  const project = localStorage.getItem("selectedProject");
  
  if (!project) {
    throw new Error("No project selected in local storage");
  }
  const projectId = JSON.parse(project).id;

  const response = await fetch(`${API_URL}/api/members/project/${projectId}`, {
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
