import React, { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="w-full">
      <nav className="nav container px-3 md:px-3 w-full md:w-full bg-white flex justify-between items-center py-2 font-semibold ">
        <a
          href="index.html"
          className={`text-purple-600 font-bold text-xl ${
            toggle ? "hidden" : "block"
          } md:block`}
        >
          Yogesh
        </a>
        <div className={`transition duration-600 nav_menu md:block`}>
          <ul className="hidden md:grid gap-2 grid-cols-3 md:grid-cols-5  ">
            <li className="nav_item">
              <a
                href="#home"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-estate md:hidden"></i>Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-user md:hidden"></i>About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-file-alt md:hidden"></i>Skills
              </a>
            </li>

            {/* <li className="nav_item">
              <a
                href="#services"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-briefcase-alt hidden"></i>Services
              </a>
            </li> */}

            <li className="nav_item">
              <a
                href="#portfolio"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-scenery md:hidden"></i>Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-message md:hidden"></i>Contact
              </a>
            </li>
          </ul>
          <ul
            className={`duration-700 md:hidden gap-8 md: bg-white text-purple-400 fixed  top-[15px] ${
              !toggle ? "left-[-100%]" : "left-0"
            } w-full z-10 grid gap-1.5 px-4 py-2`}
          >
            <li className="nav_item">
              <a
                href="#home"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-estate md:hidden mr-2"></i>Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-user md:hidden mr-2"></i>About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-file-alt md:hidden mr-2"></i>Skills
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#portfolio"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-scenery md:hidden mr-2"></i>Portfolio
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                className="nav_link  hover:text-purple-500 text-center"
              >
                <i className="uil uil-message md:hidde mr-2"></i>Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav_toggle md:hidden z-10">
          {!toggle ? (
            <i
              className="uil uil-apps font-bold text-2xl"
              onClick={() => setToggle(!toggle)}
            ></i>
          ) : (
            <i
              className="uil uil-times font-bold text-2xl"
              onClick={() => setToggle(!toggle)}
            ></i>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
