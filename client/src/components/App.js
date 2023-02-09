import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar";
import Wineries from "../pages/Wineries";
import Users from "../pages/Users";




function App() {

  //useState for wineries and users 
  //useEffect to set initial states 


  return (
     <div>
            <NavigationBar/>
            <Routes>
                {/* <Route path="/read" element={<CompletedReads
                    bookList={bookList}
                    handleUpdate={onUpdate}
                    handleDelete={onDelete}
                />} />
                 <Route path="/unread" element={<CompletedReads
                    bookList={bookList}
                    handleUpdate={onUpdate}
                    handleDelete={onDelete}
                />} />
                <Route path="/" element={<Home
                    bookList={bookList}
                    handleAdd={onAdd}
                    handleUpdate={onUpdate}
                    handleDelete={onDelete}
                />} /> */}
            </Routes>
        </div>
  );
}

export default App;
