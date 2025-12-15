import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import { Outlet } from "react-router-dom";

import StarBackground from "./star-background";
import { cn } from "../lib/utils";
const Layout = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-background text-foreground overflow-x-hidden">
        <StarBackground />

        <Header />

        <div className="container relative flex flex-1 min-h-screen flex-col">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
