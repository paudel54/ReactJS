import Navbar from "./components/Navbar";
// contact:  984-3894718
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
