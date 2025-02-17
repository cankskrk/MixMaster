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
