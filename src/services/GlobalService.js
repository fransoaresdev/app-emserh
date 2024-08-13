import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import Config from "../util/Config"

class GlobalService{
    
    async cidades(){
        return axios({
            url: 'https/www.emserh.ma.gov.br/api/cidades',
            method: 'GET',
            timeout: 5000,
            headers: 'application/json'
        }).then((response) => {
            return Promise.resolve(response);
        }).catch((error) => {
            return Promise.reject(error)
        })
    }



    async processo(data){
        return axios({
            url: 'https://gpc.emserh.ma.gov.br/api/tbg/unidades',
            method: 'GET',
            data: {data:data},
            timeout: 5000,
            headers: 'application/json'
        }).then((response) => {
            return Promise.resolve(response);
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

}

const GlobalService = new SiteService()

export default siteService