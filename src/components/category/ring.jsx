import React, { useEffect, useLayoutEffect } from 'react';
import Shopby from "./shop/shopby";
import Ring1 from "../../assets/rings/ring1.jpg"
import Ring2 from "../../assets/rings/ring2.jpg"
import Ring3 from "../../assets/rings/ring3.jpg"
import Ring4 from "../../assets/rings/ring4.jpg"
import Ring5 from "../../assets/rings/ring5.jpg"
import Ring6 from "../../assets/rings/ring6.jpg"
import Ring7 from "../../assets/rings/ring7.jpg"
export default function Rings() {
  let rings = [
    {
      "name": "gold ring",
      "image" : Ring1,
      "price" : 2000
    },
    {
      "name": "gold ring",
      "image" : Ring2,
      "price" : 2000
    },
    {
      "name": "gold ring",
      "image" : Ring3,
      "price" : 2000
    },
    {
      "name": "gold ring",
      "image" : Ring4,
      "price" : 2000
    },
    {
      "name": "gold ring",
      "image" : Ring5,
      "price" : 2000
    },
    {
      "name": "gold ring",
      "image" : Ring6,
      "price" : 2000
    },
    {
      "name": "gold ring",
      "image" : Ring7,
      "price" : 2000
    },
  ]  

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  
  return (
    <>
      <div className="h-[1080px] flex m-2">
        <Shopby />

        <div>
          <h2>Rings</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {
              rings.map((ring)=>{
                let { name, image , price} = ring;
                return <>
                <div className="m-2">
                  <img src={image} alt="" />
                  <h2>{name}</h2>
                  <p>{price}</p>
                </div>
                </>
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}
