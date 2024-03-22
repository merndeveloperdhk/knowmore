import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Components/pages/MainLayout/MainLayout";
import Home from "../Components/pages/Home/Home";
import Layout from "../Components/pages/Layout/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/layout',
          element:<Layout></Layout>
        }
      ]
    },
  ]);

  export default router;