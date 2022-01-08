import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Login from "./Login";
import Navbar from "./Navbar";
import ProtectRoute from "./ProtectRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectRoute />}>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
