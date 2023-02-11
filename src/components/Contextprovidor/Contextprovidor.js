import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext } from 'react';
import { app } from '../firebase/firebase';

export const Authcontext = createContext()


const auth = getAuth(app);

const Contextprovidor = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    function signup(email,password){
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    function login(email,password){
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
              
                setuser(currentuser);
                setloading(false);
        })
  
              return () => unsubscribe();
            
      },[])

      function updateUserProfile (name){
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

      const userInfo = {
        user,
        loading,
        signup,
        login,
        updateUserProfile
      }

    return (
        <Authcontext.Provider value={userInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Contextprovidor;