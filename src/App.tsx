import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Cocktail,
  Error,
  Landing,
  Newsletter,
} from "./pages";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cocktail",
          element: <Cocktail />,
        },
        {
          path: "/newsletter",
          element: <Newsletter />,
        },
        {
          path: "/landing",
          element: <Landing />,
        },
        {
          path: "/error",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
