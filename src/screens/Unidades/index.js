import React,{useEffect,useState} from 'react'
import {MaterialIcons} from "@expo/vector-icons";
import { View,StyleSheet,TextInput,Image,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import { Box,Center,Heading,VStack,HStack,Text } from "native-base";
import axios from 'axios';

export default function Unidades() {

  const [loading, setLoading] = useState(false);
  const [dataAxios, setDataAxios] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);
  useEffect(()=>{

    async function getDataUnidades() {
      return(
        await axios.get('https://gpc.emserh.ma.gov.br/api/tbg/unidades')
        .then(response=>{
          setDataAxios(response.data);
          setList(response.data);
          setLoading(true);

        }).catch(error=>{
          console.log(error)
        })
  
      )
  }
  getDataUnidades();
  
  },[]);

 
  useEffect(() => {
      setList(
        dataAxios.filter(
          (item) =>
            item.unidade.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
  
  }, [searchText]);


  return (
    <Center height={"full"} backgroundColor={"#27B3C8"} pt={3}>
    <ScrollView> 
      <Box>
      <TextInput
          style={styles.input}
          placeholder="Filtrar por unidade"
          placeholderTextColor="#aec9ce"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
      </Box>
      {list.map((data,key)=>{
        return (
          // <Box mb={3} px="4" m="3" p="4" backgroundColor={'#fff'} rounded="lg">
          <Center>
          <Box mb={3} p="3" w="97%" backgroundColor={'#fff'} rounded="lg">
          <Text  style={styles.h2}>{data.unidade}</Text>  
          <Text>Cidade:{data.municipio ?? ""}</Text>  
          <Text>Endereço:{data.bairro ?? ""} {data.logradouro ?? ""} {data.edereco ?? ""}</Text>  
          <Text>Funcionamento:{data.funcionamento ??"NÃO INFORMADO"}</Text>  
          </Box>
          </Center>
        )

      })}
      </ScrollView>
    </Center>
      
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

