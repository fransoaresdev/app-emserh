import React  from 'react'
import {MaterialIcons} from "@expo/vector-icons";
import { VStack,Box, Heading,Button, Pressable,AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider,ScrollView } from "native-base";
import {
  StatusBar
} from 'react-native';


export default function Servidor({navigation}) {
  return (
    <ScrollView h="80">
      <VStack space="2.5" mt="4" px="8">
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>

        <Pressable size="24" bg="primary.400" rounded="sm">
     
         </Pressable>

         <Center size="24" bg="primary.400" rounded="sm" _text={{
            color: 'warmGray.50',
            fontWeight: 'medium'
          }} shadow={'3'}>
              Box 2
         </Center>
         
         <Center size="24" bg="primary.400" rounded="sm" _text={{
            color: 'warmGray.50',
            fontWeight: 'medium'
          }} shadow={'3'}>
              Box 2
         </Center>



        </Stack>
        {/* <Box>
          <Heading color={"amber.700"} >Servidor Painel</Heading>
          <Button onPress={() => navigation.navigate('Login')}>Fazer Login</Button>
        </Box> */}
      </VStack>
    </ScrollView>
  );
}
