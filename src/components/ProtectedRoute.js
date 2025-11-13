import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists() && userDoc.data().verified) {
          setUser({ uid: currentUser.uid, ...userDoc.data() });
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setChecking(false);
    });
    return () => unsubscribe();
  }, []);

  if (checking) return <p style={{ textAlign: "center" }}>Checking user...</p>;

  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
