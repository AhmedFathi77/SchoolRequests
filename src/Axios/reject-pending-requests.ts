import axios from 'axios';
import * as Requests from './urls'
import { ISchoolRequest } from '../components/status/singleItem';

export const rejectPendingRequestsAPI = (id:number , data:ISchoolRequest) =>{
    return axios.put(Requests.RejectedPendingRequestsURL(id) , data);
}