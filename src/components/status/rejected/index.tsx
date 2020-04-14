import * as React from 'react';
import * as styles from './styles.module.sass';
import ItemsHeader from '../header';
import RequestedItem, { statueType } from '../singleItem';
import { useDispatch } from 'react-redux';
import { getRequestedSchools } from '../../../React-Redux/Actions/get-requested-schools-action';
import { useSelect } from '../../helper/use-select';
const Rejected: React.FC = () =>{
    const dispatch = useDispatch();
    React.useEffect( ()=> {
        dispatch(getRequestedSchools())
    } , []);
    const {rejectedRequests} =  useSelect(state => state.getRequestsSchoolsReducer);
    console.log("Rejected Requests======>" , rejectedRequests);
    return(
        <div className={styles.default.wrapper}>
            <ItemsHeader status={"rejected"} />
            {
                rejectedRequests.map(it => (
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

export default Rejected
