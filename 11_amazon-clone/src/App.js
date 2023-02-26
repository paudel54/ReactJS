import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import Checkout from './Components/checkout/Checkout';
import Login from './Components/login/Login';
import Payment from './Components/payment/Payment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue();


  // keep track of who is sign in: need a listner with useEffect
  useEffect(() => {
    // WILL only run once when the app component loads......
    // if we login refires , if we logout fires up always listens for a change
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (

    < Router >
      <div className="App">

        <Routes>
          <Route path='/login' element={<>  <Login /></>} />
          {/* Render multiple components in React Router */}
          {/* use react fregment for multiple rendering  */}
          <Route path='/' element={<> <Header /> <Home /></>} />
          <Route path='/checkout' element={<> <Header /> <Checkout /></>} />
          <Route path='/payment' element={<> <Header /> <Payment /></>} />
        </Routes>

      </div>
    </Router >

  );
}

export default App;
