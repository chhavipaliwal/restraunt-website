import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipes, setrecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/recipes");
      setrecipes(res.data.recipes);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <div>
          <div className="flex  justify-between  ml-4 font-medium text-lg p-8 pb-5 items-center">
            <div className="font-rockness text-6xl text-[#734060] ">
              <p>Pinchofyum</p>
            </div>
            <div className="flex gap-10 items-center font-museo">
              <a className="">Home</a>
              <a className="">About</a>
              <a className="">Recipes</a>
              <a className="">Start Here</a>
              <span className="">
                {" "}
                <Icon icon="ic:baseline-search" width={24} />
              </span>
            </div>
          </div>
          <hr className="border-1  border-gray-300 mb-5" />
          <section className="">
            <div className="flex justify-center text-center mb-6  text-xl">
              <h1 className="md:flex md:flex-wrap md:justify-center leading-6 text-black tracking-tight uppercase">
                <span className="block md:inline md:mr-2 font-museo">
                  Simple recipes made for
                </span>{" "}
                <span className="block md:inline home-heading font-rockness text-[#734060]">
                  real, actual, everyday life.
                </span>
              </h1>
            </div>
          </section>
          <div className="flex justify-center mt-4">
            <div className="flex gap-10">
              <button className="hover:bg-[#a87696] text-white h-fit flex items-center py-2 px-5 rounded-lg bg-[#734060]">
                <p className="text-lg">Get Started</p>
              </button>
              <button className="border border-black  h-fit py-2 px-5 rounded-lg hover:text-white hover:bg-[#734060] transition-all">
                <p className="text-lg">Browse Recipes</p>
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <div className="grid grid-cols-3 gap-10">
              <div className="flex flex-col items-center">
                <div className="flex justify-center text-[#734060]">
                  <Icon icon="ic:baseline-restaurant" width={48} />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-semibold">Recipes</h1>
                  <p className="text-gray-500">
                    Discover delicious recipes for every occasion
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center text-[#734060]">
                  <Icon icon="ic:baseline-dinner-dining" width={48} />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-semibold">Cooking Tips</h1>
                  <p className="text-gray-500">
                    Master the art of cooking with our tips
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center text-[#734060]">
                  <Icon icon="ic:baseline-local-dining" width={48} />
                </div>
                <div className="text-center">
                  <h1 className="text-lg font-semibold">Meal Plans</h1>
                  <p className="text-gray-500">
                    Plan your meals with our curated guides
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 pt-10 pl-20 pr-20">
            {recipes.map((recipe) => (
              <Link to={recipe.id} key={recipe.id} className="col-span-1">
                <img
                  src={recipe.image}
                  alt="food"
                  className="rounded-2xl  object-cover mb-2"
                />
                <div>
                  <h1 className="text-lg font-semibold">{recipe.name}</h1>
                  <div className="flex justify-between">
                    <p className="text-gray-500">{recipe.cuisine}</p>
                    <p className="bg-[#925e7f] px-3 text-white rounded-full">
                      {recipe.difficulty}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
