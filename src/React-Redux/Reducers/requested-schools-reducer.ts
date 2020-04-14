import { ISchoolRequest } from "../../components/status/singleItem";
import { reducer, on } from "ts-action";
import { getRequestedSchoolsSucceeded } from "../Actions/get-requested-schools-action";
import { acceptRequestedSchoolsSucceeded } from "../Actions/accept-requested-school-action";
import { rejectRequestedSchoolsSucceeded } from "../Actions/reject-requested-shool-action";


interface IState{
    // requestsById : {
    //     [id: number]: ISchoolRequest;
    // };
    // requests: number[];
    requests: ISchoolRequest[];
    pendingRequests: ISchoolRequest[];
    acceptedRequests: ISchoolRequest[];
    rejectedRequests: ISchoolRequest[];
    
}

export const getRequestsSchoolsReducer = reducer<IState>(
    {
        // requestsById: {},
        // requests: [],
        requests:[],
        pendingRequests: [],
        acceptedRequests: [],
        rejectedRequests:[]
    },
    on(getRequestedSchoolsSucceeded, (state, { payload }) => ({
        ...state,
        requests: payload,
        pendingRequests: payload.filter( item => item.status === 'pending'),
        acceptedRequests: state.requests.filter( item => item.status === 'accepted'),
        rejectedRequests: state.requests.filter( item => item.status === 'rejected')
    })),
    on(acceptRequestedSchoolsSucceeded , (state , {payload}) => ({
        ...state,
        pendingRequests: state.requests.filter( item => item.id !== payload.id),
        // acceptedRequests: state.requests.filter( item => item.status === 'accepted')
    })),
    on(rejectRequestedSchoolsSucceeded , (state , {payload}) => ({
        ...state,
        pendingRequests: state.requests.filter( item => item.id !== payload.id),
        rejectedRequests: state.requests.filter( item => item.status === 'rejected')
    })),

)