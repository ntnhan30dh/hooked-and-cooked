import React from "react";
import Plx from "react-plx"

import MenuTitle from "./menu_title";
import Slick from "./Slick";
import MenuItem from "./menuItem";

import line from "../images/menuCombos_lineFish.svg";
import lineMobile from "../images/menuCombos_lineMobile.svg";
import salt from "../images/menuCombos_salt.png";
import olive from "../images/menuCombos_olive2.png";
import tomato from "../images/menuCombos_tomato.png";
import lemonSlide from "../images/menuCombos_lemonSlide.png";
import lemons from "../images/menuCombos_lemons.png";



const Combos = () => {

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
      <MenuTitle title="COMBOS" reverse="flex-row-reverse"/>
      <div className="slickWrap md:w-1/2 md:ml-1/10">
      <Slick >
        <MenuItem  pic="combos1"  />
        <MenuItem
          pic="TryThemAll"
          name="Try them all"
          description="Cannot decide which type of gyoza? Well, try them all! In this combo you get: 3 Mandu, 3 Shrimps, 3 Chicken, 3 Tofu with topping of your choice."
        />
      </Slick>
      </div>
      <div className="picsDiv relative overflow-hidden md:-mt-1/4">
      <div className=" hidden md:block w-3/4 mx-auto">
          <img src={line} alt="line" />
        </div>
        <div className=" w-3/4 mx-auto md:hidden">
          <img src={lineMobile} alt="lineMobile" />
        </div>
        <div className=" absolute top-0 md:top-1/5 -left-1/10 md:left-0 w-1/2 md:w-2/5">
          <img src={salt} alt="salt" />
        </div>
        <div  className=" hidden md:block absolute top-1/2 left-0 w-1/4">
          <img src={lemons} alt="lemons" />
        </div>
        <Plx parallaxData={parallaxRotate} className=" absolute top-2/3 md:top-2/3 lg:top-3/4 -left-1/10  md:left-1/3 w-1/4 lg:w-1/5">
          <img src={lemonSlide} alt="lemonSlide" />
        </Plx>
        <Plx parallaxData={parallaxRotate} className=" absolute top-0 md:top-1/10 right-0 /md:-right-1/10 w-1/3">
          <img src={olive} alt="olive" />
        </Plx>
        <div className=" absolute bottom-0 md:-bottom-1/10 right-0 w-1/2 lg:w-2/5">
          <img src={tomato} alt="tomato" className="" />
        </div>
      </div>
      </div>
    
  );
};

export default Combos;
