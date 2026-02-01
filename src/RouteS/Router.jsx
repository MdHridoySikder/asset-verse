import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOuts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/Shared/NotFund/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/",
        element: Home,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
