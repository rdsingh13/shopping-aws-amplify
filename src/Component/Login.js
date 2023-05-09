import React,{useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../context/login';
function Login(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [response, setresponse] = useState([])

  const {auth, setauth, Role, setRole } = useContext(Context)
  const navigate = useNavigate();
  var jsonData = {
    userName: username,
    password: password,
  };
  function user(params) {
    setusername(params.target.value);
   
  }
  function pass(params) {
    setpassword(params.target.value);
   
  }

  function handleClick(e) {
    e.preventDefault();
    localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    fetch("http://13.51.177.207:8081/api/v1.0/shopping/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(jsonData),
    })
    .then((res) => res.json())
    
    .then((data) => {

      
      setresponse(data);
      if (data.message==="Login Succesful") {
        localStorage.setItem('auth',true);
        try{

          setauth(true);
        }
        catch{
          
        console.log("error in set auth");
        }
       
       
      } else {
        localStorage.setItem('auth',0);
        window.alert(data.message)
        setauth(false);
      }
    }).catch((err)=>
    console.log("failed to login")
    );
   ///////////ROLE////////////

   fetch(`http://13.51.177.207:8081/api/v1.0/shopping/role/${username}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  })
  .then((res) => res.json())
  
  .then((data) => {
    localStorage.setItem('role', data.message);
   
    try{
      setRole(()=>data.message);
    }
    catch{
      
    }
  });

  navigate("/");
  }
 
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <form onSubmit={handleClick}  className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  
                  className="form-control Username"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                  required onChange={user}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control password"
                  id="password"
                  placeholder="password"
                  required="required" onChange={pass}
                />
                <Link className="form-text text-center  text-dark" to="/forgot">Forgot password ?</Link>
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100 submit" >
                  Login
                </button>
              </div>
              <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                Not Registered? <Link to="/signup">SignUp</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
