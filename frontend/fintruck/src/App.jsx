import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Income from "./pages/Dashboard/Income"
import Home  from "./pages/Dashboard/Home"
import Expense from "./pages/Dashboard/Expense";

const App = () => {
  return (
    <div>
   <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/Login" exact element={<Login/>}/>
      <Route path="/SignUp"exact element={<SignUp/>}/>
      <Route path="/dashboard" exact element={<Home />}/>
      <Route path="Income" exact element={<Income />} />
      <Route path="Expense" exact element={<Expense />} />

    </Routes>
   </Router>
    </div>
  )
}

export default App
