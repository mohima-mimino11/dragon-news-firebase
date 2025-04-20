import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(loading, user);
  
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
  // google sign in
  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  const githubSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }
  const authInfo = {
    user,
    setUser,
    createUser,
    logout,
    userLogin,
    loading,
    updateUserProfile,
    googleSignIn,
    githubSignIn
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