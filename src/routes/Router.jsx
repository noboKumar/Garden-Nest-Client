import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import ExploreGardeners from "../pages/ExploreGardeners";
import BrowseTips from "../pages/BrowseTips";
import ShareGardenTip from "../pages/ShareGardenTip";
import MyTips from "../pages/MyTips";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/ExploreGardeners",
        Component: ExploreGardeners,
      },
      {
        path: "/BrowseTips",
        Component: BrowseTips,
      },
      {
        path: "/ShareGardenTip",
        Component: ShareGardenTip,
      },
      {
        path: "/MyTips",
        Component: MyTips,
      },
      {
        path: "/LogIn",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
