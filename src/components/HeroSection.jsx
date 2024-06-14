import React from "react";
import Button from "./Button";

import HeroImage2 from "../assets/restaurantfood.jpg";

const HeroSection = () => {
  return (
    <section className="  bg-dark h-[40rem] ">
      <div className="max-w-[80rem] m-auto h-full flex flex-row ">
        <div className="flex flex-col  flex-[1] p-4   justify-center ">
          <h1 className=" display-title font-Markazi text-primary text-64pt leading-[0.8] ">
            Little Lemon
          </h1>
          <h2 className=" text-highlight font-Markazi  leading-[0.8]  text-40pt">
            Chicago
          </h2>
          <p className=" text-highlight text-16pt mt-10">
            {" "}
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button className={"mt-10"}> Reserve a Table </Button>
        </div>
        <div className=" h-full  content-center overflow-clip p-4 flex-[2]">
          <img
            className=" max-h-full scale-125  aspect-auto rounded-8 m-auto "
            src={HeroImage2}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
