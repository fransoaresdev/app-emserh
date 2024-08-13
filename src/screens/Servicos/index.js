import React,{useContext} from "react"
import {MaterialIcons} from "@expo/vector-icons";
import {AuthContext} from '../../contexts/AuthProvider';
import { Flex,VStack,Box, Heading,Button,Divider,Icon, Pressable,AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider,ScrollView } from "native-base";
import {StatusBar} from 'react-native';


export default function Servicos({navigation}) {

  const{logado} = useContext(AuthContext);

  return (
    <Box flex="1" >
    <ScrollView safeAreaTop>
      <Box p={3}>
        <Text fontSize="lg">Serviços disponíveis</Text>
        <Divider my="1"/>
      </Box>
      <VStack space={2.5} w="100%" p={3}>

      <Flex direction="row" mt={-2}>

          <Center  w="48%" m={1} bg="primary.600" borderRadius="lg">
            <Button h={20} leftIcon={<Icon  as={<MaterialIcons name="find-in-page" /> } />} w="100%" onPress={() => navigation.navigate('Processo')}>Processos</Button>
          </Center>

          <Center  w="48%" m={1} bg="primary.600" borderRadius="lg">
            <Button h={20}  leftIcon={<Icon  as={<MaterialIcons name="speaker-notes" /> } />} w="100%" onPress={() => navigation.navigate('Seletivo')}>Seletivos</Button>
          </Center>

        </Flex>

        <Flex direction="row" mt={-2}>
          <Center  w="48%" m={1} bg="primary.600" borderRadius="lg">
            <Button h={20} leftIcon={<Icon  as={<MaterialIcons name="domain" /> } />} w="100%" onPress={() => navigation.navigate('Noticias')}>Notícias</Button>
          </Center>
          <Center  w="48%" m={1} bg="primary.600" borderRadius="lg">
            <Button h={20} leftIcon={<Icon  as={<MaterialIcons name="record-voice-over" /> } />} w="100%" onPress={() => navigation.navigate('Ouvidoria')}>Ouvidoria</Button>
          </Center>
        </Flex>

        <Flex direction="row" mt={-2}>

          {logado==false && (
            <Center  w="48%" m={1} bg="primary.600" borderRadius="lg">
              <Button h={20} leftIcon={<Icon  as={<MaterialIcons name="login" /> } />} w="100%" onPress={() => navigation.navigate('Login')}>Login</Button>
            </Center>            
          )}

        {logado==false && (
          <Center  w="48%" m={1} bg="primary.600" borderRadius="lg">
            <Button h={20} leftIcon={<Icon  as={<MaterialIcons name="list-alt" size={"lg"} /> } />} w="100%" onPress={() => navigation.navigate('Contracheque')}>Contracheque</Button>
          </Center>
         )}

        </Flex>

      </VStack>
    </ScrollView>
    </Box>
  );
}