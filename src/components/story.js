import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";


import Header from "./header";
import thePerfectCacth from "../images/thePerfectCatch.png";

import StoryCraving from "./story_craving";
import StoryCrispy from "./story_crispy";
import StoryCrunch from "./story_crunch";

const Story = () => {
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
    <section className="story relative " id="story">
      <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="cover"
        opacity={0.5}
        className="bgContainer relative   w-full pt-50"
      >
        <Header />
        <div className=" w-1/4">
          <img src={thePerfectCacth} alt="thePerfectCacth" />
        </div>
      </BackgroundImage>
      <StoryCraving />
      <StoryCrispy />
      <StoryCrunch />
    </section>
  );
};

export default Story;
