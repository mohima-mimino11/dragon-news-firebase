import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  console.log(user);
  
  // signup function
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // sign out function
  const logout = () =>{
    return signOut(auth);
  }
  //  signIn function
  const userLogin = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const authInfo = {
    user,
    setUser,
    createUser,
    logout,
    userLogin
  }
  // user state observer
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
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