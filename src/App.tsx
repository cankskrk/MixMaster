import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Cocktail,
  Error,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages";
import "./App.css";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/about",
          element: <About />,
          children: [
            {
              index: true,
              element: <h2>Our company</h2>,
            },
            {
              path: "person",
              element: <h2>John Doe</h2>,
            },
          ],
        },
        {
          path: "/cocktail/:id",
          errorElement: <SinglePageError />,
          element: <Cocktail />,
          loader: singleCocktailLoader,
        },
        {
          path: "/newsletter",
          element: <Newsletter />,
        },
        {
          index: true,
          element: <Landing />,
          errorElement: <SinglePageError />,
          loader: landingLoader,
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
