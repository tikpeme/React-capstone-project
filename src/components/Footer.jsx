import footerImage from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between max-w-[80rem] m-auto border">
      <img src={footerImage} width={300} className="  object-contain" />
      <section className="text-left">
        <h1 className=" header-nav-title"> Doormat Navigation </h1>
        <nav>
          <ul className={`flex flex-col  gap-2  justify-end `}>
            <li>
              <a className="text-[1.33rem]">Home</a>
            </li>
            <li>
              <a className="text-[1.33rem]">About</a>
            </li>
            <li>
              <a className="text-[1.33rem]">Menu</a>
            </li>
            <li>
              <a className="text-[1.33rem]">Reservations</a>
            </li>
            <li>
              <a className="text-[1.33rem]">Order Online</a>
            </li>
            <li>
              <a className="text-[1.33rem]">Login</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="text-left">
        <h1 className=" header-nav-title">Contact </h1>
        <nav>
          <ul className={`flex flex-col  gap-2  justify-end `}>
            <li>
              <a className="text-[1.33rem]">Address</a>
            </li>
            <li>
              <a className="text-[1.33rem]">Phone Number</a>
            </li>
            <li>
              <a className="text-[1.33rem]">Email</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="text-left">
        <h1 className=" header-nav-title">Social Media Line </h1>
        <nav>
          <ul className={`flex flex-col  gap-2  justify-end `}>
            <li>
              <a className="text-[1.33rem]">Instagram</a>
            </li>
            <li>
              <a className="text-[1.33rem]">Twitter</a>
            </li>
            <li>
              <a className="text-[1.33rem]">Meta</a>
            </li>
            <li>
              <a className="text-[1.33rem]">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
