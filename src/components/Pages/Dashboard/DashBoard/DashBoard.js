import {
   AppBar, CssBaseline, Drawer, IconButton, Toolbar,
   Typography, Divider, List, ListItem, ListItemText, SvgIcon
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProdutc';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../../hooks/useAuth'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

const DashBoard = () => {
   const { path, url } = useRouteMatch();
   const drawerWidth = 240;
   const container = window !== undefined ? () => document.body : undefined;
   const [mobileOpen, setMobileOpen] = useState(false);
   const [profile, setProfile] = useState({});
   const { user } = useAuth()

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };


   useEffect(() => {
      fetch(`http://localhost:4000/users/${user?.email}`)
         .then(res => res.json())
         .then(data => {
            setProfile(data)
         })
   }, [user]);

   console.log(profile)

   const drawer = (
      <div>
         <Toolbar />
         <Divider />
         <List>
            <Link to={'/home'} className='text-decoration-none text-dark'>
               <ListItem button className='bg-primary text-light'>
                  <SvgIcon>
                     <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </SvgIcon>
                  <ListItemText>Home</ListItemText>
               </ListItem>
            </Link>
            <Link to={`${url}/pay`} className='text-decoration-none text-dark'>
               <ListItem button >
                  <ListItemText>Pay</ListItemText>
               </ListItem>
            </Link>
            <Link to={`${url}/myorder`} className='text-decoration-none text-dark'>
               <ListItem button >
                  <ListItemText>My Orders</ListItemText>
               </ListItem>
            </Link>
            <Link to={`${url}/review`} className='text-decoration-none text-dark'>
               <ListItem button >
                  <ListItemText>Review</ListItemText>
               </ListItem>
            </Link>

            {
               profile?.role === "admin" && <div>
                  <Divider />
                  <Link to={`${url}/manageallorders`} className='text-decoration-none text-dark'>
                     <ListItem button >
                        <ListItemText>Manage All Orders</ListItemText>
                     </ListItem>
                  </Link>
                  <Link to={`${url}/addproducts`} className='text-decoration-none text-dark'>
                     <ListItem button >
                        <ListItemText>Add A Product</ListItemText>
                     </ListItem>
                  </Link>
                  <Link to={`${url}/makeadmin`} className='text-decoration-none text-dark'>
                     <ListItem button >
                        <ListItemText>Make An Admin</ListItemText>
                     </ListItem>
                  </Link>
                  <Link to={`${url}/manageallproducts`} className='text-decoration-none text-dark'>
                     <ListItem button >
                        <ListItemText>Manage All Products</ListItemText>
                     </ListItem>
                  </Link>
               </div>
            }
            <ListItem button className='bg-primary text-light' >
               <ListItemText>Log Out</ListItemText>
            </ListItem>
         </List>

      </div>
   );

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
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
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
            sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
         >
            <Toolbar />
            <Typography paragraph>
               <Switch>
                  <Route path={`${path}/pay`}>
                     <Pay></Pay>
                  </Route>
                  <Route exact path={`${path}/`}>
                     <MyOrders></MyOrders>
                  </Route>
                  <Route path={`${path}/myorder`}>
                     <MyOrders></MyOrders>
                  </Route>
                  <Route path={`${path}/review`}>
                     <Review></Review>
                  </Route>
                  <Route path={`${path}/manageallorders`}>
                     <ManageAllOrders></ManageAllOrders>
                  </Route>
                  <Route path={`${path}/addproducts`}>
                     <AddProduct></AddProduct>
                  </Route>
                  <Route path={`${path}/makeadmin`}>
                     <MakeAdmin></MakeAdmin>
                  </Route>
                  <Route path={`${path}/manageallproducts`}>
                     <ManageProducts></ManageProducts>
                  </Route>
               </Switch>
            </Typography>
         </Box>
      </Box>
   );
};

export default DashBoard;