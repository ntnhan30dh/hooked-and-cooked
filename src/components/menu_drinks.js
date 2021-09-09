import React from "react";
import Plx from "react-plx"

import MenuTitle from "./menu_title";
import Slick from "./slick";
import MenuItem from "./menuItem";

import line from "../images/menuDrinks_lineFish.svg";
import lineMobile from "../images/menuDrinks_lineMobile.svg";
import sauceRed from "../images/menuSides_sauceRed.png";
import limes from "../images/menuDrinks_limes.png";
import lemons from "../images/menuDrinks_lemons.png";




const Drinks = () => {

  const parallaxRotate = [
    {
      start:'self',
      duration: 1000,
      properties: [
        {
          startValue: 0,
          endValue: 180,
          property: "rotate"
        },
      ],
    },
  ];
  
  return (
      <div className="relative  ">
      <MenuTitle title="DRINKS" reverse="flex-row-reverse"/>
      <div className="slickWrap md:w-1/3 md:ml-1/10">
      <Slick >
        <MenuItem  pic="drinks1"  />
        <MenuItem
          pic="drinks1"
          name="Try them all"
          description="Cannot decide which type of gyoza? Well, try them all! In this combo you get: 3 Mandu, 3 Shrimps, 3 Chicken, 3 Tofu with topping of your choice."
        />
      </Slick>
      </div>
      <div className="picsDiv relative overflow-hidden md:-mt-1/3">
      <div className=" hidden md:block w-1/3 ml-1/2">
          <img src={line} alt="line" />
        </div>
        <div className=" w-3/4 mx-auto md:hidden">
          <img src={lineMobile} alt="lineMobile" />
        </div>
        <div className=" absolute md:hidden top-1/4 left-1/10 w-1/5 ">
          <img src={sauceRed} alt="sauceRed" />
        </div>
       
        <Plx parallaxData={parallaxRotate} className=" absolute md:hidden bottom-1/10  left-1/5  w-1/3 ">
          <img src={lemons} alt="lemons" />
        </Plx>
     
        <div className=" absolute bottom-1/5 -md:-bottom-1/10 lg:bottom-0 right-0 w-1/3 -lg:w-2/5">
          <img src={limes} alt="limes" className="" />
        </div>
      </div>
      </div>
    
  );
};

export default Drinks;
