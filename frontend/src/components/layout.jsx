import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import { Outlet } from "react-router-dom";
import GlassCard from "./glass-card";
import Blobs from "./blobs";
const Layout = () => {
  return (
    <div className="min-h-screen bg-[#0b0b13] relative overflow-hidden p-3">
      <Blobs />
      <div className="max-w-[800px] mx-auto px-4">
        <GlassCard className="animate-in slide-in-from-top rounded-[42px] px-3 py-2">
          <Header />
        </GlassCard>
      </div>
      <div className="relative min-h-screen flex">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
