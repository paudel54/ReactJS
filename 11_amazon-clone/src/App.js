import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import Checkout from './Components/checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Routes>
          {/* Render multiple components in React Router */}
          {/* use react fregment for multiple rendering  */}
          <Route path='/' element={<> <Home /></>} />
          <Route path='/checkout' element={<><Checkout /></>} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
