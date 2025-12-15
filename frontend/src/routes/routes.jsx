import Layout from "@components/layout";
import HomePage from "../pages/home-page";
import About from "../pages/about-me";
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
];
