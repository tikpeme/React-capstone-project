import React, { useState, useEffect, useRef } from "react";

import image1 from "../assets/Mario-and-Adrian-A.jpg";
import image2 from "../assets/Mario-and-Adrian-B.jpg";

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const smallScreenStyles = `absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 h-full aspect-auto rounded-8`;
  const largeScreenStyles = `absolute h-[55%] rounded-8 z-10 `;
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      console.log("isSmallScreen is currently set to : " + isSmallScreen);
      console.log("winodew.innerWidth is : " + window.innerWidth);
    };
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className=" w-full bg-primary">
      <section className=" flex flex-col max-w-[80rem] m-auto  h-[70vh] md:h-[60vh]  p-4 md:flex-row md:gap-6">
        <p className=" h-fit text-left relative pb-10 md:flex-[1] w-full text-[1.2rem] md:-translate-y-1/2 md:top-1/2 md:pb-0">
          {" "}
          We are a family-owned Mediterranean restaurant with humble beginnings
          in Chicago, dedicated to crafting culinary experiences that blend
          traditional recipes with a modern flair. Our journey began with a
          commitment to excellence and a passion for sharing the vibrant flavors
          of the Mediterranean. At our heart, we prioritize a warm and welcoming
          customer experience, ensuring every visit is infused with the spirit
          of our Chicago heritage and the essence of Mediterranean hospitality.
        </p>
        <div className=" relative h-full  aspect-auto  md:flex-[2]">
          <img
            className={`  ${
              isSmallScreen ? smallScreenStyles : largeScreenStyles
            }`}
            src={image1}
          />
          <img
            className=" absolute hidden md:block h-[55%]  rounded-8   bottom-0 right-0   aspect-auto"
            src={image2}
          />
        </div>
      </section>
    </section>
  );
};

export default About;
