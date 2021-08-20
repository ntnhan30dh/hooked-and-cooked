
import React from "react";
import Plx from "react-plx";

import fries from "../images/menu_friesIcon.png";
import captainChoice from "../images/menuCombos_captainChoice.png";


const MenuTitle = (props) => {

    const parallaxScaleDown = [
        {
          start: "self",
          duration: 500,
          properties: [
            {
              startValue: 100,
              endValue: 0,
              property: "translateX",
            },
          ],
        },
      ];
  
  return (
     
      <div  className={`title relative w-full  text-center md:text-left md:flex items-center ${props.reverse}`}>
      <Plx parallaxData={parallaxScaleDown} className="bg-blue uppercase text-yellow font-bold text-sm md:text-lg lg:text-xl py-1 md:w-1/3 xl:w-1/4 md:-mb-4 md:pl-6"> {props.title} </Plx>
      <div className=" absolute -top-6 md:top-0 right-10 md:h-full flex flex-col justify-center">
     <div className="w-16 md:w-24">
          <img src={fries} alt="fries" />
     </div>
        </div>
        <div className=" w-2/3 mx-auto md:w-96 lg:w-1/2 /xl:w-1/3">
          <img src={captainChoice} alt="captainChoice" />
        </div>
       </div>
      
    
  );
};

export default MenuTitle;
