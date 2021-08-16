import React from "react";

import soo from "../images/soo.png";
import crispy from "../images/crispy.png";
import crispyPics from "../images/crispy_pics.png";
import crispyPicsLeft from "../images/crispyPics_left.png";
import crispyCacth from "../images/crispy_catchOfTheDay.png";
import crispyDrink from "../images/crispyDrink.png";
import crispyFries from "../images/crispyFries.png";

const StoryCrispy = () => {
  
  return (
    <section className="story relative " id="story">


            <div className="crispy bg-yellow flex ">
                <div className=" text w-1/4">
                  <img
                    src={soo}
                    alt="soo"
                  />
                </div>
                <div className=" text w-1/4">
                  <img
                    src={crispy}
                    alt="crispy"
                  />
                </div>
                <div className=" text w-1/4">
                  <img
                    src={crispyPics}
                    alt="crispyPics"
                  />
                </div>
                <div className=" text w-1/4">
                  <img
                    src={crispyPicsLeft}
                    alt="crispyPicsLeft"
                  />
                </div>
                <div className=" text w-1/4">
                  <img
                    src={crispyCacth}
                    alt="crispyCacth"
                  />
                </div>
                <div className=" text w-1/4">
                  <img
                    src={crispyDrink}
                    alt="crispyDrink"
                  />
                </div>
                <div className=" text w-1/4">
                  <img
                    src={crispyFries}
                    alt="crispyFries"
                  />
                </div>
            </div>
              
    </section>
  );
};

export default StoryCrispy;
