import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Level from "./pages/Level.jsx";
import Error from "./pages/Error.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "level/:difficulty/:lesson/:index",
      element: <Level />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
