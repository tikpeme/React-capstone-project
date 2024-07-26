import { useState } from "react";
import Nav from "./Nav";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

import image from "../assets/Logo.svg";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="">
      <div className="hidden sm:flex flex-row items-center justify-between md:max-w-[95%] lg:max-w-[80%] m-auto py-7">
        <Link to="/">
          <img src={image} width={200} />
        </Link>
        <Nav />
      </div>
      <div
        id="mobile-nav"
        className="sm:hidden flex flex-row justify-around py-4"
      >
        <img src={image} width={200} />
        <Hamburger toggled={isOpen} toggle={setOpen} />

        {isOpen && (
          <div
            className="  fixed inset-0  bg-dark  bg-opacity-10 z-10"
            style={{ backgroundColor: "rgba(var(--Dark-color-rgb), 0.9)" }} // Set the opacity here
          ></div>
        )}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 shadow-lg w-[100%] h-full  bg-highlight bg-opacity-90 transform transition-transform duration-500 ease-in-out  z-10    ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute top-4 right-4">
            <Hamburger
              color={"rgba(var(--Primary-color-rgb)"}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          <Nav
            className={"flex-col text-primary text-center pt-24 gap-[4rem] "}
          />
        </div>
      </div>
    </header>
  );
};

{
  /* */
}
{
  /* <div
className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform ease-in-out duration-300 ${
  isOpen ? "translate-x-0" : "-translate-x-full"
}`} */
}

export default Header;
