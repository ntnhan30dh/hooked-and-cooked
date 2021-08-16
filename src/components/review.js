import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import hand from '../images/hand.gif'

import quote from "../images/quote.png";
const Review = () => {
  const data = useStaticQuery(graphql`
    {
      customerSay: file(relativePath: { eq: "customerSay.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      hand: file(relativePath: { eq: "hand.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const text = "text-white  text-sm my-6";
  const quoteStyle = " w-8 md:w-14 flex-shrink-0 mx-2	mt-1";
  return (
    <section className="reviewDiv bg-red relative  w-full px-1 md:px-8 lg:px-20 ">
      <div className="opacity-0">hi</div>
      <div className="top  w-full sm:flex flex-row-reverse">
        <div className="w-3/4 xsm:w-2/3 sm:w-1/3 -mt-1/3  xsm:-mt-1/4 sm:-mt-1/6 mx-auto ">
          {/* <Img className="  " fluid={data.hand.childImageSharp.fluid} /> */}
          <img src={hand} alt="hand" />
        </div>
        <div className="px-4 w-full sm:w-2/3  pr-1/10 sm:mt-6">
          <Img
            className=" w-full  mb-6 "
            fluid={data.customerSay.childImageSharp.fluid}
          />
        </div>
      </div>
      <div className="bottom md:py-14 ">
        <div className={`reviewText flex ${text}  ml-1/3 sm:ml-1/10 `}>
          <div className={`${quoteStyle}`}>
            <img src={quote} alt="quote" />
          </div>
          <p className="w-2/3 barlow //lg:w-1/2 //xl:w-1/3 ">
            <span className="sm:hidden">
              Great and tasty dumpling creations! It's so worth ordering 😊
            </span>
            <span className="hidden sm:block lg:text-2xl ">
              {" "}
              Size of the portions is ideal! Dishes <br /> tasted delicious! I can only
              warmly <br /> recommend it !!! 👍👍👍{" "}
            </span>
          </p>
        </div>

        <div className={`reviewText flex ${text} sm:ml-1/3 `}>
          <div className={`${quoteStyle}`}>
            <img src={quote} alt="quote" />
          </div>
          <p className="w-1/2 lg:w-2/3 //xl:w-1/3  sm:w-2/5 barlow ">
            {" "}
            <span className="sm:hidden">
            Size of the portions is ideal! Dishes tasted delicious! I can only
            warmly recommend it !!! 👍👍👍{" "}
            </span>
            <span className="hidden sm:block text-lg lg:text-4xl">
            Crispy gyoza with <br /> delicious sauces - <br /> highly recommended!{" "}
            </span>
          </p>
        </div>

        <div className={`reviewText flex ${text}  `}>
          <div className={`${quoteStyle}`}>
            <img src={quote} alt="quote" className="w-full" />
          </div>
          <p className=" barlow w-2/3 sm:w-1/2 //lg:w-2/5 //xl:w-1/4 ">
          <span className=" sm:hidden text-lg">
            Crispy gyoza with delicious sauces - highly recommended!{" "}
            </span>
            <span className="hidden sm:block lg:text-2xl ">
            Great and tasty dumpling <br /> creations! It's so worth ordering 😊{" "}
            </span>
          </p>
        </div>

        <div className=" absolute -right-4 top-8/12 sm:top-1/5 yumZaText max-w-max mx-auto transform -rotate-18  ">
          <h1 className="text-pink font-bold text-3xl sm:text-6xl md:text-8vw lg:text-7vw  leading1">
            YUM <br /> YUM <br /> YUMZAAAA
          </h1>
        </div>
        <div className="opacity-0">hi</div>
      </div>
    </section>
  );
};

export default Review;
