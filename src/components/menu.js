import React from "react";

import areYouReadyToBeHooked from "../images/menu_areYouReadyToBeHooked.png";
import icons from "../images/menu_shrimpFries.png";

// import Combos from "./menu_combos";

const Menu = () => {
  return (
    <section className="  relative menuContainer w-full    bg-yellow">
      <div className="topText p-1/10">
      <div className="top">

        <div className=" w-full md:w-3/4">
          <img src={areYouReadyToBeHooked} alt="areYouReadyToBeHooked" />
        </div>
        <div className="right w-full ">
          <p className="text-blue font-bold text-center md:text-left md:text-xl ">
          Hooked & Cooked has the freshest British-style fish & chips ready to deliver. Go on, get yourself a taste of comfort food today!
          </p>
          <div className=" w-1/3 mx-auto py-8">
          <img src={icons} alt="icons" />
        </div>
        </div>
      </div>
      <p className="w-full text-blue font-bold text-center md:text-left md:text-xl">
      Check out what’s on the menu!
      </p>
      </div>
      {/* <Combos/> */}
    </section>
  );
};

export default Menu;
