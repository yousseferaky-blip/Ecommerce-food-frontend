import axios from "axios";
import React, { useEffect, useState } from "react";
import { API, PRODUCT } from "./Api";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import AllProducts from "./AllProducts";

const Product = () => {
  const [product, setProduct] = useState([]);
  const params = useParams().id;
  
  useEffect(() => {
    const fetchProduct = async () => { 
      try {
        const response = await axios.get(`${API}/${PRODUCT}/${params}`);
        setProduct(response.data.product);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct(); 
  }, [params]);

  return (
  <div className="p-2 md:p-4 flex flex-col gap-6">

   <ProductDetails product={product}/>

    <AllProducts />

  </div>
  )
};

export default Product;

