import React from "react";
import Button from "./Button";
import RectangleImage from "../assets/Rectangle.svg";

function Pricing() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full px-4 py-12 sm:py-24 lg:py-36 mt-2"
      style={{
        backgroundImage: `url(${RectangleImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-3xl font-medium font-roboto text-center text-[#091133]">
        A Price To Suit Everyone
      </h2>
      <p className="mt-4 mb-2 max-w-[600px] text-center text-[#6F7CB2]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>

      <div className="mt-6 mb-16 w-full lg:w-auto">
        <span className="text-6xl font-bold">$40</span>
        <p className="text-gray-600 text-center">UI Design Kit</p>
      </div>

      <p className="mt-1 text-sm text-gray-500 text-center">
        See, One price. Simple.
      </p>

      <Button className="mt-4 bg-blue-900 text-white px-8 hover:bg-blue-200">
        Purchase Now
      </Button>
    </section>
  );
}

export default Pricing;

