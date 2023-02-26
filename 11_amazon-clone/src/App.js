import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import Checkout from './Components/checkout/Checkout';
import Login from './Components/login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="App">

        <Routes>
          <Route path='/login' element={<>  <Login /></>} />
          {/* Render multiple components in React Router */}
          {/* use react fregment for multiple rendering  */}
          <Route path='/' element={<> <Header /> <Home /></>} />
          <Route path='/checkout' element={<> <Header /> <Checkout /></>} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
