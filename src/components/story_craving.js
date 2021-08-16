import React from "react";

import cravingSomeCrunchiness from "../images/cravingSomeCrunchiness.png";
import cravingIconsSet from "../images/cravingIconsSet.png";
import cravingSticker from "../images/cravingSticker.png";
import cravingFruit from "../images/cravingFruit.png";

const StoryCraving = () => {
  
  return (
            <div className="craving bg-blue flex">
              <div className="left">
                <div className=" w-1/4">
                  <img
                    src={cravingSomeCrunchiness}
                    alt="cravingSomeCrunchiness"
                  />
                </div>
              <p className="w-1/2 text-white font-bold text-xl">
                We’ve got the perfect catch! British-style inspired fish and
                chips from Hooked & Cooked are made with perfectly crispy
                coating and a tender, moist interior. In our offer, you will
                find a great selection of fish menus, seafood and tasty sides
                and dips. Fried fish perfection, ready for delivery and just one
                tap away. It will be love at first bite!
              </p>
              </div>
              <div className="right w-full">
              <div className=" w-full">
                  <img
                    src={cravingIconsSet}
                    alt="cravingIconsSet"
                  />
                </div>
                <div className=" w-full">
                  <img
                    src={cravingSticker}
                    alt="cravingSticker"
                  />
                </div>
                <div className=" w-1/4">
                  <img
                    src={cravingFruit}
                    alt="cravingFruit"
                  />
                </div>
              </div>
            </div>
              
  );
};

export default StoryCraving;
