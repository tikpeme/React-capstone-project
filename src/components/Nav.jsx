import { Outlet, Link } from "react-router-dom";

const Nav = ({ className }) => {
  return (
    <nav>
      <ul className={`flex flex-row gap-2 lg:gap-5 ${className}`}>
        <li>
          <Link to="/" className="header-nav-title">
            Home
          </Link>
        </li>
        <li>
          <Link className="header-nav-title">About</Link>
        </li>
        <li>
          <Link className="header-nav-title">Menu</Link>
        </li>
        <li>
          <Link className="header-nav-title" to="./booking">
            Reservations
          </Link>
        </li>
        <li>
          <Link className="header-nav-title">Order Online</Link>
        </li>
        <li>
          <Link className="header-nav-title">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
