import React, { useState } from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";


import Header from "./header";
import thePerfectCacth from "../images/thePerfectCatch.png";

import StoryCraving from "./story_craving";
import StoryCrispy from "./story_crispy";
import StoryCrunch from "./story_crunch";

const Story = () => {

  let [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }

  const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "story_bg.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      steamed_fried_loved: file(
        relativePath: { eq: "steamed_fried_loved.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  
    }
  `);

  const imageData = data.bgBig.childImageSharp.fluid;

  const imgStyle = {
    width: "100%",
  };

  return (
    <section className="story relative bg-yellow " id="story">
    <Header toggleMenu={toggleMenu} menuState={menuActive}/>
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="cover"
        opacity={0.5}
        className="bgContainer relative h-70vh md:h-screen w-full pt-50"
      >
        <div className=" absolute bottom-1/10 left-1/10 w-2/3 md:w-1/2 lg:w-1/3">
          <img src={thePerfectCacth} alt="thePerfectCacth" />
        </div>
      </BackgroundImage>
      <div class="imageMarquee h-10 md:h-16   "></div>
      <StoryCraving />
      <StoryCrispy />
      <div class="imageMarquee h-10 md:h-16   "></div>
      <StoryCrunch />
    </section>
  );
};

export default Story;
