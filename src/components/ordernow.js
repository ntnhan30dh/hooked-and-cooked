import React from "react";
import orderNow from "../images/orderNowBtn.png";
import { Link } from "gatsby";

const OrderNow = () =>{

  return (
    <Link>
      <div className="w-12 sm:w-28 md:w-32 lg:w-48 ">
        <Link to="/" className="">
          <img src={orderNow} alt="orderNow" />
        </Link>
      </div>
    </Link>
  );
}

export default OrderNow;
