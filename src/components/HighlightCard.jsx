import React from "react";
import bikeIcon from "../assets/icon_bike_.jpg";
import { MdOutlineDeliveryDining } from "react-icons/md";

const HighlightCard = ({
  title = "food",
  cost = "99.99",
  image,
  description,
}) => {
  return (
    <div className=" flex flex-col justify-center items-center w-[20rem] shadow-lg  gap h-[30rem]  mauto rounded-8 overflow-hidden">
      <div className="relative w-full h-2/5 overflow-hidden  ">
        <img className=" w-full -translat-y-0" src={image} />
      </div>
      <div className=" relative p-5 flex h-3/5 flex-col w-full gap-6 bg-highlight">
        <div className="flex flex-row justify-between">
          <h2 className=" font-karla font-bold text-18pt">{title}</h2>
          <h2 className=" text-secondary font-karla text-18pt font-bold ">{`$  ${cost}`}</h2>
        </div>
        <p>{` ${description ? description : "Food description here."}`}</p>
        <div className=" absolute bottom-6 flex flex-row gap-5  items-center  ">
          <h3>Order a delivery</h3>
          <MdOutlineDeliveryDining size={30} />
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
