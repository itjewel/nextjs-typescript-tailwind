import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScroll && "bg-red-500"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <div>
          Logo
          {/* <img
            src="https://img.icons8.com/color/344/slack.png"
            width={70}
            height={70}
            className="cursor-pointer object-contain"
          /> */}
        </div>
        <div>
          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">About</li>
            <li className="headerLink">Contact</li>
            <li className="headerLink">Login</li>
            <li className="headerLink">Registration</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <AiOutlineSearch className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <Link href="/signup">
          <a>
            <AiOutlineMenu className="h-6 w-6" />
          </a>
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
