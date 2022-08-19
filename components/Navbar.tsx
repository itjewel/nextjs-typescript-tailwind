import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [navbar, setNavbar] = useState(false);
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
    <header className={`${isScroll && "bg-[#4A5568]"}`}>
      <div className="justify-between w-full lg:flex  md:flex ">
        <div className="flex items-center justify-between  md:block">
          <a href="javascript:void(0)">
            <img
              className="scale-100 hover:scale-150 ease-in duration-500"
              src="https://www.product-reviews.net/down/wp-content/uploads/2020/03/netflixlogo.png"
              alt=""
              width={80}
              height={80}
            />
          </a>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <AiOutlineClose className="h-6 w-6 font-light text-white" />
              ) : (
                <AiOutlineMenu className="h-6 w-6 font-light text-white" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center md:px-16 space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="headerLink">
              <a href="javascript:void(0)">Home</a>
            </li>
            <li className="headerLink">
              <a href="javascript:void(0)">Blog</a>
            </li>
            <li className="headerLink">
              <a href="javascript:void(0)">About US</a>
            </li>
            <li className="headerLink">
              <a href="javascript:void(0)">Contact US</a>
            </li>
          </ul>
        </div>
        <div
          className={`md:space-x-3 md:inline-block ${
            navbar ? "block" : "hidden"
          }`}
        >
          <a
            href="javascript:void(0)"
            className="inline-block w-full md:w-32  px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 "
          >
            Sign in
          </a>
          <a
            href="javascript:void(0)"
            className="inline-block w-full mt-3 md:mt-0 md:w-32 px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
