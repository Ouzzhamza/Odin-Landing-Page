import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [services, setServices] = useState(false);

  const HandleNav = () => {
    setNav(!nav);
    if (window.innerWidth > 1280) 
      setServices(false)
  };

  const HandleServices = () => {

    setServices(!services)
  }

  useEffect (() => {
  
    window.addEventListener("resize", HandleNav);

    return () => {
      window.removeEventListener("resize", HandleNav);
    };

  }, []);
  return (
    <nav className="navbar flex justify-around items-center h-24 text-white bg-transparetnt">
      <h1 className="Logo text-5xl font-bold text-cyan-700">AllForOne</h1>
      <ul className="hidden xl:flex justify-between">
        <li
          onMouseEnter={() => setServices(true)}
          onMouseLeave={() => setServices(false)}
          className="text-xl p-7 cursor-pointer w-[300px] text-end"
        >
          <h1 className=" hover:text-cyan-700 ">Services</h1>
          <ul
            className={
              services
                ? "absolute flex flex-col text-center top-20 gap-10"
                : "hidden"
            }
          >
            <li>
              <a className="text-xl hover:text-cyan-700" href="./Navbar.jsx">
                Property Management
              </a>
            </li>
            <li>
              <a className="text-xl hover:text-cyan-700" href="./Navbar.jsx">
                Booking Engine
              </a>
            </li>
            <li>
              <a className="text-xl hover:text-cyan-700" href="./Navbar.jsx">
                Revenue Management
              </a>
            </li>
            <li>
              <a className="text-xl hover:text-cyan-700" href="./Navbar.jsx">
                Advertising
              </a>
            </li>
          </ul>
        </li>
        <li className="text-xl p-7 hover:text-cyan-700 cursor-pointer">
          Pricing
        </li>
        <li className="text-xl p-7 hover:text-cyan-700 cursor-pointer">
          Company
        </li>
      </ul>
      <ul className="hidden xl:flex justify-between">
        <li className="text-xl p-7 hover:text-cyan-700 cursor-pointer">
          Register
        </li>
        <li className="text-xl p-7 hover:text-cyan-700 cursor-pointer">
          Login
        </li>
      </ul>
      <div onClick={HandleNav} className="flex xl:hidden">
        {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      <div
        className={
          nav
            ? "flex justify-center absolute top-[15%] w-[70%] border-b border-b-cyan-700 ease-out duration-700 xl:hidden"
            : "flex justify-center absolute -top-[100%] ease-out duration-1000 xl:hidden"
        }
      >
        <ul>
          <li
            onClick={HandleServices}
            className=" p-4"
          >
            <h1 className="pl-4 text-2xl hover:text-cyan-700 cursor-pointer">Services</h1>
            <ul
              className={
                services
                  ? "flex flex-col pt-4 h-[200px] justify-between "
                  : "hidden"
              }
            >
              <li>
                <a className="text-xl hover:text-cyan-700" href="./Navbar.jsx">
                  Property Management
                </a>
              </li>
              <li>
                <a className="text-xl hover:text-cyan-700" href="./Navbar.jsx">
                  Booking Engine
                </a>
              </li>
              <li>
                <a className="text-xl hover:text-cyan-700" href="./Navbar.jsx">
                  Revenue Management
                </a>
              </li>
              <li>
                <a className="text-xl hover:text-cyan-700" href="./Navbar.jsx">
                  Advertising
                </a>
              </li>
            </ul>
          </li>
          <li className="p-4">
            <a className="p-4 text-2xl hover:text-cyan-700" href="./Navbar.jsx">
              Pricing
            </a>
          </li>
          <li className="p-4">
            <a className="p-4 text-2xl hover:text-cyan-700" href="./Navbar.jsx">
              Company
            </a>
          </li>
          <li className="p-4">
            <a className="p-4 text-2xl hover:text-cyan-700" href="./Navbar.jsx">
              Register
            </a>
          </li>
          <li className="p-4">
            <a className="p-4 text-2xl hover:text-cyan-700" href="./Navbar.jsx">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
