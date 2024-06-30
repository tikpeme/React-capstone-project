import Ratings from "./Ratings";

const Testimonials = () => {
  return (
    <section className=" bg-dark p-10 ">
      <section className=" max-w-[80rem] m-auto">
        <h1 className=" text-64pt text-primary font-Markazi text-center">
          Testimonials
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-5 items-center ">
          <Ratings
            rating={4}
            name="Jack"
            review="Best dining experiecne in Chicago i have ever experienced"
          />
          <Ratings
            rating={5}
            name="Charles"
            review="Best dining experiecne in Chicago i have ever experienced"
          />
          <Ratings
            rating={4}
            name="Jack"
            review="Best dining experiecne in Chicago i have ever experienced"
          />
          <Ratings
            rating={5}
            name="Jack"
            review="Best dining experiecne in Chicago i have ever experienced"
          />
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
