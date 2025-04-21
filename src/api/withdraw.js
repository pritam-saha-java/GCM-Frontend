const API_URL = import.meta.env.VITE_API_URL;

export const getWithdrawMethods = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${API_URL}/api/withdraw/get-withdraw-method?userName=${user.username}`, {
    method: "GET",
    headers: {
      Authorization: `${user.tokenType} ${user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to fetch withdraw methods.");
  }

  return await response.json();
};

export const submitWithdraw = async (formData) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${API_URL}/api/withdraw/submit-withdraw?userName=${user.username}`, {
    method: "POST",
    headers: {
      Authorization: `${user.tokenType} ${user.accessToken}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to submit withdrawal.");
  }

  return await response.json();
};

export const getUserHistoricalWithdraws = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    const response = await fetch(`${API_URL}/api/withdraw/get-historical-withdraws?userName=${user.username}`, {
      method: "GET",
      headers: {
        Authorization: `${user.tokenType} ${user.accessToken}`,
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to fetch data.");
    }
  
    const data = await response.json();
    return data;
  };

