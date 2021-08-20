import React from "react";

import MenuTitle from "./menu_title";
import Slick from "./Slick";
import MenuItem from "./menuItem";

import line from "../images/menuCombos_line.svg";
import lineMobile from "../images/menuCombos_lineMobile.svg";
import salt from "../images/menuCombos_salt.png";
import olive from "../images/menuCombos_olive.png";
import tomato from "../images/menuCombos_tomato.png";
import lemonSlide from "../images/menuCombos_lemonSlide.png";



const Combos = () => {
  
  return (
      <div className="relative  ">
      <MenuTitle title="COMBOS" reverse="flex-row-reverse"/>
      <div className="slickWrap md:w-1/2">
      <Slick >
        <MenuItem  pic="combos1"  />
        <MenuItem
          pic="TryThemAll"
          name="Try them all"
          description="Cannot decide which type of gyoza? Well, try them all! In this combo you get: 3 Mandu, 3 Shrimps, 3 Chicken, 3 Tofu with topping of your choice."
        />
      </Slick>
      </div>
      <div className="picsDiv relative overflow-hidden /pb-10">
      <div className=" w-3/4 mx-auto">
          <img src={lineMobile} alt="lineMobile" />
        </div>
        <div className=" absolute top-0 -left-1/10 w-1/2">
          <img src={salt} alt="salt" />
        </div>
        <div className=" absolute top-2/3 -left-1/10 w-1/4">
          <img src={lemonSlide} alt="lemonSlide" />
        </div>
        <div className=" absolute top-0 right-0 w-1/3">
          <img src={olive} alt="olive" />
        </div>
        <div className=" absolute bottom-0 right-0 w-1/2 ">
          <img src={tomato} alt="tomato" className="" />
        </div>
      </div>
      </div>
    
  );
};

export default Combos;
