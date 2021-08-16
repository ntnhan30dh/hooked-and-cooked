import React from "react";
import MobileSlick from "./mobileSlick";
import MMenuItem from "./menuItem";

const Combos = () => {
  
  return (
      <MobileSlick title="COMBOS" bg="bg-white" layout = {1}  slideNr={3} bottomPic="hidden" btnTop="top-1/4">
        <MMenuItem  pic="DumplingsFriends" name="Dumplings & Friends" description="Your perfect menu - pick your favourite gyoza, loaded fries and drink."/>
        <MMenuItem
          pic="TryThemAll"
          name="Try them all"
          description="Cannot decide which type of gyoza? Well, try them all! In this combo you get: 3 Mandu, 3 Shrimps, 3 Chicken, 3 Tofu with topping of your choice."
      
        />
        <MMenuItem
          pic="TryThemAll"
          name="Dumpling All in!"
          description="Dumplings all round whether you're craving meat, veggies or shrimps. So many flavours it never gets boring with 24 dumplings plus 2 toppings of your choice."
        />
        <MMenuItem
          pic="TryThemAll"
          name="Yumza House party"
          description="Gather around the table for a feast of dumplings and fusion of flavours - 24 dumplings with 2 toppings of your choice, loaded fries and 2 drinks. Let's get this party started!"
        />
      </MobileSlick>
    
  );
};

export default Combos;
