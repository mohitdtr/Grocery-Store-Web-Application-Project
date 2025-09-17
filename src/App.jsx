import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/layout"; // ✅ Capital L

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // ✅ Capital L
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Fruits",
          element: <Fruits />,
        },
        {
          path: "/Dairy",
          element: <Dairy />,
        },
        {
          path: "/SeaFood",
          element: <SeaFood />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
