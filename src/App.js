import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllProducts from './components/Pages/AllProducts/AllProducts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './components/Pages/Dashboard/DashBoard/DashBoard';
import LogIn from './components/Pages/LogIn/LogIn';
import AuthProvider from './firebase/AuthProvider';
import Register from './components/Pages/Register/Register';
import PrivateRoute from './firebase/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/allproducts'>
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path='/dashBoard'>
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
