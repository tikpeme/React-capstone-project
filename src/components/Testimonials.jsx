import Ratings from "./Ratings";

const Testimonials = () => {
  return (
    <section className=" bg-dark p-10 ">
      <section className=" max-w-[80rem] m-auto">
        <h1 className=" text-40pt text-primary font-Markazi text-center">
          Testimonials
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-5 items-center ">
          <Ratings
            rating={4}
            name="Jack"
            review="Best dining experience in Chicago i have ever experienced"
          />
          <Ratings
            rating={5}
            name="Charles"
            review="Nice and friendly neighborhood gathering spot"
          />
          <Ratings
            rating={4}
            name="Sam"
            review="The owners is very kind. The waiters are very professional"
          />
          <Ratings rating={5} name="Rachel" review="The food is top tier!!" />
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
