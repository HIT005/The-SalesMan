import "./App.css";
import Navig from "./Compont/Navi";
import SignUp from "./Compont/SignUp";
import LogIn from "./Compont/Login";
import Footers from "./Compont/footer";
import PrivateRoute from "./Compont/PrivacyArea";
import Home from "./Compont/Home";
import Shop from "./Compont/Shops";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navig />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/create"
              element={<Shop />}
            
            />
            <Route path="/add" element={<h1> ADD Your Shop Order</h1>} />
            <Route path="/profile" element={<h1> HEllo</h1>} />
            <Route path="/logout" element={<h1> Logout</h1>} />

          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
      <Footers />
    </div>
  );
}

export default App;
