const Nav = ({ className }) => {
  return (
    <nav>
      <ul className={`flex flex-row gap-2 lg:gap-5 ${className}`}>
        <li>
          <a className="header-nav-title">Home</a>
        </li>
        <li>
          <a className="header-nav-title">About</a>
        </li>
        <li>
          <a className="header-nav-title">Menu</a>
        </li>
        <li>
          <a className="header-nav-title">Reservations</a>
        </li>
        <li>
          <a className="header-nav-title">Order Online</a>
        </li>
        <li>
          <a className="header-nav-title">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
