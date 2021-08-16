import React from "react";
import MobileSlick from "./mobileSlick";
import MMenuItem from "./menuItem";

const SweetPotato = (props) => {
  return (
    
      <MobileSlick title="Loaded sweet potato fries" bg="bg-pink" layout ={2} slideNr={3} picW=" md:w-52 lg:w-60 xl:w-1/3 xl:-mb-6" btnTop="top-1/4">
        <MMenuItem
          pic="LoadedFriesAsianCresian"
          name="Loaded Fries – Asian Creasian"
          description="Our sweet potato fries bring you the full load of Asia home: with lots of creamy coconut and lime sauce, coriander and roasted peanuts."
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
        <MMenuItem
          pic="LoadedFriesSayonaraMmayonara"
          name="Loaded Fries – Sayonara Mayonara "
          description="These sweet potato fries have it all - or rather, they are all about: We deliver them to you with lots of chili mayo, nori seaweed and sesame on top."
          ingredient="Chili sushi mayo, Nori algues, roasted sesame"
        />
        <MMenuItem  pic="LoadedFriesKonnichiwaSabi" name="Loaded Fries – Konnichiwa-sabi" description=" Sweet potato fries, loaded with wasabi mayo, fresh cucumber cubes and a little mint." ingredient="Wasabi mayonnaise, cucumber, mint"/>
        <MMenuItem
          pic="LoadedFriesTastyTeriyaki"
          name="Loaded Fries – Tasty Teriyaki"
          description="Has anyone seen the sweet potato fries? Don't worry, they are waiting for you under a large load of teriyaki sauce, Japanese mayonnaise and fried onions."
          ingredient="Teriyaki, Sushi mayo, fried onion"
        />
    
      </MobileSlick>
    
  );
};

export default SweetPotato;
