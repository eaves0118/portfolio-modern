import Layout from "@components/layout";
import HomePage from "../pages/home-page";

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
