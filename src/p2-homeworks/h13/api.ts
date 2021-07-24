import axios from 'axios';


export const RequestApi  = {
    success(){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test/', {success: true})
    }
}