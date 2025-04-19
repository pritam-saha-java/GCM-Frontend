const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (formData) => {    
  try {
    const response = await fetch(`${API_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        countryCode: formData.countryCode,
        password: formData.password,
        paymentPassword: formData.paymentPassword,
        referralCode: formData.referralCode,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.message || "Registration failed.");
    }

    return { success: true, message: data.message || "Registered successfully!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
