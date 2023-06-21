// Import React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar";

// Import pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Import styles
import "./assets/styles/_reset.scss";
import "./assets/styles/_variables.scss";
import "./assets/styles/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
