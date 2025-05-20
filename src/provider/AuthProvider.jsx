import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const provider = new GoogleAuthProvider();

  const updateUser = (userData) => {
    return updateProfile(auth.currentUser, userData);
  };

  const googleLogIn = () => {
    return signInWithPopup(auth, provider);
  };

  const logInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    createUser,
    updateUser,
    user,
    setUser,
    googleLogIn,
    logInUser
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
