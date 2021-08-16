import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import doubleStars from "../images/doubleStars.png";

const MenuItem = (props) => {
  const data = useStaticQuery(graphql`
    {
      MeSoHappyM: file(relativePath: { eq: "mMenuPic_MeSoHappy.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MeSoHappyL: file(relativePath: { eq: "MenuPic_MeSoHappy_L.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MeSoHappy: file(relativePath: { eq: "MenuPic_MeSoHappy_S.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      RiceAndShineM: file(relativePath: { eq: "mMenuPic_RiceAndShine.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      RiceAndShineL: file(relativePath: { eq: "MenuPic_RiceAndShine_L.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      RiceAndShine: file(relativePath: { eq: "MenuPic_RiceAndShine_S.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      AsianLoveStorySaladM: file(
        relativePath: { eq: "mMenuPic_AsianLoveStorySalad.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      AsianLoveStorySaladL: file(
        relativePath: { eq: "MenuPic_AsianLoveStorySalad_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      AsianLoveStorySalad: file(
        relativePath: { eq: "MenuPic_AsianLoveStorySalad_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      EtamameM: file(relativePath: { eq: "mMenuPic_Etamame.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      EtamameL: file(relativePath: { eq: "MenuPic_Etamame_L.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Etamame: file(relativePath: { eq: "MenuPic_Etamame_S.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      KimchichiM: file(relativePath: { eq: "mMenuPic_Kimchichi.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      KimchichiL: file(relativePath: { eq: "MenuPic_Kimchichi_L.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Kimchichi: file(relativePath: { eq: "MenuPic_Kimchichi_S.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SweetPotatoeFriesM: file(
        relativePath: { eq: "mMenuPic_SweetPotatoeFries.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SweetPotatoeFriesL: file(
        relativePath: { eq: "MenuPic_SweetPotatoeFries_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SweetPotatoeFries: file(
        relativePath: { eq: "MenuPic_SweetPotatoeFries_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ShrimpyozaM: file(relativePath: { eq: "mMenuPic_Shrimpyoza.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Shrimpyoza: file(relativePath: { eq: "MenuPic_Shrimpyoza.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      CheekyChickenGyozaM: file(
        relativePath: { eq: "mMenuPic_CheekyChickenGyoza.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      CheekyChickenGyoza: file(
        relativePath: { eq: "MenuPic_CheekyChickenGyoza.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      VegGyozaM: file(relativePath: { eq: "mMenuPic_VegGyoza.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      VegGyoza: file(relativePath: { eq: "MenuPic_VegGyoza.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SmokeyBeefManduM: file(
        relativePath: { eq: "mMenuPic_SmokeyBeefMandu.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SmokeyBeefMandu: file(
        relativePath: { eq: "MenuPic_SmokeyBeefMandu.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaAsianCresianM: file(
        relativePath: { eq: "mMenuPic_MixMatchGyozaAsianCresian.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaAsianCresianL: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaAsianCresian_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaAsianCresian: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaAsianCresian_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaKonnichiwaSabiM: file(
        relativePath: { eq: "mMenuPic_MixMatchGyozaKonnichiwaSabi.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaKonnichiwaSabiL: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaKonnichiwaSabi_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaKonnichiwaSabi: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaKonnichiwaSabi_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaSayonaraMayonaraM: file(
        relativePath: { eq: "mMenuPic_MixMatchGyozaSayonaraMayonara.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaSayonaraMayonaraL: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaSayonaraMayonara_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaSayonaraMayonara: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaSayonaraMayonara_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaTastyTeriyakiM: file(
        relativePath: { eq: "mMenuPic_MixMatchGyozaTastyTeriyaki.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaTastyTeriyakiL: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaTastyTeriyaki_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaTastyTeriyaki: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaTastyTeriyaki_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesAsianCresianM: file(
        relativePath: { eq: "mMenuPic_LoadedFriesAsianCresian.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesAsianCresian: file(
        relativePath: { eq: "MenuPic_LoadedFriesAsianCresian.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesKonnichiwaSabiM: file(
        relativePath: { eq: "mMenuPic_LoadedFriesKonnichiwaSabi.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesKonnichiwaSabi: file(
        relativePath: { eq: "MenuPic_LoadedFriesKonnichiwaSabi.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesSayonaraMmayonaraM: file(
        relativePath: { eq: "mMenuPic_LoadedFriesSayonaraMmayonara.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesSayonaraMmayonara: file(
        relativePath: { eq: "MenuPic_LoadedFriesSayonaraMmayonara.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesTastyTeriyakiM: file(
        relativePath: { eq: "mMenuPic_LoadedFriesTastyTeriyaki.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesTastyTeriyaki: file(
        relativePath: { eq: "MenuPic_LoadedFriesTastyTeriyaki.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GingerNinjaDipM: file(relativePath: { eq: "dips_GingerNinja.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      GingerNinjaDip: file(relativePath: { eq: "dips_GingerNinja.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SayonaraMayonaraDipM: file(
        relativePath: { eq: "dips_SayonaraMayonara.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SayonaraMayonaraDip: file(
        relativePath: { eq: "dips_SayonaraMayonara.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      KonnichiwasabiDipM: file(
        relativePath: { eq: "dips_Konnichiwasabi.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      KonnichiwasabiDip: file(relativePath: { eq: "dips_Konnichiwasabi.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      TastyTeriyakiDipM: file(relativePath: { eq: "dips_TastyTeriyaki.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      TastyTeriyakiDip: file(relativePath: { eq: "dips_TastyTeriyaki.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      AsianCreasianDipM: file(relativePath: { eq: "dips_AsianCreasian.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      AsianCreasianDip: file(relativePath: { eq: "dips_AsianCreasian.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      DumplingsFriendsM: file(relativePath: { eq: "mMenuPic_DumplingsFriends.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      DumplingsFriendsL: file(relativePath: { eq: "MenuPic_DumplingsFriends_L.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      DumplingsFriends: file(relativePath: { eq: "MenuPic_DumplingsFriends_S.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      TryThemAllM: file(relativePath: { eq: "mMenuPic_TryThemAll.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      TryThemAllL: file(relativePath: { eq: "MenuPic_TryThemAll_L.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      TryThemAll: file(relativePath: { eq: "MenuPic_TryThemAll_S.png" }) {
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
      case "MeSoHappy":
        return data.MeSoHappy.childImageSharp.fluid;
      case "RiceAndShine":
        return data.RiceAndShine.childImageSharp.fluid;
      case "AsianLoveStorySalad":
        return data.AsianLoveStorySalad.childImageSharp.fluid;
      case "Etamame":
        return data.Etamame.childImageSharp.fluid;
      case "Kimchichi":
        return data.Kimchichi.childImageSharp.fluid;
      case "SweetPotatoeFries":
        return data.SweetPotatoeFries.childImageSharp.fluid;
      case "Shrimpyoza":
        return data.Shrimpyoza.childImageSharp.fluid;
      case "CheekyChickenGyoza":
        return data.CheekyChickenGyoza.childImageSharp.fluid;
      case "VegGyoza":
        return data.VegGyoza.childImageSharp.fluid;
      case "SmokeyBeefMandu":
        return data.SmokeyBeefMandu.childImageSharp.fluid;
      case "MixMatchGyozaAsianCresian":
        return data.MixMatchGyozaAsianCresian.childImageSharp.fluid;
      case "MixMatchGyozaKonnichiwaSabi":
        return data.MixMatchGyozaKonnichiwaSabi.childImageSharp.fluid;
      case "MixMatchGyozaSayonaraMayonara":
        return data.MixMatchGyozaSayonaraMayonara.childImageSharp.fluid;
      case "MixMatchGyozaTastyTeriyaki":
        return data.MixMatchGyozaTastyTeriyaki.childImageSharp.fluid;
      case "LoadedFriesAsianCresian":
        return data.LoadedFriesAsianCresian.childImageSharp.fluid;
      case "LoadedFriesKonnichiwaSabi":
        return data.LoadedFriesKonnichiwaSabi.childImageSharp.fluid;
      case "LoadedFriesSayonaraMmayonara":
        return data.LoadedFriesSayonaraMmayonara.childImageSharp.fluid;
      case "LoadedFriesTastyTeriyaki":
        return data.LoadedFriesTastyTeriyaki.childImageSharp.fluid;
      case "GingerNinjaDip":
        return data.GingerNinjaDip.childImageSharp.fluid;
      case "SayonaraMayonaraDip":
        return data.SayonaraMayonaraDip.childImageSharp.fluid;
      case "KonnichiwasabiDip":
        return data.KonnichiwasabiDip.childImageSharp.fluid;
      case "TastyTeriyakiDip":
        return data.TastyTeriyakiDip.childImageSharp.fluid;
      case "AsianCreasianDip":
        return data.AsianCreasianDip.childImageSharp.fluid;
      case "DumplingsFriends":
      return data.DumplingsFriends.childImageSharp.fluid;
      case "TryThemAll":
      return data.TryThemAll.childImageSharp.fluid;

      default:
        return data.MeSoHappy.childImageSharp.fluid;
    }
  };
  const picM = (picName) => {
    switch (picName) {
      case "MeSoHappy":
        return data.MeSoHappyM.childImageSharp.fluid;
      case "RiceAndShine":
        return data.RiceAndShineM.childImageSharp.fluid;
      case "AsianLoveStorySalad":
        return data.AsianLoveStorySaladM.childImageSharp.fluid;
      case "Etamame":
        return data.EtamameM.childImageSharp.fluid;
      case "Kimchichi":
        return data.KimchichiM.childImageSharp.fluid;
      case "SweetPotatoeFries":
        return data.SweetPotatoeFriesM.childImageSharp.fluid;
      case "Shrimpyoza":
        return data.ShrimpyozaM.childImageSharp.fluid;
      case "CheekyChickenGyoza":
        return data.CheekyChickenGyozaM.childImageSharp.fluid;
      case "VegGyoza":
        return data.VegGyozaM.childImageSharp.fluid;
      case "SmokeyBeefMandu":
        return data.SmokeyBeefManduM.childImageSharp.fluid;
      case "MixMatchGyozaAsianCresian":
        return data.MixMatchGyozaAsianCresianM.childImageSharp.fluid;
      case "MixMatchGyozaKonnichiwaSabi":
        return data.MixMatchGyozaKonnichiwaSabiM.childImageSharp.fluid;
      case "MixMatchGyozaSayonaraMayonara":
        return data.MixMatchGyozaSayonaraMayonaraM.childImageSharp.fluid;
      case "MixMatchGyozaTastyTeriyaki":
        return data.MixMatchGyozaTastyTeriyakiM.childImageSharp.fluid;
      case "LoadedFriesAsianCresian":
        return data.LoadedFriesAsianCresianM.childImageSharp.fluid;
      case "LoadedFriesKonnichiwaSabi":
        return data.LoadedFriesKonnichiwaSabiM.childImageSharp.fluid;
      case "LoadedFriesSayonaraMmayonara":
        return data.LoadedFriesSayonaraMmayonaraM.childImageSharp.fluid;
      case "LoadedFriesTastyTeriyaki":
        return data.LoadedFriesTastyTeriyakiM.childImageSharp.fluid;
      case "GingerNinjaDip":
        return data.GingerNinjaDipM.childImageSharp.fluid;
      case "SayonaraMayonaraDip":
        return data.SayonaraMayonaraDipM.childImageSharp.fluid;
      case "KonnichiwasabiDip":
        return data.KonnichiwasabiDipM.childImageSharp.fluid;
      case "TastyTeriyakiDip":
        return data.TastyTeriyakiDipM.childImageSharp.fluid;
      case "AsianCreasianDip":
        return data.AsianCreasianDipM.childImageSharp.fluid;
        case "DumplingsFriends":
          return data.DumplingsFriendsM.childImageSharp.fluid;
          case "TryThemAll":
            return data.TryThemAllM.childImageSharp.fluid;
      default:
        return data.MeSoHappy.childImageSharp.fluid;
    }
  };
  const picNav = (picName) => {
    switch (picName) {
      case "MeSoHappy":
        return data.MeSoHappyL.childImageSharp.fluid;
      case "RiceAndShine":
        return data.RiceAndShineL.childImageSharp.fluid;
      case "AsianLoveStorySalad":
        return data.AsianLoveStorySaladL.childImageSharp.fluid;
      case "Etamame":
        return data.EtamameL.childImageSharp.fluid;
      case "Kimchichi":
        return data.KimchichiL.childImageSharp.fluid;
      case "SweetPotatoeFries":
        return data.SweetPotatoeFriesL.childImageSharp.fluid;
      case "Shrimpyoza":
        return data.Shrimpyoza.childImageSharp.fluid;
      case "CheekyChickenGyoza":
        return data.CheekyChickenGyoza.childImageSharp.fluid;
      case "VegGyoza":
        return data.VegGyoza.childImageSharp.fluid;
      case "SmokeyBeefMandu":
        return data.SmokeyBeefMandu.childImageSharp.fluid;
      case "MixMatchGyozaAsianCresian":
        return data.MixMatchGyozaAsianCresianL.childImageSharp.fluid;
      case "MixMatchGyozaKonnichiwaSabi":
        return data.MixMatchGyozaKonnichiwaSabiL.childImageSharp.fluid;
      case "MixMatchGyozaSayonaraMayonara":
        return data.MixMatchGyozaSayonaraMayonaraL.childImageSharp.fluid;
      case "MixMatchGyozaTastyTeriyaki":
        return data.MixMatchGyozaTastyTeriyakiL.childImageSharp.fluid;
      case "LoadedFriesAsianCresian":
        return data.LoadedFriesAsianCresian.childImageSharp.fluid;
      case "LoadedFriesKonnichiwaSabi":
        return data.LoadedFriesKonnichiwaSabi.childImageSharp.fluid;
      case "LoadedFriesSayonaraMmayonara":
        return data.LoadedFriesSayonaraMmayonara.childImageSharp.fluid;
      case "LoadedFriesTastyTeriyaki":
        return data.LoadedFriesTastyTeriyaki.childImageSharp.fluid;
      case "GingerNinjaDip":
        return data.GingerNinjaDip.childImageSharp.fluid;
      case "SayonaraMayonaraDip":
        return data.SayonaraMayonaraDip.childImageSharp.fluid;
      case "KonnichiwasabiDip":
        return data.KonnichiwasabiDip.childImageSharp.fluid;
      case "TastyTeriyakiDip":
        return data.TastyTeriyakiDip.childImageSharp.fluid;
      case "AsianCreasianDip":
        return data.AsianCreasianDip.childImageSharp.fluid;
        case "DumplingsFriends":
          return data.DumplingsFriendsL.childImageSharp.fluid;
          case "TryThemAll":
            return data.TryThemAllL.childImageSharp.fluid;
      default:
        return data.MeSoHappyL.childImageSharp.fluid;
    }
  };

  return (
    <div className="mMenuItem relative px-1 md:px-2 xl:px-3 ">   
      <div className={` relative w-full pic menu-pic border-8 border-solid `}>
      <div className=" stars hidden absolute  bottom-0 z-10 w-full h-full flex justify-center items-center">
      <div className=" w-6 lg:w-10 xl:w-16">
        {" "}
        <img src={doubleStars} alt="stars" className="ml-4"/>
      </div>
      </div>
        <Img className="w-full picS hidden md:block" fluid={pic(props.pic)} />
        <Img className="w-full picS md:hidden" fluid={picM(props.pic)} />
        <Img className="w-full picL hidden " fluid={picNav(props.pic)} />
        <h1 className=" nameS opacity-0 md:opacity-100 absolute bottom-0 w-full text-xs lg:text-base text-center uppercase text-white font-bold tracking-wider mb-2 ">
        {props.name.split("*").map(str => (
            <span >
              {str} 
            </span>
          ))}
        </h1>
      </div>
      <div className="text text-center md:text-left  ">
        <h1 className="   name uppercase text-white font-bold tracking-wider text-3xl lg:text-4xl 2xl:text-5xl py-4 md:hidden  ">
        {props.name.split("*").map(str => (
            <span>
              {str} <br />{" "}
            </span>
          ))}
        </h1>
        <p className=" description md:hidden barlow font-bold text-xs md:text-1vw  //lg:text-base //xl:text-lg text-white ">
          {props.description}
        </p>
        <p className="ingredient md:hidden barlow text-white //text-center text-xs lg:text-base xl:text-lg italic py-2">
          {props.ingredient}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
