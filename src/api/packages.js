const API_URL = import.meta.env.VITE_API_URL;

export const getAllMiningPackages = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${API_URL}/api/packages/get-all`, {
    method: "GET",
    headers: {
      Authorization: `${user.tokenType} ${user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch mining packages.");
  }

  return await response.json();
};

export const purchasePackage = async ({ packageId, quantity, paymentPassword }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const params = new URLSearchParams({
    userName: user.username,
    packageId,
    quantity,
    paymentPassword,
  });

  const response = await fetch(`${API_URL}/api/packages/purchase-package?${params.toString()}`, {
    method: "GET",
    headers: {
      Authorization: `${user.tokenType} ${user.accessToken}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.Error || "Failed to complete the purchase.");
  }

  return data;
};

export const getUserPackages = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${API_URL}/api/packages/get-user-packages?userName=${user.username}`, {
    method: "GET",
    headers: {
      Authorization: `${user.tokenType} ${user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch.");
  }

  return await response.json();
};

