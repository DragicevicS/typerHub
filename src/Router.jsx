import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Lesson from "./pages/Lesson.jsx";
import Test from "./pages/Test.jsx";
import BugReport from "./pages/BugReport.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "lesson/:difficulty/:lesson/:index",
      element: <Lesson />,
      errorElement: <Error />,
    },
    {
      path: "/test/:difficulty",
      element: <Test />,
      errorElement: <Error />,
    },
    {
      path: "bug-report",
      element: <BugReport />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
