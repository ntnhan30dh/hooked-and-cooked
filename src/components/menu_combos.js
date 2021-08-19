import React from "react";

import MenuTitle from "./menu_title";
import Slick from "./Slick";
import MenuItem from "./menuItem";



const Combos = () => {
  
  return (
      <div className="relative  ">
      <MenuTitle title="COMBOS" reverse="flex-row-reverse"/>
      <div className="slickWrap">
      <Slick >
        <MenuItem  pic="combos1"  />
        <MenuItem
          pic="TryThemAll"
          name="Try them all"
          description="Cannot decide which type of gyoza? Well, try them all! In this combo you get: 3 Mandu, 3 Shrimps, 3 Chicken, 3 Tofu with topping of your choice."
      
        />
      
      </Slick>
      </div>
      </div>
    
  );
};

export default Combos;
