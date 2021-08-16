import React from "react";
import MobileSlick from "./mobileSlick";
import MMenuItem from "./menuItem";

const MenuStarter = () => {
  
  return (
      <MobileSlick title="Starters and sides" bg="bg-red" layout = {1}  slideNr={4} paddingText="pr-14" picW="w-1/2 md:w-full md:absolute bottom-0" btnTop="top-1/4">
        <MMenuItem
          pic="MeSoHappy"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
        <MMenuItem
          pic="Kimchichi"
          name="Kimchichi"
          description="If it's too spicy, you're too weak: The Korean classic kimchi is Chinese cabbage pickled in chili paste and lots of garlic. And it also provides a real vitamin C boost!"
          ingredient="Classic garlicy, fresh Kimchi"
        />
        <MMenuItem
          pic="Etamame"
          name="Eatamame"
          description=" The sweet, nutty taste and a pinch of sea salt make the steamed, crunchy green soybeans the perfect classic snack."
        />
        <MMenuItem
          pic="AsianLoveStorySalad"
          name="Asian Lovestory Salad"
          description="Crunchy iceberg lettuce as a side dish with carrot, cucumber, mung bean sprouts, spring onions and a punchy Asian dressing with soy sauce, garlic and ginger."
        />
        <MMenuItem  pic="RiceAndShine" name="Rice and Shine" description=" Simply jasmine rice - as a side dish to your gyoza, to dip sauces or for an extra portion of hunger."/>

      </MobileSlick>
    
  );
};

export default MenuStarter;
