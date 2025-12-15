import { Link } from "react-router-dom";
import Button from "./button";
import { ArrowRight } from "lucide-react";
const Header = () => {
  const navigation = [
    {
      content: "Blogs",
      path: "#",
    },
    {
      content: "Programming",
      path: "#",
    },
    {
      content: "Project",
      path: "#",
    },
    {
      content: "Skills",
      path: "#",
    },
    {
      content: "About me",
      path: "#",
    },
  ];
  return (
    <header className="p-3 flex flex-row gap-4 justify-between items-center">
      <h1 className="text-gradient text-3xl font-bold cursor-pointer">
        ProDev
      </h1>

      {navigation.map((item, index) => (
        <Link
          className="relative after:content-['']
          after:absolute after:left-0 after:bottom-0 after:h-[2px]
          after:w-full after:bg-gradient-to-r after:from-indigo-400
          after:to-pink-400 after:scale-x-0 after:origin-left after:transition-transform
          after:duration-300 hover:after:scale-x-100 text-[#9f9fa9]"
          key={index}
          to={item.path}
        >
          {item.content}
        </Link>
      ))}
      <div>
        <Button
          content="Read more"
          icon={<ArrowRight />}
          className="border px-4 py-2 text-white rounded-[32px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
      </div>
    </header>
  );
};

export default Header;
