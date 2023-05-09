import { Routes, Route } from "react-router-dom"
import React,{useState} from "react";
import './App.css';
import Signup from  './Component/SignUp';
import Login from './Component/Login';
import Forgot from './Component/Forgot';
import AllProduct from "./Component/AllProduct";
import AddProduct from "./Component/AddProduct";
import Search from "./Component/Search";
import { Context } from "./context/login";
import Navbar from "./Component/Navbar";
function App() {
const [auth, setauth] = useState(localStorage.getItem('auth'));
  const [Role, setRole] = useState(localStorage.getItem('role'));
  return (
    <Context.Provider value={{auth,setauth,Role,setRole}}>
      < Navbar></Navbar>
     <div className="App">

    
    <Routes>
      
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/forgot" element={ <Forgot/> } />
        <Route path="/" element={ <AllProduct/> } />
        <Route path="/add" element={ <AddProduct/> } />
        <Route path="/search/:id" element={ <Search/> } />

        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  </Context.Provider>
   
  );
}

export default App;
