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
import Photo from "./Components/Photo/Photo.jsx";
import UserProfile from "./Components/User/UserProfile.jsx";
import NotFound from "./Components/NotFound";

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
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          {/* <Api/>  */}
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
