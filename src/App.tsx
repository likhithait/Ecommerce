// Import React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/Navbar/Navbar";

// Import pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";

// Import styles
import "./assets/styles/_reset.scss";
import "./assets/styles/_variables.scss";
import "./assets/styles/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
