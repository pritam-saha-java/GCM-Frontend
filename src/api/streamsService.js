const API_URL = import.meta.env.VITE_API_URL;

// ✅ Get all streams for the selected project
export const getStreamsByProject = async () => {
  const project = localStorage.getItem("selectedProject");

  if (!project) {
    throw new Error("No project selected in local storage");
  }

  const projectId = JSON.parse(project).id;

  const response = await fetch(`${API_URL}/api/streams/${projectId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch streams.");
  }

  return await response.json();
};

// ✅ Get a specific stream by ID
export const getStreamById = async (streamId) => {
  const response = await fetch(`${API_URL}/api/streams/${streamId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch stream.");
  }

  return await response.json();
};

// ✅ Get only live streams
export const getLiveStreams = async () => {
  const response = await fetch(`${API_URL}/api/streams/live`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch live streams.");
  }

  return await response.json();
};
