import React,{createContext,useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import{NavigationActions, CommonActions,useNavigation} from '@react-navigation/native';
import { Alert } from 'react-native';
import axios from 'axios'; 
import Config from "../util/Config";


export const AuthContext = createContext({});

function AuthProvider ({ children }){

  const [logado,setLogado] = useState(false);
  const [nomeUsuario,setNomeUsuario] = useState("");
 

  async function loginContext(data){
    
    return axios({
        url: Config.API_URL +"/auth/login",
        method: "POST",
        timeout: Config.TIMEOUT_REQUEST,
        data: data,
        headers: Config.HEADER_REQUEST
    }).then((response) => {
      
      const dataResponse = response.data;

      if (dataResponse.stts == 0){
        Alert.alert("Alerta",dataResponse.msg);
        return;
      }else{
        AsyncStorage.setItem("@user", JSON.stringify(dataResponse.usuario));
        const nomeCompleto  = dataResponse.usuario.USUA_nome;
        const nomeCompletoSplit = nomeCompleto.split(" ");
        setNomeUsuario(nomeCompletoSplit[0]);
        setLogado(true);
      }

    }).catch((error) => {

      Alert.alert("Alerta","Não foi possível conectar ao servidor!");
      return;
        
    })
}



  return (
    <AuthContext.Provider value={{ loginContext,logado,nomeUsuario}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


