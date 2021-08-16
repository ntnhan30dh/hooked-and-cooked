import React from "react";
import menu_text from "../images/menu_text.png";

import MenuStarter from "./menu_starter";
import MenuDeepFried from "./menu_deepFried";
import MenuFriedDumplings from "./menu_friedDumplings";
import SweetPotato from "./menu_sweetPotato";
import Combos from "./menu_combos";
import MenuDips from "./menu_dips";
import circle_red from "../images/oderNow_bgRed.png"

const Menu = () => {
  return (
    <section className="  relative menuContainer w-full    bg-pink">
      <span id="menu" className="absolute -top-28" > </span>
      <div className=" relative textDiv w-full md:flex items-start py-6 sm:py-1/10 md:py-20 ">
        <div className=" md:w-1/2  pr-4 ">
          <img src={menu_text} alt="menu" />
        </div>{" "}
        <div className="text flex w-full sm:w-10/12 lg:w-1/2 pl-4 pt-4 md:pt-0 md:pr-8 //mb-1/10">
          <p className="barlow text-white text-xs xxsm:text-base md:text-lg lg:text-2xl">
            Experience an Asian fusion like no other when you order from Yumza -
            dumplings stuffed & topped for you, delivered to you, whatever your
            mood. Yum!
          </p>
      <div className="relative  ">
        <div className="absolute circleDiv relative w-28 h-28 lg:w-44 lg:h-44 xl:w-48 xl:h-48 lg:top-10 lg:left-2"  >
            {" "}
            <div className={`absolute w-full h-full spin  `}>
              <img src={circle_red }  alt="circle_red}" />
            </div>
            <div className={`content absolute top-0 w-full h-full flex items-center justify-center transform rotate-12	`}>
              {" "}
              <span className={`text-center uppercase px-4 text-xxs md:text-base lg:text-3xl md:px-8 lg:px-4 xl:px-8 font-bold text-white `}> order <br /> now</span>
            </div>
          </div>
      </div>
        </div>
      </div>
      <MenuStarter/>
      <MenuDeepFried/>
      <MenuFriedDumplings/>
      <SweetPotato/>
      <MenuDips/>
      <Combos/>
     
    </section>
  );
};

export default Menu;
