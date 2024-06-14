import footerImage from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center sm:justify-between items-center max-w-[80rem] m-auto pt-10 gap-8  sm:flex-row sm:items-start ">
      <img
        src={footerImage}
        width={300}
        className="  object-contain self-center"
      />
      <section className="text-center sm:text-left">
        <h1 className=" header-nav-title "> Doormat Navigation </h1>
        <nav>
          <ul className={`flex flex-col  gap-3  justify-end `}>
            <li>
              <a className="text-[1rem]">Home</a>
            </li>
            <li>
              <a className="text-[1rem]">About</a>
            </li>
            <li>
              <a className="text-[1rem]">Menu</a>
            </li>
            <li>
              <a className="text-[1rem]">Reservations</a>
            </li>
            <li>
              <a className="text-[1rem]">Order Online</a>
            </li>
            <li>
              <a className="text-[1rem]">Login</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="text-center sm:text-left">
        <h1 className=" header-nav-title">Contact </h1>
        <nav>
          <ul className={`flex flex-col  gap-3  justify-end `}>
            <li>
              <a className="text-[1rem]">Address</a>
            </li>
            <li>
              <a className="text-[1rem]">Phone Number</a>
            </li>
            <li>
              <a className="text-[1rem]">Email</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="text-center sm:text-left">
        <h1 className=" header-nav-title">Social Media Line </h1>
        <nav>
          <ul className={`flex flex-col  gap-3  justify-end `}>
            <li>
              <a className="text-[1rem]">Instagram</a>
            </li>
            <li>
              <a className="text-[1rem]">Twitter</a>
            </li>
            <li>
              <a className="text-[1rem]">Meta</a>
            </li>
            <li>
              <a className="text-[1rem]">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
