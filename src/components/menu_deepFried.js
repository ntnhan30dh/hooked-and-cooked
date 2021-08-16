import React from "react";
import MobileSlick from "./mobileSlick";
import MMenuItem from "./menuItem";

const MenuDeepFried = (props) => {
  return (
    
      <MobileSlick title="Deep fried dumplings with dip" bg="bg-pink" layout ={2} slideNr={3} picW="md:w-52 lg:w-60 xl:w-1/3 xl:-mb-8 md:mr-1/6" btnTop="top-1/4">
        <MMenuItem
          pic="Shrimpyoza"
          name="Shrimpyoza"
          description="Just tastes dumlicious: These delicious dumplings are filled with shrimp, white cabbage and onions. There is also a dip of your choice - 2 dips if you order 12 pieces."
          ingredient="Shrimps, white cabbage, onion"
        />
        <MMenuItem  pic="CheekyChickenGyoza" name="Cheeky Chicken Gyoza" description="Japanese gyoza, filled with chicken, white cabbage and onions. There is also a dip of your choice - 2 dips if you order 12 pieces." ingredient="Chicken, white cabbage, onion"/>
        <MMenuItem
          pic="VegGyoza"
          name="VEG-Gyoza"
          description="Carinthian noodles in Japanese? Gyoza! Our delicious vegetarian variant is filled with tofu and vegetables. There is also a dip of your choice - 2 dips if you order 12 pieces."
          ingredient="Tofu, vegetables"
        />
        <MMenuItem
          pic="SmokeyBeefMandu"
          name="Smokey Beef Mandu"
          description="Dumplings that surprise: Mandus are the Korean version of the Gyoza and slightly bigger than their Japanese relatives. They are filled with spicy BBQ beef. There is also a dip of your choice - 2 dips if you order 12 pieces."
        />
    
      </MobileSlick>
    
  );
};

export default MenuDeepFried;
