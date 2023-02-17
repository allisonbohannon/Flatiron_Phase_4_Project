import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "../pages/Home";
import Wineries from "../pages/Wineries";
import Users from "../pages/Users";
import WineryDetail from "../pages/WineryDetail";
import EditCommentForm from "../pages/EditCommentForm";
import ShowCommentForm from "../pages/ShowCommentForm";
import AddCommentForm from "../pages/AddCommentForm";
import {averageRating} from "../functions/AverageRating";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { wineryTest, userTest } from "../testdata";
import { UserContext } from "../context/User";

function App() {
  const [wineries, setWineries] = useState(wineryTest)
  const [users, setUsers] = useState(userTest)
  const { currentUser, setCurrentUser} = useContext(UserContext)

  //useEffect to fetch initial state

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);


  useEffect(() => {
    const wineriesWithAverageRating = wineryTest.map(winery => ({...winery, avgRating: averageRating(winery)}))
    setWineries(wineriesWithAverageRating)
    }, [])


  const onAddComment = (comment) => {
    console.log(comment)

  }

  const onCommentEdit = (updatedWinery) => {
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
            <NavigationBar />
            <br></br>
            <Routes>
            
                <Route path="/wineries" element={<Wineries
                  wineries={wineries}
                  onChangeRating={onChangeRating}
                  onAddRating={onAddRating}
                />}/> 
                <Route path='/wineries/:wineryId' element={<WineryDetail
                  wineries={wineries}
                  onChangeRating={onChangeRating}
                  onAddRating={onAddRating}
                />}/>
                 <Route path='/wineries/:wineryId/comments/:commentId/edit' element={<EditCommentForm
                  wineries={wineries}
                  onCommentEdit={onCommentEdit}
                />}/>
                 <Route path='/wineries/:wineryId/comments/new' element={<AddCommentForm
                  wineries={wineries}
                  users={users}
                  onAddComment={onAddComment}
                />}/>
                 <Route path='/wineries/:wineryId/comments/:commentId' element={<ShowCommentForm
                  wineries={wineries}
                />}/>
                <Route path="/users" element={<Users
                  users={users}
                  wineries={wineries}
                />} />
                <Route path="/users/:id" element={<Users
                  users={users}
                />} />
                <Route path="/login" element={<Login
                />} />
                <Route path="/signup" element={<SignUp
                  onSignup={onSignup}
                />} />
                <Route path="/" element={<Home
                />} />
            </Routes>
        </div>
  );
}

export default App;
