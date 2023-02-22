import Navbar from "./components/Navbar";
// contact:  984-3894718
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </AuthContextProvider>

    </>
  );
}

export default App;
