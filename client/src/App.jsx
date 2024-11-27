import { useState } from "react";

import "./App.css";
// import "easymde/dist/easymde.min.css";

import { Routes, Route, Navigate } from "react-router-dom";
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
import Agent from "./pages/Agent";
import Blog from "./pages/Blog";
import Upload from "./pages/upload";
// import Edit from "./pages/Edit";
import Protected from "./private/protected";
import { useSelector } from "react-redux";
import AgentProperties from "./pages/AgentProperties";
import Addresse from "./pages/Addresse";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div className="App p-0 m-0">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listen" element={<Listen />} />
          <Route element={<Protected />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/save" element={<Saved />} />
          </Route>
          {/* {user ? (
            <Navigate to="/" />
          ) : ( */}
          <Route path="/login" element={<Login />} />
          <Route path="/address" element={<Addresse />} />
          {/* )} */}
          {/* {user ? (
            <Navigate to="/" />
          ) : ( */}
          <Route path="/register" element={<Register />} />
          {/* )} */}

          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/property" element={<Properties />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/property-details/:id" element={<Property />} />

          <Route path="/agent" element={<Agent />} />
          <Route path="/property/agent/:id" element={<AgentProperties />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/upload" element={<Upload />} />
          {/* <Route path="/edit/:name" element={<Edit />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
