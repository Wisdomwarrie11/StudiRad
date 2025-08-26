import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const VerificationPage = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/verify-otp', {
        emailOrPhone,
        otp,
      });

      Swal.fire({
        title: 'Verification Successful!',
        text: 'You can now log in.',
        icon: 'success',
        confirmButtonText: 'Proceed to Login',
      }).then(() => {
        window.location.href = '/login'; 
      });
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        title: 'Error!',
        text: error.response ? error.response.data.msg : 'An error occurred. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div className="container mt-5 verification">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center mb-4">Verify Your OTP</h3>

          <form onSubmit={handleSubmit} className="shadow p-4 rounded form">
            <div className="mb-3">
              <label htmlFor="emailOrPhone" className="form-label">Email or Phone</label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                className="form-control"
                placeholder="Enter your email or phone number"
                required
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="otp" className="form-label">OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter the OTP"
                required
              />
            </div>

            <button type="submit" className="btn w-100" disabled={isLoading}>
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
