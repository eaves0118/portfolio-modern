import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import { Outlet } from "react-router-dom";
import GlassCard from "./glass-card";
const Layout = () => {
  return (
    <div className="min-h-screen bg-[#0b0b13] relative overflow-hidden p-3">
      <div className="max-w-[700px] mx-auto px-4">
        <GlassCard className="rounded-[32px]">
          <Header />
        </GlassCard>
      </div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-30 top-[100px] left-[100px]"></div>
      <div className="relative">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
