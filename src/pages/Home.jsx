import React, { useEffect, useState } from "react"; // استيراد useState
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/product/Product";
import { API } from "../components/Api";
import HomeSection from "./HomeSection";
import { Link } from "react-router-dom";
import { CiForkAndKnife } from "react-icons/ci";
import Cards from "../components/Cards";
import AllProducts from "../components/AllProducts";

const Home = () => {
 
  return (
    <div className="p-2 md:p-4 bg-slate-200">
      <HomeSection />

      <AllProducts />  


    </div>
  );
};

export default Home;
