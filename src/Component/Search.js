import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Search() {
  const { id } = useParams();
  const [products, setproducts] = useState([]);

  const fetchUserData =  () => {
     fetch(
      `http://13.51.177.207:8081/api/v1.0/shopping/products/search/${id}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(`${localStorage.getItem('username')}:${localStorage.getItem('password')}`),
        },
        mode: "cors",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setproducts(data);
      }).catch((err)=>
      console.log("failed to connect")
      );;
  };

  useEffect(() => {
   
    fetchUserData();
  },[id]);
  function del(id) {
    setproducts((data) => data.filter((data) => data.id !== id));

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
  return (
    <div>
      {products.length > 0 && (
        <ul>
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
    </div>
  );
}

export default Search;
