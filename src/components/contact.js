import React from "react";
import { Link } from "gatsby";
import fb from "../images/fb.png";
import ig from "../images/ig.png";

const Contact = () => {
    const li=" font-bold text-pink text-sm my-2"
    const liStyle={
        letterSpacing: "0.14em"
    }
  return (
    <section  className="contact  sm: py-8 bg-white " id="contact" >
      <div className="icons w-full flex justify-center sm:my-4" >
      <Link to="/" className=" w-10 mx-1" >
            <img src={fb} alt="fb" />
          </Link>
          <Link to="/" className=" w-10 mx-1" >
            <img src={ig} alt="ig" />
          </Link>
      </div>
      <ul className="w-full text-center my-4 sm:my-0">
        <li>
          {" "}
          <Link to="/imprint" className={li} style={liStyle}>
            IMPRINT
          </Link>
        </li>
        <li>
        <Link to="/privacy " className={li} style={liStyle}>
            PRIVACY POLICY
          </Link>
        </li>
        <li>
        <Link to="/disclaimer" className={li} style={liStyle}>
            DISCLAIMER
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
