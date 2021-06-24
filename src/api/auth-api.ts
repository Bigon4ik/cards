import axios from "axios";


export const baseURL = 'http://localhost:7542/2.0'
const cardsRequest = axios.create({
    baseURL,
    withCredentials: true
})

export const authAPI = {


}


