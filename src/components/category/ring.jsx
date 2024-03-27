import React from "react";
import Shopby from "./shop/shopby";
import Ring1 from "../../assets/rings/ring1.jpg"
export default function Rings() {
  return (
    <>
      <div className="h-[1080px] flex m-2">
        <Shopby />

        <div>
          <h2>Rings</h2>
          <div>
            <img src={Ring1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
