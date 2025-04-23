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

export const changeLoginPassword = async (oldPassword, newPassword) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${API_URL}/api/user/change-login-password`, {
    method: "PUT",
    headers: {
      Authorization: `${user.tokenType} ${user.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.username,
      oldPassword,
      newPassword,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to change login password.");
  }

  const result = await response.json();
  return result;
};

export const changePaymentPassword = async (oldPassword, newPassword) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${API_URL}/api/user/change-payment-password`, {
    method: "PUT",
    headers: {
      Authorization: `${user.tokenType} ${user.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.username,
      oldPassword,
      newPassword,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to change payment password.");
  }

  const result = await response.json();
  return result;
};

export const getUserTransactions = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(
    `${API_URL}/api/user/transactions?username=${user.username}`,
    {
      method: "GET",
      headers: {
        Authorization: `${user.tokenType} ${user.accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch transaction history.");
  }

  return await response.json();
};

export const getUserMessages = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(
    `${API_URL}/api/user/get-messages?username=${user.username}`,
    {
      method: "GET",
      headers: {
        Authorization: `${user.tokenType} ${user.accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch messages.");
  }

  return await response.json();
};

export const getUserStats = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(
    `${API_URL}/api/user/user-dashboard?username=${user.username}`,
    {
      method: "GET",
      headers: {
        Authorization: `${user.tokenType} ${user.accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch.");
  }

  return await response.json();
};


