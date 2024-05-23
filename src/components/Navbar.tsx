import  {  useState } from "react";
import "./Style.css";
// import { Link, Outlet } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Work from "./Work";
// import girl from "../assets/girl.png";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [showBackground, setShowBackground] = useState(false);
  // const TOP_OFFSET = 600;
  // console.log()
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= TOP_OFFSET) {
  //       setShowBackground(true);
  //     } else {
  //       setShowBackground(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="z-50 fixed flex flex-col items-center">
        <nav className={` p-5  w-screen  `}>
          <div className="flex justify-end px-5 mt-2 ">
            {/* md:hidden */}
            <button
              id="menu-toggle"
              onClick={toggleMenu}
              className="md:hidden rounded-full p-2 bg-white"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=""
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <ul className={`hidden md:flex justify-end items-center text-white `}>
            <li className="hover:bg-red-400">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-red-400">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About
              </Link>
              {/* <Link to="/about">About</Link> */}
            </li>
            <li className="hover:bg-red-400">
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Work
              </Link>
            </li >
            {/* <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
      {menuOpen ? (
        // 
        <ul
          
          className="md:hidden fixed z-50 p-5 flex justify-center items-center w-screen text-white"
        >
          <li className=" px-5 hover:bg-red-400">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className=" px-5 hover:bg-red-400">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className=" px-5 hover:bg-red-400">
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Work
            </Link>
          </li>
        </ul>
        
      ) : null}
    </>
  );
};

export default Navbar;
