import React from "react";
import personIcon from "../assets/person-icon.png";
import Rating from "@mui/material/Rating";

const Ratings = ({ rating = 4, name = "tom", review = "very good" }) => {
  return (
    <div className=" border rounded-8 w-fit max-w-[18rem] min-w-[10rem] p-1 bg-highlight m-auto">
      <Rating name={`${name}'s-rating`} value={rating} read-only />
      <div className=" flex items-center flex-row gap-1">
        <img className=" w-[50%]" src={personIcon} />
        <h4>{name}</h4>{" "}
      </div>
      <div>{review}</div>
    </div>
  );
};

export default Ratings;
