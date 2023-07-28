import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const HandleNav = () => {
    setNav(!nav);
  };


  return (
    <nav className="navbar flex justify-around items-center h-24 bg-transparetnt z-20 relative">
      <h1 className="Logo text-5xl font-bold text-white">
        <Link className="text-white font-bold hover:text-cyan-600" to='./'>AllForOne</Link>
      </h1>
      <ul className="hidden xl:flex justify-between">
        <li className="text-xl p-7">
          <Link className="text-white font-bold hover:text-cyan-600" to="./Services">Services </Link>
        </li>
        <li className="text-xl p-7">
          <Link className="text-white font-bold hover:text-cyan-600" to="./Navbar.tsx">Pricing</Link>
        </li>
        <li className="text-xl p-7">
          <Link className="text-white font-bold hover:text-cyan-600" to="./Navbar.tsx">Company</Link>
        </li>
      </ul>
      <ul className="hidden xl:flex justify-between">
        <li className="text-xl p-7">
          <Link className="text-white font-bold hover:text-cyan-600" to="./Register">Register</Link>
        </li>
        <li className="text-xl p-7">
          <Link className="text-white font-bold hover:text-cyan-600" to="./Login">Login</Link>
        </li>
      </ul>
      <div onClick={HandleNav} className="flex xl:hidden">
        {!nav ? (
          <AiOutlineMenu size={30} color="black" />
        ) : (
          <AiOutlineClose size={30} color="black" />
        )}
      </div>
      <div
        className={
          nav
            ? "flex justify-center absolute top-[15%] w-[70%] border-b border-b-black ease-out duration-700 xl:hidden"
            : "flex justify-center absolute -top-[100%] ease-out duration-1000 xl:hidden"
        }
      >
        <ul>
          <li className="p-4">
            <button className=" bg-black h-[50px] w-[130px] rounded-xl">
              <Link
                className="p-4 text-2xl hover:text-cyan-600"
                to="./Navbar.tsx"
              >
                Services
              </Link>
            </button>
          </li>
          <li className="p-4">
            <button className=" bg-black h-[50px] w-[130px] rounded-xl">
              <Link
                className="p-4 text-2xl hover:text-cyan-600"
                to="./Navbar.tsx"
              >
                Pricing
              </Link>
            </button>
          </li>
          <li className="p-4">
            <button className=" bg-black h-[50px] w-[130px] rounded-xl">
              <Link
                className="p-4 text-2xl hover:text-cyan-600"
                to="./Navbar.tsx"
              >
                Company
              </Link>
            </button>
          </li>
          <li className="p-4">
            <button className=" bg-black h-[50px] w-[130px] rounded-xl">
              <Link
                className="p-4 text-2xl hover:text-cyan-600"
                to="./Navbar.tsx"
              >
                Register
              </Link>
            </button>
          </li>
          <li className="p-4">
            <button className=" bg-black h-[50px] w-[130px] rounded-xl">
              <Link
                className="p-4 text-2xl hover:text-cyan-600"
                to="./Navbar.tsx"
              >
                Login
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
