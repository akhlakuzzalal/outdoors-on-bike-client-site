import React from 'react';
import useAuth from '../../../../hooks/useAuth'
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../../Footer/Footer';

const DashBoard = () => {
   const { user } = useAuth()
   const [account, setAccount] = useState()

   useEffect(() => {
      fetch(`https://bike-website-server.herokuapp.com/users/${user.email}`)
         .then(res => res.json())
         .then(data => setAccount(data))
   }, [user?.email])

   return (
      <div>
         <div className="container">
            <div id='dashboard' style={{ padding: '80px 0' }} className="row">
               <div id='dash-menu' className="col-md-3 col-2">
                  <div className="left-menu text-start">
                     <ul className="deshboard-menu">
                        {account?.role === 'admin' && (
                           <span>
                              {" "}
                              <li>
                                 <Link to="manageallorders">
                                    <span className="dash-icon" title="Dashboard"></span>{" "}
                                    <span className="desh-text">All Orders</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="addproducts">
                                    <span className="dash-icon" title="Dashboard"></span>{" "}
                                    <span className="desh-text">Add Product</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="manageallproducts">
                                    <span className="dash-icon" title="Dashboard"></span>{" "}
                                    <span className="desh-text">Manage All Product</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="makeadmin">
                                    <span className="dash-icon" title="Dashboard"></span>{" "}
                                    <span className="desh-text">Make Admin</span>
                                 </Link>
                              </li>
                           </span>
                        )}
                        <span>
                           <li>
                              <Link to="myorder">
                                 <span className="dash-icon" title="Dashboard"></span>{" "}
                                 <span className="desh-text">My Order</span>
                              </Link>
                           </li>
                           <li>
                              <Link to="review">
                                 <span className="dash-icon" title="Dashboard"></span>{" "}
                                 <span className="desh-text">Review</span>
                              </Link>
                           </li>
                        </span>

                     </ul>
                  </div>
               </div>
               <div id='dash-item' className="col-md-9 col-10">
                  <Outlet />
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div >
   );
};

export default DashBoard;