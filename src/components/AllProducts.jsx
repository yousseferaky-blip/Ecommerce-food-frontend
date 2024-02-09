import React, { useEffect, useState } from "react"; // استيراد useState
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/product/Product";
import { CiForkAndKnife } from "react-icons/ci";
import Cards from "../components/Cards";

const AllProducts = () => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchProduct());
    }, []);
  
    const [selectedCategory, setSelectedCategory] = useState("");
    const [uniqueCategories, setUniqueCategories] = useState([]);
  
    useEffect(() => {
      const categories = product.data && product.data.products ? product.data.products.map(p => p.category) : [];
      const uniqueCategoriesSet = new Set(categories);
      setUniqueCategories([...uniqueCategoriesSet]);
    }, [product.data]);
   
    const filterProducts = (category) => {
      setSelectedCategory(category);
    };
  
  return (
    <div>
        
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {uniqueCategories.map((category, index) => (
          <div key={index} onClick={() => filterProducts(category)}>
            <div className="text-3xl p-5  rounded-full cursor-pointer bg-yellow-500">
              <CiForkAndKnife />
            </div>
            <p className="text-center font-medium my-1 capitalize">
              {category}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {product.loading ? (
          <p>Loading...</p>
        ) : product.error ? (
          <p>{product.error}</p>
        ) : product.data ? (
          product.data.products
            .filter((p) =>
              selectedCategory ? p.category === selectedCategory : true
            )
            .map((p) => <Cards p={p} />)
        ) : (
          <p>No product data available.</p>
        )}
      </div>

    </div>
  );
};

export default AllProducts;
