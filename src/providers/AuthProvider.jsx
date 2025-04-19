import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(loading, user);
  
  // signup function
  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // sign out function
  const logout = () =>{
    setLoading(true);
    return signOut(auth);
  }
  //  signIn function
  const userLogin = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  // profile update function
  const updateUserProfile = (updatedData) =>{
    return updateProfile(auth.currentUser, updatedData);
  }
  const authInfo = {
    user,
    setUser,
    createUser,
    logout,
    userLogin,
    loading,
    updateUserProfile
  }
  // user state observer
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      setLoading(false);
    })
    // unmount or cleanup 
    return ()=>{
      unsubscribe();
    }
  },[])
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;