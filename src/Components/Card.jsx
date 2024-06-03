import React from "react";
import cardImage from '../assets/card.svg'
function Card(){
  return(
    <div className="w-[255px] h-[138px] flex flex-col items-start justify-center">
    <img src={cardImage} alt="Your Image" className="w-full h-auto mb-2" />
    <h3 className="text-lg font-medium mb-2 font-roboto text-left text-[#091133]">Your Title goes here</h3>
    <p className="text-sm text-[ #5D6970]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, maxime?</p>
  </div>
  );
}

export default Card;