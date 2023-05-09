import ProductCard from "./ProductCard";
import "./AllProduct.css";
import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { Context } from '../context/login';
const AllProduct = () => {
  const [products, setproducts] = useState([]);
  const [err, seterr] = useState(false);
  const [length, setlength] = useState(0);
  const [loading, setloading] = useState(true);
  const l = products.length;
  const {auth, setauth, Role, setRole } = useContext(Context)
  const fetchUserData = () => {
    fetch("http://13.51.177.207:8081/api/v1.0/shopping/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          btoa(
            `${localStorage.getItem("username")}:${localStorage.getItem(
              "password"
            )}`
          ),
      },
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setloading(false);
        setlength(data.length);
        setproducts(data);
      console.log(data);

      })
      .catch((err) => {
        console.log(err);
        seterr(true);
      });
  };

  function del(id) {
    setproducts((data) => data.filter((data) => data.id !== id));
    setlength(products.length);
    console.log(length);
    // window.alert("deleted");
  }
  function upd(id) {
    const update = products.map((products) => {
      if (products.id === id) {
        return {
          ...products,
          productStatus: "Out of Stock",
        };
      } else {
        return products;
      }
      
    });
    setproducts(update);

    // window.alert("Updated");
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {/* {err &&(
        <div className="card text-center container">
          <div className="card-header">
            <h1 className=" position-relative "> Failed To Fetch</h1>
          </div>
        </div>
      )} */}
      {/* {length<1 && loading && (
      <div className="card text-center container">
      <div className="card-header">
       <h1 className="btn  position-relative "> Failed To Fetch</h1>
      </div>
      </div>
    )} */}


{
   typeof(products.length) == "undefined" &&(
    <div className="card-body">
            <h1 className="card text-center container card-header position-relative "> No Product Listed</h1>
          </div>
  )
}
      
      {products.length > 0 && (
        <ul className="all">
          {products.map((products) => (
            <ProductCard
              key={products.id}
              id={products.id}
              productName={products.productName}
              productDescription={products.productDescription}
              price={products.price}
              feature={products.feature}
              productStatus={products.productStatus}
              del={del}
              upd={upd}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default AllProduct;
