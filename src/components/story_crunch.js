import React from "react";

import tastThe from "../images/crunch_tastethe.png";
import crunch from "../images/crunch_crunch.png";
import crunch_fishing from "../images/crucnh_fishing.png";
import fish from "../images/crunch_fish.png";
import pics from "../images/crucnh_pics.png";
import picsMobile from "../images/crucnh_picsMobile.png";

const StoryCrunch = () => {
  return (
    <div className="crunch bg-blue p-1/10 ">
      <div className="top md:flex">
        <div className="text md:w-2/3 md:pr-1/10">
          <div className=" w-4/5 mx-auto md:ml-0">
            <img src={tastThe} alt="tastThe" />
          </div>
          <div className=" w-full -mt-2 md:-mt-4 md:ml-16">
            <img src={crunch} alt="crunch" />
          </div>
        </div>
      <div className="icons w-1/2 md:w-1/3 z-10 mt-1/5 md:mt-0 md:pl-1/10">
        <div className=" w-full">
          <img src={crunch_fishing} alt="crunch_fishing" />
        </div>
        <div className=" w-1/2 -mt-4">
          <img src={fish} alt="fish" />
        </div>
      </div>
      </div>
      <div className="hidden md:block w-full pr-1/20 pt-1/20 ">
        <img src={pics} alt="pics" />
      </div>
      <div className="md:hidden w-full">
        <img src={picsMobile} alt="picsMobile" />
      </div>
    </div>
  );
};

export default StoryCrunch;
