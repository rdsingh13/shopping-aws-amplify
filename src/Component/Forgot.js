import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Forgot(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [response, setresponse] = useState("");
  const [show, setshow] = useState(false)
  var jsonData = {
    email: email,
    newPassword: password,
  };
  function ema(params) {
    setemail(params.target.value);
   
  }
  function pass(params) {
    setpassword(params.target.value);
   
  }

  const handleClick = async (e) =>  {
    e.preventDefault();
    setshow(false); 
   await fetch("http://13.51.177.207:8081/api/v1.0/shopping/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(jsonData),
    })
      .then((res) => res.json())
      
      .then((data) => {

        setresponse(data);
        if (response.message=="Email id is incorrect") {
            setshow(true); 
        }
      })
      .catch((err) => {
       console.log(err);
       console.log("failed to send request");
      });
  }
    
     
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/126/739/original/question-mark-icon-free-vector.jpg"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required="required"
                  onChange={ema}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="New Password"
                  required="required"
                  onChange={pass}
                />
              </div>
              {show &&<div  className="alert alert-primary" role="alert">
        User Not Registered
      </div>}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-100"
                  onClick={handleClick}
                >
                  Set
                </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Not Registered? <Link to="/signup">SignUp</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Forgot.propTypes = {};

export default Forgot;
