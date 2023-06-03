import axios from 'axios';

const api =  axios.create({
    baseURL: 'https://fortniteapi.io',
     headers: {
         'Authorization':'1c11e6ee-0326b1a4-ccc8fb4b-c935842d'
     }
})

export default api