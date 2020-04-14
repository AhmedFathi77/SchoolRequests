import axios from 'axios';
import * as Requests from './urls'

export const getPendingRequestsAPI = () =>{
    return axios.get(Requests.GetPendingRequestsURL);
}