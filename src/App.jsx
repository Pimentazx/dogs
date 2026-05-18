import React from "react";
import "./App.css";
import Api from "../api/Api.jsx";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext.jsx";
import ProtectedRoute from "./Components/Helpers/ProtectedRoute.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
          </Routes>
          <Footer />
          {/* <Api/>  */}
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
