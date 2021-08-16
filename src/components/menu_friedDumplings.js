import React from "react";
import MobileSlick from "./mobileSlick";
import MenuItem from "./menuItem";

const menuFriedDumplings = () => {
  
  return (
      <MobileSlick title="Loaded pan fried dumplings with topping" bg="bg-red" layout = {1}  slideNr={2} picW="w-1/2 lg:w-3/5 md:w-full mt-10 xl:mt-0" btnTop="top-1/5">
        <MenuItem
          pic="MixMatchGyozaAsianCresian"
          name="Mix & Match Gyoza – *Asian Creasian"
          description="6, 8 or 12 Gyozas of your choice on jasmine rice. There is also our sweet and fruity coconut lime sauce with coriander and roasted peanuts. Here you get the best of Thailand and Japan!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
        <MenuItem  pic="MixMatchGyozaSayonaraMayonara" name="Mix & Match Gyoza –* Sayonara Mayonara" description=" 6, 8 or 12 Gyozas of your choice on jasmine rice. We also deliver the real Japanese flavor with our slightly spicy chili mayo, crunchy nori seaweed and roasted sesame. Our favorite." ingredient="Chili sushi mayo, Nori algues, roasted sesame"/>
        <MenuItem
          pic="MixMatchGyozaKonnichiwaSabi"
          name="Mix & Match Gyoza – *Konnichiwa-sabi"
          description="6, 8 or 12 Gyozas of your choice on jasmine rice. The topping is wasabi mayo, fresh cucumber cubes and a little mint."
          ingredient="Wasabi mayonnaise, cucumber, mint"
        />
     
        <MenuItem
          pic="MixMatchGyozaTastyTeriyaki"
          name="Mix & Match Gyoza – *Tasty Teriyaki"
          description="6, 8 or 12 Gyozas of your choice on jasmine rice. With teriyaki sauce, Japanese mayonnaise and fried onions - classic & good!"
          ingredient="Teriyaki, Sushi mayo, fried onion"
        />
   
      </MobileSlick>
    
  );
};

export default menuFriedDumplings;
