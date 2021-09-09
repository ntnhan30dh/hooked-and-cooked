import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";


const MenuItem = (props) => {
  const data = useStaticQuery(graphql`
    {
      combos1: file(relativePath: { eq: "menuCombos_pic1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sides1: file(relativePath: { eq: "menuSides_pic1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      } 
      drinks1: file(relativePath: { eq: "menuDrinks_cola.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }   
    }
  `);

  const pic = (picName) => {
    switch (picName) {
      // starters
      case "combos1":
        return data.combos1.childImageSharp.fluid;
      case "sides1":
         return data.sides1.childImageSharp.fluid;
      case "drinks1":
        return data.drinks1.childImageSharp.fluid;
      // case "Etamame":
      //   return data.Etamame.childImageSharp.fluid;
      // case "Kimchichi":
      //   return data.Kimchichi.childImageSharp.fluid;
      // case "SweetPotatoeFries":
      //   return data.SweetPotatoeFries.childImageSharp.fluid;
      // case "Shrimpyoza":
      //   return data.Shrimpyoza.childImageSharp.fluid;
      // case "CheekyChickenGyoza":
      //   return data.CheekyChickenGyoza.childImageSharp.fluid;
      // case "VegGyoza":
      //   return data.VegGyoza.childImageSharp.fluid;
      // case "SmokeyBeefMandu":
      //   return data.SmokeyBeefMandu.childImageSharp.fluid;
      // case "MixMatchGyozaAsianCresian":
      //   return data.MixMatchGyozaAsianCresian.childImageSharp.fluid;
      // case "MixMatchGyozaKonnichiwaSabi":
      //   return data.MixMatchGyozaKonnichiwaSabi.childImageSharp.fluid;
      // case "MixMatchGyozaSayonaraMayonara":
      //   return data.MixMatchGyozaSayonaraMayonara.childImageSharp.fluid;
      // case "MixMatchGyozaTastyTeriyaki":
      //   return data.MixMatchGyozaTastyTeriyaki.childImageSharp.fluid;
      // case "LoadedFriesAsianCresian":
      //   return data.LoadedFriesAsianCresian.childImageSharp.fluid;
      // case "LoadedFriesKonnichiwaSabi":
      //   return data.LoadedFriesKonnichiwaSabi.childImageSharp.fluid;
      // case "LoadedFriesSayonaraMmayonara":
      //   return data.LoadedFriesSayonaraMmayonara.childImageSharp.fluid;
      // case "LoadedFriesTastyTeriyaki":
      //   return data.LoadedFriesTastyTeriyaki.childImageSharp.fluid;
      // case "GingerNinjaDip":
      //   return data.GingerNinjaDip.childImageSharp.fluid;
      // case "SayonaraMayonaraDip":
      //   return data.SayonaraMayonaraDip.childImageSharp.fluid;
      // case "KonnichiwasabiDip":
      //   return data.KonnichiwasabiDip.childImageSharp.fluid;
      // case "TastyTeriyakiDip":
      //   return data.TastyTeriyakiDip.childImageSharp.fluid;
      // case "AsianCreasianDip":
      //   return data.AsianCreasianDip.childImageSharp.fluid;
      // case "DumplingsFriends":
      // return data.DumplingsFriends.childImageSharp.fluid;
      // case "TryThemAll":
      // return data.TryThemAll.childImageSharp.fluid;
      // case "YumzaHouseParty":
      // return data.YumzaHouseParty.childImageSharp.fluid;

      default:
        return data.combos1.childImageSharp.fluid;
    }
  };
 

  return (
    <div className="mMenuItem relative px-16 md:px-10 lg:px-16 ">   
    <Img className="w-full " fluid={pic(props.pic)} />
    </div>
  );
};

export default MenuItem;
