import React, { useState,useContext,useEffect } from 'react';
import {MaterialIcons} from "@expo/vector-icons";
import {CommonActions,useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../contexts/AuthProvider';
import { Box,Center,Heading,Input,FormControl,VStack,HStack,Icon,Button,Text,Spinner } from "native-base";
import {TouchableOpacity,StyleSheet} from 'react-native';

export default function Login() {

  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);
  const [entrar, setEntrar]  = useState(false);
  const [loading, setLoading]  = useState(false);
  const navigation = useNavigation();
  const{loginContext,logado,nomeUsuario} = useContext(AuthContext);


  async function fazerLogin(){
    setLoading(true);
    let data = { cpf:usuario,senha:senha}
    await loginContext(data)
    .then((response)=>{
      if (logado){
        setLoading(false);
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Servicos' }
              ],
            })
          );
      }
     }).catch((error) => {

     })

  }

  // useEffect(() => { 
  //   fazerLogin();
  // },[logado])

  return (
      <Center height={"full"}>
        <VStack width={"full"} p={5}>
          <Box>
            {!loading && logado &&(

            <HStack justifyContent="center">
              <Spinner size="lg" />
            </HStack>
            )}

            <Heading color={"amber.700"} >Entrar </Heading>
              <FormControl>
                <Input 
                  placeholder="Cpf" 
                  defaultValue=""
                  keyboardType="numeric"
                  maxLength={12}
                  minLength={12} 
                  value={usuario}
                  onChangeText={setUsuario}
                  fontSize={18}
                  InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" /> }
                    ml={2}
                  />
                  }
                />
                <Input 
                placeholder="Senha" mt={3}
                value={senha}
                type='password'
                onChangeText={setSenha}
                maxLength={20}
                fontSize={18}
                InputLeftElement={
                  <Icon
                  as={<MaterialIcons name="lock" /> }
                  ml={2}
                  />
                }
                />
              </FormControl>
              <Button mt={6} colorScheme={"amber"} onPress={fazerLogin}>Entrar</Button>
              
          </Box>
        <HStack mt={3}>
          <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>      
            <Text style={styles.esqueceuText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </HStack>
        </VStack>
        
      </Center>
      
  );
}


const styles = StyleSheet.create({

  full :{
    flex:1,
  },


  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  textInput :{
    width:350,
    height:60,
    marginTop:10,
    fontSize:20,
    borderWidth:1,
    borderRadius:7,
    borderColor:'#b6812f',
  },

  logo :{
    resizeMode:'contain',
    width:200,
    height:180,
  },

  botao :{
    justifyContent:'center',
    marginTop:15,
    padding:10,
    height:60,
    width:350,
    borderRadius:5,
    borderEndWidth:0,
    backgroundColor:'#21405e',
  },

  botaoText:{
    color:'#fff',
    textAlign:'center',
    fontSize:20
  },

  esqueceuText:{
    color:'#21405e',
    padding:15,
    fontSize:16,
  },

  imageBackground: {
    flex: 1,
    padding:0,
    resizeMode:"cover",
    justifyContent: "center",
    alignItems: "center"
  }

});
