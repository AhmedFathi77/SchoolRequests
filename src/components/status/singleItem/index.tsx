import * as React from 'react';
import * as styles from './styles.module.sass';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useDispatch } from 'react-redux';
import { acceptRequestedSchools } from '../../../React-Redux/Actions/accept-requested-school-action';
import { rejectRequestedSchools } from '../../../React-Redux/Actions/reject-requested-shool-action';
import { Modal, makeStyles, Theme, createStyles  , Button} from '@material-ui/core';
export enum statueType{
    requested= "Requested",
    accepted= "Accepted",
    rejected = "Rejected"
}

export interface IDocument{
    name: string;
    url: string;
}

export interface ISchoolRequest{
    id:number;
    name:string;
    status: string;
    documnets: IDocument[];
}
interface IProps{
    item : ISchoolRequest
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
      },
    }),
  );

const RequestedItem: React.FC<IProps> = (props) =>{
    const {name,status, id , documnets} = props.item;
    const dispatch = useDispatch();
    const handleAccept = React.useCallback( ()=> {
        dispatch(acceptRequestedSchools({id:id , data: {...props.item , status:'accepted'} }))
    } , [id])
    const handleReject = React.useCallback( ()=> {
        dispatch(rejectRequestedSchools({id:id , data: {...props.item , status:'rejected'} }))
    } , [id])
    // console.log('hello ====>' ,props.item);
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
 
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
  
    return(
        <>
        <div className={styles.default.wrapper}>
            <span>{name}</span>
            <span>Test Certificate</span>
            {
                status === "pending"?<span>{status}</span>:''
            }
                <ul className={styles.default.actionList}>
                    {
                        status === "pending"?(
                            <>
                                <li className={styles.default.accept} onClick={handleAccept}><CheckIcon style={{color: 'green'}} /></li>
                                <li className={styles.default.reject} onClick={handleReject}><ClearIcon style={{color: 'red'}}/></li>
                            </>
                        )
                            :
                            ''
                    }
                        <li className={styles.default.document} onClick={handleOpen}><InsertDriveFileIcon /></li>,
                        <li className={styles.default.download}><GetAppIcon style={{color: 'blue'}} /></li>
                    
                    
                </ul>
            
        </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={`${classes.paper} ${styles.default.modal}`}>
                        <h2 id="simple-modal-title" style={{padding: "1rem 2rem"}}>List of documents</h2>
                        {
                            documnets.map((item,key) =>(
                                <p id="simple-modal-description" key={key} className={styles.default.mod}>
                                    <span>{item.name}</span>
                                    <a href={item.url} target="_blank">View <InsertDriveFileIcon /></a>
                                </p>
                            ))
                        }
                        
                    
                        <div className={styles.default.modFooter}>
                            <Button color="secondary" variant="outlined" onClick={handleClose}>Close</Button>
                        </div>
                </div>
            
            </Modal>
        </>

    )
}

export default RequestedItem;