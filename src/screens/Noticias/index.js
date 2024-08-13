import React,{useEffect,useState} from 'react'
import { View,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import { Box,Center,Heading,VStack,HStack,Text,Spinner } from "native-base";
import axios from 'axios';

export default function Noticias({navigation}) {

const [dataNoticia, setDataNoticia] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(()=>{

  async function getDataNoticias() {
    return(
      await axios.get('http://www.emserh.ma.gov.br/noticiasjson')
      .then(response=>{
        const data = response.data;
        setDataNoticia(data);
        setLoading(true);
      })

    )
}
getDataNoticias();

},[]);


const renderItem = (props) => {
        
  return (
      <View style={styles.card}> 
        
          <TouchableOpacity   onPress={() => 
            navigation.navigate('NoticiaDetalhe', { 
                       paramId:props.item.id, 
                       paramImage:props.item.image,
                     }) }>
            <Image 
            source={{uri: props.item.image}} 
            style={{height: 200, resizeMode: 'cover', borderTopLeftRadius:5, borderTopRightRadius:5}}
            />
              <View>
                  <View>
                      <Text style={styles.cardTitle}>{props.item.title}</Text>
                  </View>
                  
              </View>
          </TouchableOpacity>
      </View>
  );
}



function FooterList ({load}){
  if (!loading) return null;
  return(
     <View>
        <Text>final</Text>
     </View>
  )   
}


  return (
    <Center height={"full"} backgroundColor={"#27B3C8"} p={5}>

    {!loading && (
     <Box mt={20} mb={5}>
        <Spinner size="sm"/>
     </Box>
    )}

    <Box>
    <FlatList
                data={dataNoticia}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<FooterList load={loading}/>}
     />  
    </Box>
</Center>
      
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

