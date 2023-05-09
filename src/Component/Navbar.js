import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../context/login';




function Navbar() {
  const {auth,setauth,Role,setRole} = useContext(Context)
 // const auth=localStorage.getItem('auth');
 
  const navigate = useNavigate();
  const [name, setname] = useState("/");
  function search(e) {
    e.preventDefault();
    setname(e.target.value);
  }
  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("auth");
    localStorage.removeItem("role")
    setauth(false);
   setRole("");
    
    navigate("/login");
  }
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SHOP
          </Link>
          
          <form className="d-flex input-group w-auto">
            {!auth&&(
          <div>
          <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">
              Login
            </Link>
            <Link className="btn btn-outline-success my-2 my-sm-0" to="/signup">
              SignUp 
            </Link>   
          </div>)}

          {Role==="ADMIN" && (
          <Link className="btn btn-outline-success my-2 my-sm-0" to="/add">
              Add
            </Link> )}
            {auth && (
              <>
               
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>
                LogOut
              </button>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                onChange={search}
                aria-label="Search"
              />
  
              <Link
                className="btn btn-outline-success my-2 my-sm-0"
                to={`/search/${name}`}
              >
                Search
              </Link>
              </>
            )}
            
            
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
