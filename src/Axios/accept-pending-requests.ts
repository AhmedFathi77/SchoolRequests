import axios from 'axios';
import * as Requests from './urls'
import { ISchoolRequest } from '../components/status/singleItem';

export const acceptPendingRequestsAPI = (id:number , data:ISchoolRequest) =>{
    return axios.put(Requests.AcceptPendingRequestsURL(id) , data);
}