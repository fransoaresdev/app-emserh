import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

class ContrachequeService{
    
    async contracheque(data){
        return axios({
            url: "http://45.181.229.86:8098/api/dados-response",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {Accept: 'application/json'}
        }).then((response) => { 
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
            
        })
    }

}

const contrachequeService = new ContrachequeService()

export default contrachequeService