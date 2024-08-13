import React,{createContext, useState,useEffect} from 'react';
import axios from 'axios'; 
import Config from "../util/Config";

export const AuthContext  = createContext({});

export function AuthContextProvider({children}) {
 

     function loginContext(data){
      return("Uso contexto");  
     }



    return(
        <AuthContext.Provider value={{loginContext}}>
            {children}
        </AuthContext.Provider>
    );


}