import  { useEffect, useState } from "react";
import "../components/Style.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const items = ["home", "about", "works"];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <>
      <div className="z-50 fixed flex flex-col items-center ">
        <nav className="md:p-5 w-screen  ">
          <div className="flex justify-end px-[40px] mt-2 ">
            <button
              id="menu-toggle"
              onClick={toggleMenu}
              className="md:hidden rounded-full p-2 bg-white border-2 border-red-500 "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=""
                viewBox="0 0 24 24"
                className="w-6 h-6 "
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className=" flex justify-end uppercase ">
            <motion.ul
              className={` transition-nav  ${
                scrolled
                  ? "rounded-lg  bg-gray-800 text-red-500 border-[3px] border-red-500"
                  : "bg-transparent border-[3px] border-transparent"
              } w-fit hidden md:flex justify-end items-center text-white `}
            >
              {items.map((item) => (
                <motion.li variants={navItem} key={item}>
                  <Link to={item} spy={true} smooth={true} duration={3000}>
                    <div className="w-fit p-2  px-5  nav-list "  >
                      {item.toUpperCase()}
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </nav>
      </div>
      {menuOpen ? (
        <div className="flex justify-center items-center w-full bg-blue-500">
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navList}
            className="md:hidden bg-white text-black flex-col border-2 border-red-500 rounded-lg w-fit fixed z-50 p-2 flex justify-center items-center  right-0 top-[60px] "
          >
            {items.map((item) => (
              <motion.li variants={navItem} key={item}>
                <Link to={item} spy={true} smooth={true} duration={3000}>
                  <div className="w-fit p-2 px-5    border-b-2 border-red-500">
                    <div className="hover:bg-red-400 rounded-full px-2">
                      {item.toUpperCase()}
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
