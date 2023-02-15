import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import Wineries from "../pages/Wineries";
import Users from "../pages/Users";
import WineryDetail from "../pages/WineryDetail";
import EditCommentForm from "../pages/EditCommentForm";
import ShowCommentForm from "../pages/ShowCommentForm";
import {averageRating} from "../functions/AverageRating";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { wineryTest, userTest } from "../testdata";

function App() {

  
  

  const [currentUser, setCurrentUser] = useState(1);

  const [wineries, setWineries] = useState(wineryTest)
  const [users, setUsers] = useState(userTest)

  //useEffect to fetch initial state

  useEffect(() => {
    const wineriesWithAverageRating = wineryTest.map(winery => ({...winery, avgRating: averageRating(winery)}))
    setWineries(wineriesWithAverageRating)
    }, [])

  const handleCommentEdit = (updatedWinery) => {
    const updatedWineries= wineries.map(winery => {
      if (winery.id === updatedWinery.id) { 
        return updatedWinery
      } else {
        return winery}
      }
    )
    setWineries(updatedWineries)
  }

  const onSignup = (userObject) => {
    //backend
    setUsers([...users, userObject])
  }

  const onChangeRating = (updatedVisitObj) => {

    const targetWinery = wineries.find(winery => winery.id === updatedVisitObj.wineryId)

    const updatedWinery = targetWinery.visits.map(visit => {
      if (visit.id === updatedVisitObj.id) {
        return ({
          userId:updatedVisitObj.userId,
          rating:updatedVisitObj.rating, 
          id:updatedVisitObj.id
        })
      } else {
        return
      }
    })

    const updatedWineries = wineries.map(winery => {
      if (winery.id === updatedWinery.id) {
        return updatedWinery
      } else {
        return winery
      }
    })

    setWineries(updatedWineries)

  }

  const onAddRating = (newVisitObj) => {
    
    const updatedWineries= wineries.map(winery => {
      if (winery.id === newVisitObj.wineryId) { 
        return {...winery, visits: [...winery.visits, {
          userId:newVisitObj.userId,
          rating:newVisitObj.rating, 
          id: 3+ Math.floor(Math.random)*100
        }] }
      } else {
        return winery}
      }
    )
    setWineries(updatedWineries)

  }

  //if (!currentUser) return <Login onLogin={setCurrentUser} />; 

  return (
    <div>
            <NavigationBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <br></br>
            <Routes>
            
                <Route path="/wineries" element={<Wineries
                  wineries={wineries}
                  currentUser={currentUser}
                  onChangeRating={onChangeRating}
                  onAddRating={onAddRating}
                />}/> 
                <Route path='/wineries/:wineryId' element={<WineryDetail
                  wineries={wineries}
                  currentUser={currentUser}
                  onChangeRating={onChangeRating}
                  onAddRating={onAddRating}
                />}/>
                 <Route path='/wineries/:wineryId/comments/:commentId/edit' element={<EditCommentForm
                  wineries={wineries}
                  currentUser={currentUser}
                  handleCommentEdit={handleCommentEdit}
                />}/>
                 <Route path='/wineries/:wineryId/comments/:commentId' element={<ShowCommentForm
                  wineries={wineries}
                  currentUser={currentUser}
                />}/>
                
                <Route path="/users" element={<Users
                  users={users}
                  wineries={wineries}
                  currentUser={currentUser}
                />} />
                <Route path="/users/:id" element={<Users
                  users={users}
                  currentUser={currentUser}
                />} />
                <Route path="/login" element={<Login
                 setCurrentUser={setCurrentUser}
                />} />
                <Route path="/signup" element={<SignUp
                  setUsers={setUsers}
                  setCurrentUser={setCurrentUser}
                  onSignup={onSignup}
                />} />
                <Route path="/" element={<Home
                />} />
            </Routes>
        </div>
  );
}

export default App;
