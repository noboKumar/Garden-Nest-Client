import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
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
import BrowseTipsDetails from "../pages/BrowseTipsDetails";
import UpdateMyTips from "../pages/UpdateMyTips";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import DashBoard from "../Layouts/DashBoard";

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
        loader: () =>
          fetch("https://ph-assignment-10-server-pi.vercel.app/users"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/BrowseTips",
        Component: BrowseTips,
        loader: () =>
          fetch("https://ph-assignment-10-server-pi.vercel.app/browseTips"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/BrowseTips/:id",
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-10-server-pi.vercel.app/browseTips/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRouter>
            <BrowseTipsDetails></BrowseTipsDetails>
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
        path: "/updateTips/:id",
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-10-server-pi.vercel.app/browseTips/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
        Component: UpdateMyTips,
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: (
      <PrivateRouter>
        <DashBoard></DashBoard>
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRouter>
            <MyTips></MyTips>
          </PrivateRouter>
        ),
      },
      {
        path: "ShareGardenTip",
        element: (
          <PrivateRouter>
            <ShareGardenTip></ShareGardenTip>
          </PrivateRouter>
        ),
      },
      {
        path: "MyTips",
        element: (
          <PrivateRouter>
            <MyTips></MyTips>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
