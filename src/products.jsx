import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products"); //for handling promise in api
      // console.log(res);
      setProducts(res.data.products);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 gap-6 px-10">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Link to={`/products/${product.id}`} className="flex flex-col">
        <img
          className="w-full h-full object-cover rounded-xl mb-2"
          src={product.thumbnail}
          alt="profile"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold  line-clamp-1">
            {product.title}
          </h1>
          <p
            className={`text-gray-500 ${isOpen ? "" : "line-clamp-2"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {product.description}
          </p>
          <h2 className="text-xl font-semibold ">${product.price}</h2>
        </div>
      </Link>
    </>
  );
};

export default Products;
