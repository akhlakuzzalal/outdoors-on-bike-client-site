import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
   const { user, logOut } = useAuth();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <div>
         <Navbar bg="primary" expand="lg">
            <Container fluid>
               <Navbar.Brand href="">Navbar scroll</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                  >
                     <Nav.Link as={Link} to="/home">Home</Nav.Link>
                     <Nav.Link as={Link} to="/allproducts">Products</Nav.Link>
                     <Nav.Link as={Link} to="/dashBoard">Dashboard</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                     {
                        user?.email ?
                           <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                              <Avatar sx={{ width: 32, height: 32 }}> <img className='img-fluid' src={user.photoURL} alt="" /> </Avatar>
                           </IconButton>
                           :
                           <Link to='/login'><Button className='text-light'>Login</Button></Link>
                     }
                  </Form>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
               elevation: 0,
               sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                     width: 32,
                     height: 32,
                     ml: -0.5,
                     mr: 1,
                  },
                  '&:before': {
                     content: '""',
                     display: 'block',
                     position: 'absolute',
                     top: 0,
                     right: 14,
                     width: 10,
                     height: 10,
                     bgcolor: 'background.paper',
                     transform: 'translateY(-50%) rotate(45deg)',
                     zIndex: 0,
                  },
               },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
         >
            <MenuItem>
               {user.displayName}
            </MenuItem>
            <Divider />
            <MenuItem onClick={logOut}>
               <ListItemIcon>
                  <Logout fontSize="small" />
               </ListItemIcon>
               Logout
            </MenuItem>
         </Menu>
      </div>
   );
};

export default Header;