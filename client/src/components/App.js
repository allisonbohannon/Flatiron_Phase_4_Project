import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import Wineries from "../pages/Wineries";
import Users from "../pages/Users";

function App() {

  
  const wineryLightTest = [{id: 1, name: "winery1", appellation: "Napa"},
                            {id: 2, name: "winery2", appellation: "Sonoma"}, 
                            {id: 3, name: "winery3", appellation: "Lodi"}
                          ]
  
  const wineryTest = [{id: 1, name: "winery1", appellation: "Napa", 
                              comments:[{id:1, userId:1, text: "xyz"}, {id:2, userId:3, text: "abc"}], 
                              visits:[{id:1, userId:1, rating: 3}, {id:2, userId:3, rating: 5}]
                            },
                      {id: 2, name: "winery2", appellation: "Sonoma", 
                              comments:[{id:3, userId:2, text: "def"}],
                              visits:[{id:3, userId:2, rating: 1}]
                            }, 
                      {id: 3, name: "winery3", appellation: "Lodi", 
                              comments:[{id:4, userId:2, text: "ghi"}, {id:5, userId:1, text: "jkl"}, {id:6, userId:3, text: "mno"}],
                              visits:[{id:4, userId:2, rating: 4},{id:5, userId:1, rating: 5},{id:6, userId:3, rating: 4}]
                            }
                          ]

  const [wineries, setWineries] = useState(wineryTest)
  const [users, setUsers] = useState([])


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
