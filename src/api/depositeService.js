const API_URL = import.meta.env.VITE_API_URL;

export const getAllCoins = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await fetch(`${API_URL}/api/deposit/get-all-coins`, {
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

  const balance = await response.json();
  return balance;
};

export const submitDeposit = async (formData) => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    const response = await fetch(`${API_URL}/api/deposit/submit-deposit?userName=${user.username}`, {
      method: "POST",
      headers: {
        Authorization: `${user.tokenType} ${user.accessToken}`,
      },
      body: formData,
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Failed to submit deposit.");
    }
  
    return await response.json();
  };

  export const getUserHistoricalDeposits = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    const response = await fetch(`${API_URL}/api/deposit/get-historical-deposits?userName=${user.username}`, {
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
  
