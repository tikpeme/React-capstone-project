import React from "react";
import Button from "./Button";
import HighlightCard from "./HighlightCard";

import bruschetta from "../assets/bruchetta.svg";
import greekSalad from "../assets/greek_salad.jpg";
import lemonDesert from "../assets/lemon_desert.jpg";

const Highlights = () => {
  return (
    <section className="py-10 max-w-[80rem] m-auto px-4">
      <section className=" pb-6 flex flex-col-reverse justify-center items-center lg:flex-row sm:justify-between ">
        <h1 className=" font-Markazi text-[4rem] block text-center ">
          This weeks Specials!
        </h1>
        <Button>Online Menu</Button>
      </section>
      <section className=" flex flex-col  gap-10 items-center sm:gap-7 lg:flex-row  sm:justify-between">
        <HighlightCard
          title="Greek Salad"
          image={greekSalad}
          description={
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          }
          cost={13.99}
        />
        <HighlightCard
          title={"Bruschetta"}
          image={bruschetta}
          description={
            "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          }
          cost={15.99}
        />
        <HighlightCard
          title={"Lemon Desert"}
          image={lemonDesert}
          description={
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
          }
          cost={12.99}
        />
      </section>
    </section>
  );
};

export default Highlights;
