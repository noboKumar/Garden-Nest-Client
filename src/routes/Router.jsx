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
import PrivateRouter from "./PrivateRouter";
import Loading from "../Components/Loading";

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
        loader: () => fetch("http://localhost:3000/users"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/BrowseTips",
        Component: BrowseTips,
        loader: () => fetch("http://localhost:3000/browseTips"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/ShareGardenTip",
        element: (
          <PrivateRouter>
            <ShareGardenTip></ShareGardenTip>
          </PrivateRouter>
        ),
      },
      {
        path: "/MyTips",
        element: (
          <PrivateRouter>
            <MyTips></MyTips>
          </PrivateRouter>
        ),
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
