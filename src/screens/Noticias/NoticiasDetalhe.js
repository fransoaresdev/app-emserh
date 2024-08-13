import React,{useEffect,useState} from 'react'
import { View,StyleSheet,Image,Text,ScrollView,useWindowDimensions,Alert, Share, Button} from 'react-native';
import { Box,Center,Heading,VStack,HStack,Spinner } from "native-base";
import{useNavigation} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';
import axios from 'axios';

export default function NoticiasDetalhe({route}) {

  const [loading, setLoading] = useState(false);
  const [dataAxiosContent, setDataAxiosContent] = useState("");
  const [dataAxios, setDataAxios] = useState([]);
  const paramId = route.params.paramId;
  const paramImage = route.params.paramImage;
  const { width } = useWindowDimensions();

  

  useEffect(()=>{

  async function getDataNoticia() {
  
    const response =  await axios.get('http://www.emserh.ma.gov.br/noticiasjson/?post='+paramId);
    setDataAxiosContent(response.data.content);
    setDataAxios(response.data);
    setLoading(true);
    
  }

  getDataNoticia();


},[]);


const onShare = async () => {
  try {
    const result = await Share.share({
      message: dataAxios.url 
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};


const tagsStyles = {
  body: {
    whiteSpace: 'nowrap',
    color: 'gray',
    fontSize:16,
    lineHeight: 23,
  },
  p:{

  },
  img:{
    display:'none'
  },
  figure:{
    display:'none'
  },
  a: {
    color: 'green'
  }
};


  return (
    <Center height={"full"} backgroundColor={"#27B3C8"} p={3}>

    {!loading && (
     <Box mt={20} mb={5}>
        <Spinner size="sm"/>
     </Box>
    )}

{loading && (
    <ScrollView>          
    
      <View style={styles.card}>
          <Image 
              source={{uri: paramImage}} 
              style={{height: 200, resizeMode: 'cover', borderTopLeftRadius:5, borderTopRightRadius:5}}
             />
          <View style={styles.cardTexto}>
              <View>
                  <Text style={styles.title}>{dataAxios.title}</Text>
                  <Text style={styles.date}>{dataAxios.date}</Text>
                </View>
                
                <RenderHtml  style={styles.content}
                  contentWidth={width}
                  enableExperimentalMarginCollapsing={true}
                  tagsStyles={tagsStyles}
                  source={{html:dataAxiosContent || '<p> </p>'}} 
                />

                 <Button onPress={onShare} style={styles.botaoCompartilha} title="Compartilhar" />
              
          </View>
             
        </View>  


    </ScrollView>
  )}
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
  
  botaoCompartilha : {
    padding : 10,
    borderRadius:15,
  },

  cardTexto : {
    padding : 10,
  },

  title:{
  fontSize:23,
  color:'#008AC4',
  fontWeight:'bold'
  },

  content:{
    fontSize:16,
  },

  date:{

  },

});

