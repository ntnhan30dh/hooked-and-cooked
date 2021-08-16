import React from "react";

import tastThe from "../images/crunch_tastethe.png";
import crunch from "../images/crunch_crunch.png";
import crunch_fishing from "../images/crucnh_fishing.png";
import fish from "../images/crunch_fish.png";
import pics from "../images/crucnh_pics.png";

const StoryCrunch = () => {
  
  return (
    <section className="story relative " id="story">

            <div className="craving bg-blue ">
                <div className=" w-1/4">
                  <img
                    src={tastThe}
                    alt="tastThe"
                  />
                </div>
                <div className=" w-1/4">
                  <img
                    src={crunch}
                    alt="crunch"
                  />
                </div>
                <div className=" w-1/4">
                  <img
                    src={crunch_fishing}
                    alt="crunch_fishing"
                  />
                </div>
                <div className=" w-1/4">
                  <img
                    src={fish}
                    alt="fish"
                  />
                </div>
                <div className=" w-3/4">
                  <img
                    src={pics}
                    alt="pics"
                  />
                </div>
            </div>
              
    </section>
  );
};

export default StoryCrunch;
