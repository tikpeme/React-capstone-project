import Nav from "./Nav";

import image from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between max-w-[80rem] m-auto border">
      <img src={image} width={200} />
      <Nav direction={"row"} linkStyle={"header-nav-title"} />
    </header>
  );
};

export default Header;
