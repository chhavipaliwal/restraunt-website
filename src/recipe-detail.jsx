import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
      setRecipe(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <div className="flex  justify-between  ml-4 font-medium text-lg p-8 pb-5 items-center">
          <div className="font-rockness text-6xl text-[#734060] ">
            <p>Pinchofyum</p>
          </div>
          <div className="flex gap-10 items-center font-museo">
            <a className="">Home</a>
            <a className="">About</a>
            <a className=" text-[#734060]">Recipes</a>
            <a className="">Start Here</a>
            <span className="">
              {" "}
              <Icon icon="ic:baseline-search" width={24} />
            </span>
          </div>
        </div>
        <hr className="border-1  border-gray-400 mb-5" />
        <section className="">
          <div className="flex justify-center text-center mb-10  text-xl">
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
        {/* <div className="flex justify-center mt-4">
              <div className="flex gap-10">
                <button className="border border-black  h-fit py-2 px-5 rounded-lg hover:text-white hover:bg-[#734060] transition-all">
                  <p className="text-lg">Get Started</p>
                </button>
                <button className="hover:bg-[#a87696] text-white h-fit flex items-center py-2 px-5 rounded-lg bg-[#734060]">
                  <p className="text-lg">Browse Recipe</p>
                </button>
              </div>
            </div> */}
        <div className="px-10 flex gap-10">
          <div className="w-[60%] ">
            <div className="border rounded-xl mb-4 p-4">
              <img
                className="w-full  aspect-video object-contain rounded-xl"
                src={recipe.image}
                alt="profile"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-[30%] font-medium">
            <h1 className="text-3xl text-[#734060] font-museo">
              {recipe.name}{" "}
            </h1>
            <div className="flex justify-between">
              <div className="flex flex-col gap-5">
                <p className="font-museo ">
                  Preperation Time: {recipe.prepTimeMinutes} minutes{" "}
                </p>
                <p className="font-museo ">
                  {" "}
                  Cooking Time : {recipe.cookTimeMinutes} minutes
                </p>
                <p className="font-museo "> Serving : {recipe.servings}</p>
                <p className="font-museo ">
                  {" "}
                  calorie : {recipe.caloriesPerServing}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className=" bg-[#734060] rounded-full px-3 w-fit text-white">
                  {recipe.difficulty}{" "}
                </p>
                <p className=" bg-[#734060] rounded-full  px-3 w-fit text-white">
                  {recipe.cuisine}{" "}
                </p>
                <p className=" bg-[#734060] rounded-full  px-3 w-fit text-white">
                  {recipe.mealType}{" "}
                </p>
              </div>
            </div>
            {/* {recipe?.tags?.map((recipe) => (
                  <p className="text-gray-500 font-museo  ">tag: {recipe}</p>
                ))} */}

            <div className="flex gap-4 ">
              <div className="font-medium text-gray-600">
                <h1 className="text-xl mb-3 mt-2 text-black">Details</h1>
                <div className="flex gap-5">
                  <h2 className="text-xl mt-2 text-black">Ingredients: </h2>
                  <div className="flex flex-wrap text-sm mt-4">
                    {recipe?.ingredients?.map((ingredient) => (
                      <p key={ingredient} className="text-gray-500 font-museo ">
                        {ingredient},
                      </p>
                    ))}
                  </div>
                </div>
                <h2 className="text-xl mt-2  text-black">Instructions :</h2>
                {recipe?.instructions?.map((instruction) => (
                  <p
                    key={instruction}
                    className="text-gray-500 font-museo ml-32 text-sm "
                  >
                    {instruction}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
