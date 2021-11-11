import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import DashboardHome from './DashboardHome/DashboardHome';


import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { color } from '@mui/system';
import { Navbar, Button } from 'react-bootstrap';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Payment from './Payment/Payment';
import Review from './Review/Review';
import useAuth from './../../../hooks/useAuth';
import Allorders from './../../Allorders/Allorders';
import AddPlaces from './../../AddPlaces/AddPlaces';
import ManageProducts from './ManageProducts/ManageProducts';
const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { logOut } = useAuth()

    let { path, url } = useRouteMatch();

    const { admin } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <ul style={{ textAlign: "left" }}>
                <li><Link to="/home" style={{ textDecoration: "none" }}>Home</Link></li>
                {
                    !admin && <Box>
                        <li><Link to={`${url}`} style={{ textDecoration: "none" }} > My Orders</Link></li>
                        <li><Link to={`${url}/payment`} style={{ textDecoration: "none" }} > Payment</Link></li>
                        <li><Link to={`${url}/review`} style={{ textDecoration: "none" }} > Review</Link></li>
                    </Box>
                }
                {
                    admin && <Box>
                        <li><Link to={`${url}/makeAdmin`} style={{ textDecoration: "none" }} > Make Admin</Link></li>
                        <li><Link to={`${url}/allorders`} style={{ textDecoration: "none" }} > Manage All Orders</Link></li>
                        <li><Link to={`${url}/addbikes`} style={{ textDecoration: "none" }} > Add A Bike</Link></li>
                        <li><Link to={`${url}/manageproducts`} style={{ textDecoration: "none" }} > Manage Products</Link></li>
                    </Box>
                }
                <Divider />
                <li> <Link to="home" onClick={logOut} style={{ textDecoration: "none" }}> Log Out</Link></li>
            </ul>





            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Switch>
                    <Route exact path={path} >
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/allorders`}>
                        <Allorders></Allorders>
                    </Route>
                    <Route path={`${path}/addbikes`}>
                        <AddPlaces></AddPlaces>
                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
