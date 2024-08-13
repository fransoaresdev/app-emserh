import {MaterialIcons} from "@expo/vector-icons";
import { View,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import { Center,Flex,VStack,Box,Text,ScrollView,Container,Icon,Heading,Divider,Button} from "native-base";


export default function RecuperarSenha() {
  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
        <Text fontSize="lg">Recuperar senha</Text>
        </Box>
        <Box px="4" alignItems="center">
          <Button leftIcon={<Icon  as={<MaterialIcons name="done" /> } />}>Sair</Button>
        </Box>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({

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
  }

});