import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Typing from "./pages/Typing.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "typing/:difficulty/:lesson/:index",
      element: <Typing />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
