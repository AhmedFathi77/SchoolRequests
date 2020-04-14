import * as React from 'react';
import * as styles from './styles.module.sass';
import RequestedItem, { statueType } from '../singleItem';
import ItemsHeader from '../header';
import { useDispatch,  } from 'react-redux';
import { getRequestedSchools } from '../../../React-Redux/Actions/get-requested-schools-action';
import { useSelect } from '../../helper/use-select';



const Requested: React.FC = () =>{

    const dispatch = useDispatch();
    const {pendingRequests , requests} =  useSelect(state => state.getRequestsSchoolsReducer);
    React.useEffect( ()=> {
        dispatch(getRequestedSchools())
    } , [requests]);
    console.log("Pending Requests======>" , pendingRequests);
    return(
        <div className={styles.default.wrapper}>
            <ItemsHeader status={"pending"} />
            {
                pendingRequests.map(it => (
                    <RequestedItem key={it.id} item={it} /> 
                ))
            }
            {/* <RequestedItem id={1} name={"IbnKhaldon school"} certificate_name={"Prep"}
                            status={statueType.requested} documents= {{
                                name: "License",
                                url: "//any Googledrive document link"
                            }}
            /> */}
        </div>
    )
}

export default Requested;