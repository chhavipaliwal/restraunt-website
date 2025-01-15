import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="">
        <div className="px-10 flex gap-10">
          <div className="w-[60%] ">
            <div className="border rounded-xl mb-4 p-10  bg-[#eeeaea]">
              <img
                className="w-full  aspect-video object-contain rounded-xl"
                src={product.images ? product.images[0] : null}
                alt="profile"
              />
            </div>
            <div className="flex">
              <div className="grid grid-cols-10 gap-4 items-center justify-center">
                {product?.images?.map((image) => (
                  <div key={image}>
                    <img
                      src={image}
                      alt="Image 1"
                      className="border-2 w-full border-gray-200 object-cover p-2 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-[30%] font-medium text-lg">
            <h1 className="text-3xl">${product.price}</h1>
            <h1 className="text-3xl">{product.title}</h1>
            <h1 className="text-gray-600">
              Description: {product.description}
            </h1>
            <div className="flex gap-4 mt-4">
              <div className="border border-black text-black  px-4 py-1 rounded-md flex gap-4 items-center">
                <button onClick={() => count > 1 && setCount(count - 1)}>
                  <Icon icon="ic:round-minus" width="24" height="24" />
                </button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>
                  <Icon icon="ic:outline-plus" width="24" height="24" />
                </button>
              </div>
              <button className="bg-black text-white px-4 py-1 rounded-md w-full ">
                Add to Cart
              </button>
            </div>
            <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 mt-2">
              Buy Now
            </button>
            <div className="font-medium text-gray-600">
              <h1 className="text-xl mb-3 mt-2 text-black">Details</h1>
              <p className="">
                --Warrenty Information : {product.warrantyInformation}
              </p>
              <p className="">
                --Shipping Information : {product.shippingInformation}
              </p>
              <p className="">
                --Availability Status : {product.availabilityStatus}{" "}
              </p>
              <p className="">--Return Policy : {product.returnPolicy} </p>
              <p className="">
                --Minimum Order Quamntity : {product.minimumOrderQuantity}{" "}
              </p>
              <p className="">--Brand : {product.brand} </p>
              <p className="">--Sku : {product.sku} </p>
              <p className="">--Weight : {product.weight} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
