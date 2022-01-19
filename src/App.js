import './App.css';
import Home from './components/Pages/Home/Home/Home';
import AllProducts from './components/Pages/AllProducts/AllProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './components/Pages/Dashboard/DashBoard/DashBoard';
import LogIn from './components/Pages/LogIn/LogIn';
import AuthProvider from './firebase/AuthProvider';
import Register from './components/Pages/Register/Register';
import PrivateRoute from './firebase/PrivateRoute';
import Purches from './components/Pages/Purches/Purches';
import Pay from './components/Pages/Dashboard/Pay/Pay';
import MyOrders from './components/Pages/Dashboard/MyOrders/MyOrders';
import Review from './components/Pages/Dashboard/Review/Review';
import ManageAllOrders from './components/Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddProdutc from './components/Pages/Dashboard/AddProduct/AddProdutc';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './components/Pages/Dashboard/ManageProducts/ManageProducts';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='home' element={<Home />}></Route>
            <Route exact path='allproducts' element={<AllProducts />}></Route>
            <Route exact path='dashBoard' element={<PrivateRoute><DashBoard /></PrivateRoute>}>
              <Route path='pay/:id' element={<Pay />}></Route>
              <Route path='myorder' element={<MyOrders />}>
                <Route path='pay/:id' element={<Pay />}></Route>
              </Route>
              <Route path='' element={<MyOrders />}></Route>
              <Route path='review' element={<Review />}></Route>
              <Route path='manageallorders' element={<ManageAllOrders />}></Route>
              <Route path='addproducts' element={<AddProdutc />}></Route>
              <Route path='makeadmin' element={<MakeAdmin />}></Route>
              <Route path='manageallproducts' element={<ManageProducts />}></Route>
            </Route>
            <Route exact path='login' element={<LogIn />}></Route>
            <Route exact path='register' element={<Register />}></Route>
            <Route exact path='purches' element={<PrivateRoute><Purches /></PrivateRoute>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
