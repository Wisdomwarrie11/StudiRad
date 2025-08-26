// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/login', formData, {
        withCredentials: true, 
      });

      if (res.data.success) {
        navigate('/dashboard'); 
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Something went wrong. Try again.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Login to StudiRad</h2>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

      <div className="mb-3">
      <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required 
          />
          <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                  style={{
                    width: '40px',
                    marginTop: '9px',
                    marginBottom: '9px',
                    padding: '0',
                    backgroundColor : 'white'
                  }}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
      </div>

          <button type="submit" style={styles.button}>Login</button>
        </form>

        <p style={styles.note}>
          New here? <a href="/register">Create an account</a>
        </p>
      </div>
    </div>
  );
}

// Simple inline styles
const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f4f8',
  },
  container: {
    background: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    textAlign: 'center',
    color: '#2e8b57',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    background: '#2e8b57',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '18px',
    cursor: 'pointer',
  },
  note: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: '#777',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '15px',
  },
};
