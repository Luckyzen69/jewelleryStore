import React, { useEffect, useLayoutEffect } from 'react';
import Shopby from './shop/shopby'
import { Link } from 'react-router-dom'
import Neck1 from "../../assets/necklaces/neck1.jpg"
import Neck2 from "../../assets/necklaces/neck2.jpg"
import Neck3 from "../../assets/necklaces/neck3.jpg"
import Neck4 from "../../assets/necklaces/neck4.jpg"
import Neck5 from "../../assets/necklaces/neck5.jpg"
import Neck6 from "../../assets/necklaces/neck6.jpg"
import Neck7 from "../../assets/necklaces/neck7.jpg"
export default function Necklaces() {
  let necklaces =[
    {
      "name": "gem necklace",
      "image" : Neck1,
      "price" : 200
    },
    {
      "name": "silver necklace",
      "image" : Neck2,
      "price" : 200
    },
    {
      "name": "gold necklace",
      "image" : Neck3,
      "price" : 200
    },
    {
      "name": "gold necklace",
      "image" : Neck4,
      "price" : 200
    },
    {
      "name": "gold necklace",
      "image" : Neck5,
      "price" : 200
    },
    {
      "name": "gold necklace",
      "image" : Neck6,
      "price" : 200
    },
    {
      "name": "gold necklace",
      "image" : Neck7,
      "price" : 200
    },
  ]

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  
  return (
   <>
   <div className='h-[1080px] flex m-2'>
   <Shopby/>

   <div>
    <h2>Necklace</h2>

    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
      {necklaces.map((necklace)=>{
        let { image, name, price} = necklace;

        return <>
        <div className='m-2'>
          <Link to="productdetail">
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{price}</p>
          </Link>
        </div>
        </>
      })}
    </div>

   </div>
   </div>
   </>
  )
}