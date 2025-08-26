import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/verify-otp', {
        emailOrPhone,
        otp,
      });

      if (res.status === 200) {
        alert(res.data.msg);
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.msg || 'Something went wrong');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Verify Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or Phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
