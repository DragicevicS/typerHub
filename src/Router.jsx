import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Lesson from "./pages/Lesson.jsx";
import Practice from "./pages/Practice.jsx";
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
      path: "/practice/:difficulty/:index",
      element: <Practice />,
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
