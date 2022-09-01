import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} > </Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/service" element={<Services></Services>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Navbar>

    </div>

  );
}

export default App;
