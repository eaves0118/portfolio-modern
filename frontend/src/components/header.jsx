import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Theme from "./theme";
import { DesktopNav, DesktopMobile } from "./common/desktop-nav";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "container fixed z-40 transition-all left-0 right-0 duration-300 mx-auto py-4"
      )}
    >
      <div className="flex flex-row gap-4 justify-between items-center">
        <h1 className="text-gradient text-3xl font-bold cursor-pointer">
          <Link to="/">Hieu.Dev</Link>
        </h1>

        {/* Desktop-nav */}
        <DesktopNav />
        <DesktopMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Theme />
      </div>
    </header>
  );
};

export default Header;
