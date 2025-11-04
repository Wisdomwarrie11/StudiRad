import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { adminAuth } from "../firebaseAdmin";

const AdminProtectedRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(adminAuth, (user) => {
      setAuthenticated(!!user);
      setChecking(false);
    });
    return () => unsubscribe();
  }, []);

  if (checking) return null;
  return authenticated ? children : <Navigate to="/adminlogin" />;
};

export default AdminProtectedRoute;
