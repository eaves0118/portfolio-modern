import React from "react";
import { navigation } from "./constant";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";
const DesktopNav = () => {
  return (
    <div className="flex gap-4 hidden md:flex">
      {navigation.map((item, index) => (
        <Link
          className="relative after:content-['']
          after:absolute after:left-0 after:bottom-0 after:h-[2px]
          after:w-full after:bg-gradient-to-r after:from-indigo-400
          after:to-pink-400 after:scale-x-0 after:origin-left after:transition-transform
          after:duration-300 hover:after:scale-x-100 text-foreground/80 hover:text-primary"
          key={index}
          to={item.path}
        >
          {item.content}
        </Link>
      ))}
    </div>
  );
};

const DesktopMobile = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <button
        className="flex md:hidden p-2 text-foreground z-50"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden min-h-screen",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex gap-4 flex-col space-y-8 w-full px-4">
          {navigation.map((item, index) => (
            <Link
              className="relative text-foreground/80 hover:text-primary text-center"
              key={index}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.content}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export { DesktopNav, DesktopMobile };
