import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import { FormControl,Button,TextArea,Icon,Text,Divider, Input, Stack, WarningOutlineIcon, Box, Center, NativeBaseProvider } from "native-base";

export default function Processo() {

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(false);

  return (

  <Box  p={15}> 
        <Box>
          <Text fontSize="lg">Pesquisa por processos</Text>
          <Divider my="2"/>
        </Box>
        <Box w="100%" alignItems="center">
        <Stack direction="row" mb="2.5" mt="1.5">
           <Box w="60%">
            <FormControl isRequired>
              <FormControl.Label>Número</FormControl.Label>
              <Input type="text" size="md" placeholder="Número" w="100%"/>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Campo requerido
                </FormControl.ErrorMessage>
              </FormControl>
           </Box>

           <Box pt={10}  alignItems="center" w="10%">
           <Text fontSize="xl">/</Text>
           </Box>

           <Box w="30%">
            <FormControl isRequired>
              <FormControl.Label>Ano</FormControl.Label>
              <Input type="text" size="md" placeholder="Ano" w="100%"/>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Campo requerido
                </FormControl.ErrorMessage>
              </FormControl>
           </Box>
          </Stack>
          <Stack direction="row" mb="2.5" mt="1.5">
            <Box w="100%">
              <Button onPress={() => console.log("hello world")} w="100%" leftIcon={<Icon  as={<MaterialIcons name="search" size={"lg"} /> } />}>
                Pesquisar
              </Button>
            </Box>
          </Stack>
        </Box>
  </Box>
  );
}

const styles = StyleSheet.create({

  h2 : {
    fontSize : 15,
    fontWeight:'bold'
  },


  card : {
    fontSize : 15,
    color : "#008AC4",
    backgroundColor:'#fff',
    marginBottom:30,
    borderRadius:5,
  },


  cardTitle : {
    fontSize : 17,
    fontWeight:'bold',
    lineHeight:23,
    color : "#008AC4",
    padding:10
  },

  button : {
    margin : 20,
    width:200,
  },
  
  input: {
    flex: 1,
    justifyContent:'center',
    height: 40,
    backgroundColor: '#27B3C8',
    width:"97%",
    marginLeft:7,
    marginBottom:15,
    borderRadius: 5,
    borderWidth:1,
    borderColor:"#fff",
    fontSize: 19,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#FFFFFF',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },

});

