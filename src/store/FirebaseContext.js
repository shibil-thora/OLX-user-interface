import { createContext } from "react"; 
import { useState } from "react";
export const FirebaseContext = createContext(null); 
export const AuthContext = createContext(null); 

function Context({children}) {
    const [user, setUser] = useState('hello') 
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default Context
