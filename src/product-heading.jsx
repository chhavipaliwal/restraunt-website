import React from "react";

const ProductHeading = () => {
  return (
    <div>
      <div className="flex justify-between mt-6 mb-10 max-w-[96rem] mx-auto px-10">
        <div className="flex gap-10 ml-4 font-medium">
          <a className="">Men</a>
          <a className="">Woman</a>
          <a className="">Kids</a>
          <a className="">Gift</a>
          <a className="">New & Features</a>
        </div>
        <div className="font-medium text-3xl mr-[15%] ">
          <h1>TULOS</h1>
        </div>
        <div className=" flex items-center gap-10 mr-4 font-medium">
          <a href="#">Brand</a>
          <a href="#">About</a>
          <button className="border rounded-xl p-2">Login</button>
        </div>
      </div>
      <div className="flex flex-col mx-auto max-w-4xl mb-12 ">
        <h1 className="text-6xl font-medium mx-auto mb-6 ">
          MAN CLOTHING COLLECTION{" "}
        </h1>
        <p className="text-xl font-medium text-gray-500 mx-auto max-w-2xl text-center mb-6">
          Find verything you need to look and feel your best , and shop the
          latest mens fashion and lifestyle products
        </p>
        <div className="flex justify-between max-w-3xl  ">
          <p className="border rounded-full px-8 py-2 bg-black text-white shadow-slate-500 shadow-md">
            {" "}
            Tshirt
          </p>
          <p className="border-2 border-black rounded-full px-8 py-2 font-semibold shadow-slate-500 shadow-md  ">
            Jacket
          </p>
          <p className="border-2 border-black rounded-full px-8 py-2 font-semibold shadow-slate-500 shadow-md">
            Pants
          </p>
          <p className="border-2 border-black rounded-full px-8 py-2 font-semibold shadow-slate-500 shadow-md">
            Hoodie
          </p>
          <p className="border-2  border-black rounded-full px-8 py-2 font-semibold shadow-slate-500 shadow-md">
            Shorts
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHeading;
