import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          {/* Render multiple components in React Router */}
          {/* use react fregment for multiple rendering  */}
          <Route path='/' element={<><Header /> <Home /></>} />
          <Route path='/checkout' element={<><Header /> <h1>Hello from checkout comp</h1></>} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
