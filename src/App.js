import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import BookDetail from "./pages/BookDetail";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import AddBook from "./pages/AddBook";
import Library from "./pages/Library";
import Dashboard from "./pages/admin/Dashboard";
import ChangePassword from "./pages/login/ChangePassword";
import ForgetPassword from "./pages/login/ForgetPassword";
import OTP from "./pages/login/OTP";
import { Users } from "./pages/admin/Users";
import Books from "./pages/admin/Books";
import Notification from "./pages/admin/Notification";
import Userdashboard from "./pages/user/Userdashboard";




function App() {
  return (
   <div>
     
     
      <Navbar />
      
      <Routes>
      
        {/* Temporary Routes */}
        <Route path="/dashboard/users" element={<Users/>}/>
        <Route path="/dashboard/books" element={<Books/>}/>
        <Route path="/dashboard/notification" element={<Notification/>} />
        <Route path="/userdashboard" element={<Userdashboard/>} />


        {/* Need to be imporved routes */}
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library/>} />
        
        <Route path="/library/detail/:i" element={<BookDetail />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/login/forgetpassword/enterotp" element={<OTP/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<UserInfo/>} />
        <Route path="/profile/changepassword" element={<ChangePassword/>} />
        <Route path="profile/add" element={<AddBook/>} />
        <Route path="dashboard/profile/admin/users" element={<Users/>} />
        <Route path="dashboard/profile/admin/Books" element={<Books/>} />
        <Route path="dashboard/profile/admin/notification" element={<Notification/>} />
        <Route path="*" element={<p style={{padding: "100px",marginLeft:"100px",fontSize:"30px",color:"red"}}>There's nothing here: 404!</p>} />
        
      </Routes>
      
      
      
     
   </div>
  );
}


export default App;
