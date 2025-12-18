import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import { Outlet } from "react-router-dom";

import StarBackground from "./star-background";
import { cn } from "../lib/utils";
const Layout = () => {
  return (
    <>
      <div className="relative w-full bg-background text-foreground overflow-x-hidden">
        <Header />
        <StarBackground />
        <div className="container min-h-screen relative flex flex-1 h-full flex-col justify-center">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
