import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ styles }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

export default Button;
