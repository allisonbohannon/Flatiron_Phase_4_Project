import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import Wineries from "../pages/Wineries";
import Users from "../pages/Users";

function App() {

  const [wineries, setWineries] = useState([])
  const [users, setUsers] = useState([])



  //const wineryList = [{id: 1, name: "winery1"}, {id: 2, name: "winery2"}, {id: 3, "name: winery3"}]
  
  return (
    <div>
            <NavigationBar/>
            <Routes>
            
                <Route path="/wineries" element={<Wineries
                  wineries={wineries}
                />} />
                 <Route path="/users" element={<Users
                  users={users}
                />} />
                <Route path="/" element={<Home
                />} />
            </Routes>
        </div>
  );
}

export default App;
