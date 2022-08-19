import { useEffect, useState } from "react";
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
    <header className={`${isScroll && "bg-red-500"}`}>
      <div className="justify-between w-full lg:flex  md:flex ">
        <div className="flex items-center justify-between  md:block">
          <a href="javascript:void(0)">
            <h2 className="text-2xl font-bold text-white">LOGO</h2>
          </a>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
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
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">Home</a>
            </li>
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">Blog</a>
            </li>
            <li className="text-white hover:text-indigo-200">
              <a href="javascript:void(0)">About US</a>
            </li>
            <li className="text-white hover:text-indigo-200">
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
            className="inline-block w-full md:w-40  px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 "
          >
            Sign in
          </a>
          <a
            href="javascript:void(0)"
            className="inline-block w-full mt-3 md:mt-0 md:w-40 px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
