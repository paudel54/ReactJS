import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from './pages/write/Write';
import Setting from "./pages/settings/Setting";
import Login from './pages/login/Login';
import Register from './pages/register/Register'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (

    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// @Williams2809
// 5 months ago
// 1:34:10 If this isn't working for you, try this: 
// <Router> 
//     <TopBar />
//         <Routes>
//           <Route exact path="/" element={<Home/>} />
//           <Route path="/register" element={<Register/>} />
//           <Route path="/login" element={<Login/>} />
//           <Route path="/write" element={<Write/>} />
//         </Routes>
//     </Router>