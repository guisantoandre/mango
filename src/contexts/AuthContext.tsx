import React from "react";
import { User } from "firebase/auth";

type AuthContextType = {
   user: User | null;
   setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = React.createContext<AuthContextType>({
   user: null,
   setUser: () => null,
});

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
   const [user, setUser] = React.useState<User | null>(null);

   return (
      <AuthContext.Provider value={{ user, setUser }}>
         {children}
      </AuthContext.Provider>
   );
};
