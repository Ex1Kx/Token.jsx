import axios from "axios";

const url = 'https://backend-edw.herokuapp.com/usuario'

const login = async credentials =>{
    const {data} = await axios.post(url, credentials)
    return data
}

export default {login}