import axios from 'axios'
export default{
    get(url){
        return axios.get(`${url}`,{
            params : {
                _limit : 5
            }
        })
    }
}