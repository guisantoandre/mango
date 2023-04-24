import React from "react";
import * as C from "./styles";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";

import { FcGoogle } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";

const GoogleAuthButton = () => {
   const { user, setUser } = useAuth();
   const [showModalUser, setShowModalUser] = React.useState(false);

   React.useEffect(() => {
      const isLogged = auth.onAuthStateChanged((user) => {
         if (user) {
            setUser(user);
         } else {
            setUser(null);
         }
      });
      return isLogged;
   }, []);

   const signInWithGoogle = async () => {
      try {
         const provider = new GoogleAuthProvider();
         await signInWithPopup(auth, provider);
      } catch (err) {
         console.log(err);
      }
   };

   const logout = async () => {
      try {
         await signOut(auth);
         location.reload();
      } catch (err) {
         console.log(err);
      }
   };

   const toggleModalUser = (event: React.MouseEvent<HTMLImageElement>) => {
      event.stopPropagation();
      setShowModalUser(!showModalUser);
      event.currentTarget.classList.toggle("modalUserActive");
   };

   return (
      <>
         {user === null ? (
            <C.ButtonSignIn onClick={signInWithGoogle}>
               <FcGoogle />
               Entrar com Google
            </C.ButtonSignIn>
         ) : (
            <C.UserArea>
               {user.photoURL && (
                  <img
                     src={user.photoURL}
                     referrerPolicy="no-referrer"
                     alt="Foto do usuário"
                     onClick={toggleModalUser}
                  />
               )}
               {showModalUser && (
                  <C.ModalUserContainer className="slideTop">
                     <div className="userInfo">
                        {user.photoURL && (
                           <img
                              className="avatar"
                              src={user.photoURL}
                              alt="Foto usuário"
                           />
                        )}
                        <div className="userName">
                           <p className="displayName">{user.displayName}</p>
                           <p className="email">{user.email}</p>
                        </div>
                     </div>
                     <span onClick={logout}>
                        <FiLogOut />
                        Sair
                     </span>
                  </C.ModalUserContainer>
               )}
            </C.UserArea>
         )}
      </>
   );
};

export default GoogleAuthButton;
