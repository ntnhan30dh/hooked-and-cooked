import React from "react";

import soo from "../images/soo.png";
import crispy from "../images/crispy.png";
import crispyPics from "../images/crispy_pics.png";
import crispyPicsLeft from "../images/crispyPics_left.png";
import crispyCacth from "../images/crispy_catchOfTheDay.png";
import crispyDrink from "../images/crispyDrink.png";
import crispyFries from "../images/crispyFries.png";
import crispyIconsSetMobile from "../images/crispy_iconsSetMobile.png";

const StoryCrispy = () => {
  
  return (
            <div className="crispy bg-yellow p-1/10 ">
              <div className="top flex">
              <div className="text md:w-2/3 md:pr-1/10">
                <div className="  w-1/2 mx-auto md:ml-0">
                  <img
                    src={soo}
                    alt="soo"
                  />
                </div>
                <div className="w-full -mt-2 md:-mt-4 md:ml-16">
                  <img
                    src={crispy}
                    alt="crispy"
                  />
                </div>
              </div>
              <div className="icons hidden md:block w-1/3  ">
              <div className="top flex justify-end">
              <div className="  w-3/4">
                  <img
                    src={crispyCacth}
                    alt="crispyCacth"
                  />
                </div>
                <div className=" hidden md:block w-1/6">
                  <img
                    src={crispyDrink}
                    alt="crispyDrink"
                  />
                </div>
              </div>
             
                <div className=" hidden md:block w-1/4 ml-1/4 -mt-10 ">
                  <img
                    src={crispyFries}
                    alt="crispyFries"
                  />
                </div>
                </div>
              </div>
              <div className="iconsSetMobile w-full mt-1/5 md:hidden">
              <img
                    src={crispyIconsSetMobile}
                    alt="crispyIconsSetMobile"
                  />
              </div>
              <div className="bottom relative">
                <div className=" hidden md:block absolute w-1/5 -bottom-10 -left-10">
                  <img
                    src={crispyPicsLeft}
                    alt="crispyPicsLeft"
                  />
                </div>
                <div className=" text md:w-1/2 mx-auto">
                  <img
                    src={crispyPics}
                    alt="crispyPics"
                  />
                </div>
              </div>  
            </div>
              
  );
};

export default StoryCrispy;
