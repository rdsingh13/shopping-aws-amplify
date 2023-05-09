import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function AddProduct(props) {

  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState("");
  const [feature, setfeature] = useState("");
  const [status, setstatus] = useState("");
  var jsonData = {
    productName:name,
    productDescription:desc,
    price:price,
    feature:feature,
    productStatus:status
  };
  function namee(params) {
    setname(params.target.value);
   
  }
  function description(params) {
    setdesc(params.target.value);
     
  }
  function pricee(params) {
    setprice(params.target.value);
     
  }
  function featuree(params) {
    setfeature(params.target.value);
     
  }
  function statuss(params) {
    setstatus(params.target.value);
     
  }

  function handleClick(e) {
    e.preventDefault();
    fetch("http://13.51.177.207:8081/api/v1.0/shopping/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" ,
      'Authorization': 'Basic ' + btoa(`${localStorage.getItem('username')}:${localStorage.getItem('password')}`)},
      mode: "cors",
      body: JSON.stringify(jsonData),
    }).then((response) => {
      return response;
    })
    .then((data) => {
      window.alert("Added Successfully");
    }).catch((err)=>{console.log(err)
    console.log("failed to connect backend");});
    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card my-5">
            <form onSubmit={handleClick} className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://testzius.files.wordpress.com/2017/03/my-product.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  aria-describedby="emailHelp"
                  placeholder="Product Name"
                  required="required"
                  onChange={namee}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="productDescription"
                  aria-describedby="emailHelp"
                  placeholder="Product Description"
                  required="required"
                  onChange={description}
                  
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  aria-describedby="emailHelp"
                  placeholder="Price"
                  required="required"
                  onChange={pricee}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="feature"
                  aria-describedby="emailHelp"
                  placeholder="Feature"
                  required="required"
                  onChange={featuree}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="productStatus"
                  aria-describedby="emailHelp"
                  placeholder="Product Status"
                  required="required"
                  onChange={statuss}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-color px-5 mb-5 w-100"
                  
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddProduct.propTypes = {};

export default AddProduct;
