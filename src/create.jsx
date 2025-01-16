import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const Create = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isChecked: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.isChecked) {
      // alert("Form submitted!");
      alert(`Email: ${data.email}\nPassword: ${data.password}`);
      console.log(data);
    } else {
      alert("Please agree to the terms and conditions");
    }
  };

  return (
    <div className=" h-screen  bg-[#2b2738] p-4 flex text-white ">
      <div className="w-1/2 h-full flex-1 relative">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="mountain.jpg"
          alt="profile"
        />
        <div className="absolute top-0 left-0 flex justify-between flex-col h-full w-full">
          <div className="mt-4 flex justify-end mr-4">
            <button
              className="bg-[#243d76] text-white py-2 px-6 rounded-full mt-4 flex items-center gap-2"
              type="submit"
            >
              <span>Back to website</span>
              <Icon icon="ri:arrow-right-line" />
            </button>
          </div>

          <div className="mb-20">
            <h1 className=" text-center text-5xl mb-3 font-normal">
              Capturing Moments,
            </h1>
            <h1 className=" text-center text-5xl  font-normal">
              Creating Memories
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full  flex-1 pt-16  ">
        <div>
          <h1 className="text-6xl text-medium text-center pb-8 ">
            Create an Account
          </h1>
          <p className="text-gray-400 text-center text-md mb-8">
            Already have an Account?
            <a href="" className="text-blue-300">
              Log in{" "}
            </a>
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4 max-w-xl pl-36"
        >
          <div>
            <input
              name="firstName"
              className="bg-[#3b364c] p-2 w-full rounded-lg"
              type="text"
              placeholder="First Name"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="lastName"
              className="bg-[#3b364c] p-2 w-full rounded-lg"
              type="text"
              placeholder="Last Name"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <input
              name="email"
              className=" p-2 rounded-lg w-full bg-[#3b364c]"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 col-span-2">
            <input
              name="password"
              className=" p-2  rounded-lg w-full bg-[#3b364c]"
              type="password"
              placeholder=" Enter your Password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="text-start col-span-2 w-full  ">
            <label className="">
              <input
                type="checkbox"
                name="isChecked"
                value={data.isChecked}
                onChange={(e) => {
                  setData({ ...data, isChecked: e.target.checked });
                }}
                className="w-5 h-4 "
              />
              <span className="col-span-2 text-xs  ">
                {" "}
                I agree to the{" "}
                <a href="" className="text-blue-400">
                  terms and conditions
                </a>
              </span>
            </label>
          </div>
          <button
            className="w-full active:scale-95 hover:bg-blue-400 transition-all bg-blue-500 text-white py-2 rounded-lg col-span-2  mt-8"
            type="submit"
          >
            Create Account
          </button>
          <div className="flex items-center mt-6 col-span-2">
            <hr className="flex-grow border-t border-gray-400 " />
            <span className="mx-4 text-gray-500">or Register with</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>
          <div className="flex flex-col items-center mr-2">
            <button
              className="w-full flex items-center justify-center border hover:bg-gray-600 border-gray-400 text-white py-2 rounded-lg mt-4"
              type="submit"
            >
              <Icon
                icon="flat-color-icons:google"
                width="24"
                className="mr-2"
              />
              <span>Google</span>
            </button>
          </div>

          <div className="flex flex-col items-center ml-2">
            <button
              className="w-full flex items-center justify-center border hover:bg-gray-600 border-gray-400 text-white py-2 rounded-lg mt-4"
              type="submit"
            >
              <Icon icon="hugeicons:apple" width="24" className="mr-2" />
              <span>Apple</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
