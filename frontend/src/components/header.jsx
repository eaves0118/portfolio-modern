import { Link } from "react-router-dom";

const Header = () => {
  const navigation = [
    {
      content: "Trang chủ",
      path: "#",
    },
    {
      content: "Blogs",
      path: "#",
    },
    {
      content: "Lập trình",
      path: "#",
    },
    {
      content: "Một chút về tôi",
      path: "#",
    },
  ];
  return (
    <header className="p-3 flex flex-row gap-4 justify-center items-center">
      {navigation.map((item, index) => (
        <Link className="text-white p-2" key={index} to={item.path}>
          {item.content}
        </Link>
      ))}
    </header>
  );
};

export default Header;
