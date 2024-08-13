import React,{useEffect,useContext,useState} from "react"
import {Button as ButtonReact,View,StyleSheet} from "react-native"
import{useNavigation} from '@react-navigation/native';
import { Box,Center,Heading,Text,Button,Select,CheckIcon,VStack,Divider} from "native-base";
import {AuthContext} from '../../../contexts/AuthProvider';
import ContrachequeService from "../../../services/ContrachequeService";
import { checkFileIsAvailable, downloadFileFromUri, openDownloadedFile} from "expo-downloads-manager";
import { Moment } from "moment/moment";



export default function Contracheque() {

  const [loading, setLoading] =  useState(false);
  const{logado} = useContext(AuthContext);
  const navigation = useNavigation();


  //Download 
  const [downloadStatus, setDownloadStatus] = React.useState("NOTSTARTED");
  const [urlDocumento,setUrlDocumento] = useState('');
  const [nomeArquivo, setNomeArquivo] = useState('');
  const [selectItem, setSelectItem] = React.useState("");
  const [selectItemAno, setSelectItemAno] = React.useState("");
  const [downloadProgress, setDownloadProgress] = React.useState(0);
  const [selectAno, setSelectAno] = useState([]);


//   useEffect(()=>{
//     navigation.addListener('focus', ()=>setLoadTab(!loadTab))
//  },[loadTab,navigation])

  useEffect(()=>{

    async function validaAcesso(){
      const valida = await logado;
      if (valida){
        console.log("tem acesso");
      }else{
        navigation.navigate('Login');
      } 

    }

    validaAcesso();

  },[logado])

useEffect(()=>{
   
  async function contracheque(){
  
    const data = {cpf: '82961042372',data: '2023-02'}
    const stringUrl  =  '82961042372/2023-02';
    const arquivo    = '82961042372-02-2023.pdf';
  
    ContrachequeService.contracheque(data)
    .then(response=>{
      setUrlDocumento("http://45.181.229.86:8098/api/contracheque-view/"+stringUrl);
      setNomeArquivo(arquivo);

    }).catch(error=>{
     console.error(error)
    })
  
  }

  contracheque();

},[])



useEffect(()=>{
   
  function mostraAno(){
  
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let anoInicial = 2018;
    let dataAnos  = [];

    for (let i = anoInicial; i <= anoAtual; i++) {
      let itexto = i.toString();
      dataAnos.push(itexto);
    }

    setSelectAno(dataAnos);
    console.log(selectAno);

  }

  mostraAno();

},[])



function getContracheque(){

    console.log("valor item =>>>")
    console.log(selectItem)
    console.log("valor ano =>>>")
    
    console.log(selectItemAno)

    setLoading(true);


}








//Download
// *********************************************************

const callback = (downloadProgress) => {
  const progress =
    downloadProgress.totalBytesWritten /
    downloadProgress.totalBytesExpectedToWrite;
  setDownloadProgress(progress);
};

async function checkAvail() {
  const { isAvailable } = await checkFileIsAvailable(nomeArquivo);
  if (isAvailable) {
    setDownloadStatus("FINISHED");
  }
}

React.useEffect(() => {
checkAvail();
}, [urlDocumento]);


  return (

    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
        <Text fontSize="lg">Contracheque</Text>
        </Box>


        <Center mt="5">
 
 <Box>
  <Select selectedValue={selectItem} minWidth="87%" accessibilityLabel="Selecione o Mês" placeholder="Selecione o Mês" _selectedItem={{
  bg: "teal.600",
  endIcon: <CheckIcon size="5" />
}} mt={1} onValueChange={itemValue => setSelectItem(itemValue)}>
    <Select.Item label="Janeiro" value="01" />
    <Select.Item label="Fevereiro" value="02" />
    <Select.Item label="Março" value="03" />
    <Select.Item label="Abril" value="04" />
    <Select.Item label="Maio" value="05" />
    <Select.Item label="Junho" value="06" />
    <Select.Item label="Julho" value="07" />
    <Select.Item label="Agosto" value="08" />
    <Select.Item label="Setembro" value="09" />
    <Select.Item label="Outubro" value="10" />
    <Select.Item label="Novembro" value="11" />
    <Select.Item label="Dezembro" value="12" />
  </Select>
</Box>



<Box>
  <Select selectedValue={selectItemAno} minWidth="87%" accessibilityLabel="Selecione o Ano" placeholder="Selecione o Ano" _selectedItem={{
  bg: "teal.600",
  endIcon: <CheckIcon size="5" />
}} mt={1} onValueChange={itemValue => setSelectItemAno(itemValue)}>

     {selectAno.map((data)=>{
        return (
            <Select.Item label={data} value={data} />
        )
      })}
    
  </Select>
</Box>


<Box mt="3">
<Button  onPress={() =>getContracheque()}>Selecionar</Button>
</Box>

{loading && downloadStatus == "NOTSTARTED" && (

<ButtonReact 
label="Baixar para o seu celular"  
onPress={async () => {
setDownloadStatus("DOWNLOADING");

const { status, error } = await downloadFileFromUri(
urlDocumento,
nomeArquivo,
callback
);

switch (status) {
case "finished":
setDownloadStatus("FINISHED");
break;
case "error":
setDownloadStatus("ERROR");
break;
default:
break;
}
}}
/>

)}
{loading && downloadStatus == "DOWNLOADING" && (
<View style={{ marginHorizontal: 10 }}>

<ButtonReact  
title="Ver contracheque"  
onPress={async () => {}}
/>

</View>
)}
{loading &&  downloadStatus == "FINISHED" && (
  <ButtonReact  title="Download de arquivo"  style={styles.botaoDownload} onPress={async () => {
    await openDownloadedFile(nomeArquivo);
  }}/>
)}

{loading && downloadStatus == "ERROR" && (

<ButtonReact 
title="Ver contracheque"   
onPress={async () => {
setDownloadStatus("DOWNLOADING");

const { status, error } = await downloadFileFromUri(
  urlDocumento,
  nomeArquivo,
  callback
);

switch (status) {
  case "finished":
    setDownloadStatus("FINISHED");
    break;
  case "error":
    setDownloadStatus("ERROR");
    break;
  default:
    break;
}
}}
/>
)}  



</Center>  


      </VStack>
    </Box>
  );
}


const styles = StyleSheet.create({

  botaoDownload : {
    marginTop:10,
    fontSize : 15,
    color : "#008AC4",
    borderRadius:5,
  }

});