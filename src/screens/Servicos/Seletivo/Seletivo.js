import React,{useEffect,useState,useRef} from 'react'
import { View,ScrollView,StyleSheet,Image,FlatList,TouchableOpacity,useWindowDimensions} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { Box,Center,Heading,VStack,HStack,Text,Spinner,Button} from "native-base";
import RenderHtml from 'react-native-render-html';
import BackToTopButton from '../../../components/BackToTopButton';
import axios from 'axios';

export default function Seletivo({navigation}) {

const [dataNoticia, setDataNoticia] = useState([]);
const [loading, setLoading] = useState(false);
const { width } = useWindowDimensions();
const ref = React.useRef(null);
useScrollToTop(ref);

useEffect(()=>{

  async function getDataNoticias() {
    return(
      await axios.get('http://www.emserh.ma.gov.br/seletivosjson')
      .then(response=>{
        const data = response.data;
        setDataNoticia(data);
        setLoading(true);
      })

    )
}
getDataNoticias();

},[]);

const tagsStyles = {
  body: {
    whiteSpace: 'nowrap',
    color: 'gray',
    fontSize:14,
  },
  ul:{
    lineHeight: 23,
    listStyleType:'none',
    margin: 0,
    padding:0
  },
  li:{
    lineHeight: 23,
    marginBottom:10
  },
  img:{
    display:'none'
  },
  figure:{
    display:'none'
  },
  a: {
    color: 'gray',
    fontWeight:'bold',
    textDecoration: 'none',
  }
};

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
};


const renderItem = (props) => {
        
  return (
      <View style={styles.card}> 
      <ScrollView ref={ref}>
              <View>
                  <View>
                      <Text style={styles.cardTitle}>{props.item.title}</Text>
                  </View>
                  <View>
                     
                  <RenderHtml  style={styles.content}
                  contentWidth={width}
                  enableExperimentalMarginCollapsing={true}
                  tagsStyles={tagsStyles}
                  source={{html:props.item.content || '<p> </p>'}} 
                />
                  </View>
                  
              </View>
        </ScrollView>
      </View>
  );
}


function FooterList ({scrollViewRef}){
  // if (!loading) return null;
  return(
    <Box>
    <BackToTopButton scrollViewRef={scrollViewRef} />
    </Box>
    //  <View>
    //   <BackToTopButton scrollViewRef={scrollViewRef} />
    //  </View>
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
      padding:10,
      backgroundColor:'#fff',
      marginBottom:30,
      borderRadius:5,
    },

    content:{
      fontSize:8,
      lineHeight:23,
      marginBottom:30,
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

