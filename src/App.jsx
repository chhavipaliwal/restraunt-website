import React from "react";
import LoginForm from "./login";
import Profile from "./profile";
import Create from "./create";
import Table from "./table";
import Useffect from "./useffect";
import Products from "./products";
import Detail from "./detail";
import ProductHeading from "./product-heading";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./home";
import RecipeDetail from "./recipe-detail";
// const ProductLayout = () => {
//   return (
//     <>
//       <ProductHeading />
//       <Outlet />
//     </>
//   );
// };

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
