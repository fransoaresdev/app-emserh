import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import { FormControl,Button,TextArea,Text,Divider,Input, Stack, WarningOutlineIcon, Box, Select } from "native-base";

export default function Ouvidoria() {

  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
<Box p={15}> 
      <Box>
        <Text fontSize="lg" >Ouvidoria</Text>
        <Divider my="2"/>
      </Box>
      <Box w="100%">
        <FormControl isRequired>
          <Stack mx="1">
            <FormControl.Label>Nome</FormControl.Label>
            <Input type="text" />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo requerido
            </FormControl.ErrorMessage>


            <FormControl.Label>E-mail</FormControl.Label>
            <Input type="text" />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo requerido
            </FormControl.ErrorMessage>
            

            <FormControl.Label>Mensagem</FormControl.Label>
            <TextArea h={20} placeholder="Sua mensagem" w="100%" />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Campo requerido
            </FormControl.ErrorMessage>
          </Stack>
          <Box alignItems="center" mt={3}>
              <Button w="100%" onPress={() => console.log("hello world")}>Enviar</Button>
            </Box>
        </FormControl>
      </Box>
      <Box>
        <Text fontSize="sm" bold mt={7}>Localização</Text>
        <Text fontSize="sm" mb={3} >
        Endereço: Av. Borborema, 25, qd 16, Calhau CEP: 65071-360 – São Luís/MA 
        </Text>
        <Text fontSize="sm" bold>Horário de atendimento e contatos</Text>
        <Text fontSize="sm" mb={3}>
        Segunda a sexta-feira, das 8h às 12h e 14h às 18h.
        E-mail: ouvidoria@emserh.ma.gov.br
        </Text>
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

