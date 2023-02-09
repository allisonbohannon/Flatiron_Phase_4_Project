import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import Wineries from "../pages/Wineries";
import Users from "../pages/Users";

function App() {
  return (
    <div>
            <NavigationBar/>
            <Routes>
            
                <Route path="/wineries" element={<Wineries
                />} />
                 <Route path="/users" element={<Users
                />} />
                <Route path="/" element={<Home
                />} />
            </Routes>
        </div>
  );
}

export default App;
