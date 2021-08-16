import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";

import MobileSlick from "./mobileSlick";
import MMenuItem from "./menuItem";

const MenuDips = () => {
    const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "dips_bg.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    
    }
  `);

  const imageData = data.bgBig.childImageSharp.fluid;
  return (
       <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="content"
        opacity={0.5}
        className="bgContainer "
      >
       
      <MobileSlick title="Dip sauces" bg="" layout = {3}  slideNr={5} btnTop="top-1/3">
        <MMenuItem
          pic="GingerNinjaDip"
          name="Ginger Ninja Dip" 
        />
        <MMenuItem  pic="SayonaraMayonaraDip" name="Sayonara Mayonara Dip"/>
        <MMenuItem
          pic="KonnichiwasabiDip"
          name="Konnichiwa-sabi Dip"  
        />
        <MMenuItem
          pic="TastyTeriyakiDip"
          name="Tasty Teriyaki Dip"  
        />
        <MMenuItem
          pic="AsianCreasianDip"
          name="Asian Creasian Dip"
        />
 
      </MobileSlick>
      </BackgroundImage> 
  );
};

export default MenuDips;
