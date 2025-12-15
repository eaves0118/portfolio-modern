import React from "react";
import GlassCard from "./glass-card";
import { Facebook, GitHub, Mail } from "./common/icons";
const Footer = () => {
  return (
    <footer className="bg-background text-[#9f9fa9] border-gradient-top">
      <div className="container flex   flex-col items-center md:flex-row">
        <div className="md:w-1/2 py-5">
          <div className="flex flex-col justify-center text-center md:text-start">
            <h1 className="text-gradient text-2xl font-bold">Hieu.Dev</h1>
            <span>© 2025 Hieu Dev. All rights reserved.</span>
          </div>
        </div>
        <div className="md:w-1/2 py-5">
          <div className="flex justify-center gap-4">
            <GlassCard className="p-2 rounded-full text-[#9f9fa9] hover:text-white transition-colors duration-300 cursor-pointer">
              <Facebook />
            </GlassCard>

            <GlassCard className="p-2 rounded-full text-[#9f9fa9] hover:text-white transition-colors duration-300 cursor-pointer">
              <GitHub />
            </GlassCard>

            <GlassCard className="p-2 rounded-full text-[#9f9fa9] hover:text-white transition-colors duration-300 cursor-pointer">
              <Mail />
            </GlassCard>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
