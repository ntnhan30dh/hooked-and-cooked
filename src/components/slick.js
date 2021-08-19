import Slider from "react-slick";
import React, { useRef, useState } from "react";


import btnNext from "../images/menu_btnNext.png";
import btnPrev from "../images/menu_btnPrev.png";


const Slick = (props) => {
 
  //creating the ref
  const customeSlider = useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

 

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,

    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          //centerPadding: '5%',
        },
      },
    ],
  };

  return (
    <div className={`relative sliderContainer  w-full `}>
   
    <button
          onClick={() => gotoNext()}
          className={` absolute right-2 z-10 `}
        >
          <div className=" w-6 xsm:w-8 lg:w-12 ">
            <img src={ btnNext} alt="next" />
          </div>
        </button>

        <button
          onClick={() => gotoPrev()}
          className={`absolute left-2 z-10 `}
        >
          <div className=" w-6 xsm:w-8 lg:w-12 ">
            <img src={ btnPrev} alt="prev" />
          </div>
        </button>
              <Slider
                {...settings}
                ref={customeSlider}
                
                className={` w-full`}
              >
                {props.children}
              </Slider>
           
    </div>
  );
};

export default Slick;
