import './App.css';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllProducts from './components/Pages/AllProducts/AllProducts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './components/Pages/Dashboard/DashBoard/DashBoard';
import LogIn from './components/Pages/LogIn/LogIn';
import AuthProvider from './firebase/AuthProvider';

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
            <Route path='/dashBoard'>
              <DashBoard></DashBoard>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
