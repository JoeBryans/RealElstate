import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Listen from "./pages/Listen";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./pages/Profile";
import AddProperty from "./pages/AddProperty";
import Property from "./pages/Property";
import Properties from "./pages/Properties";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/property" element={<Properties />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/property-details/:id" element={<Property />} />
          <Route path="/save" element={<Saved />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
