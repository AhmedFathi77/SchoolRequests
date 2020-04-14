import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import {NavLink} from 'react-router-dom';
import * as styles from './styles.module.sass';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        },
        menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    }),
);

interface ResponsiveDrawerProps {
    container?: any;
}


const Navbar: React.FC<ResponsiveDrawerProps> = (props) =>{
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

const [activeState , setActiveState] = React.useState('first');
const handelFirstClick = React.useCallback( ()=> {setActiveState('first')},[])
const handelSecondClick = React.useCallback( ()=> {setActiveState('second')},[])
const handelThirdClick = React.useCallback( ()=> {setActiveState('third')},[])

const drawer = (
<div>
    <div className={classes.toolbar} />
    <Divider />
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List className={styles.default.wrapper}>
        <NavLink onClick={handelFirstClick} className={`${styles.default.link} ${activeState === 'first' ?styles.default.active : styles.default.inactive}`} to='/'>
            <ListItem button key={'Requested'}>
                <ListItemIcon><GroupAddIcon className={`${activeState === 'first' ?styles.default.active : styles.default.inactive}`} /></ListItemIcon>
                <ListItemText primary={'Requested'} />
            </ListItem>
        </NavLink>
        <NavLink onClick={handelSecondClick} className={`${styles.default.link} ${activeState === 'second' ?styles.default.active : styles.default.inactive}`} to='/accepted'>
            <ListItem button key={'Accepted'}>
                <ListItemIcon><GroupAddIcon className={`${activeState === 'second' ?styles.default.active : styles.default.inactive}`}/></ListItemIcon>
                <ListItemText primary={'Accepted'} />
            </ListItem>
        </NavLink>
        <NavLink onClick={handelThirdClick} className={`${styles.default.link} ${activeState === 'third' ?styles.default.active : styles.default.inactive}`} to='/rejected'>
            <ListItem button key={'Rejected'}>
                <ListItemIcon><GroupAddIcon className={`${activeState === 'third' ?styles.default.active : styles.default.inactive}`} /></ListItemIcon>
                <ListItemText primary={'Rejected'} />
            </ListItem>
        </NavLink>
        
        
    {/* ))} */}
    </List>
</div>
);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Responsive drawer
                </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                    {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        
        </div>
    );
}

export default Navbar;