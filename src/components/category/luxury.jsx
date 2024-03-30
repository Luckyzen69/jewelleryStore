import React, { useEffect, useLayoutEffect } from 'react';
import Shopby from './shop/shopby'
import Lux1 from '../../assets/luxury/lux1.jpg'
import Lux2 from '../../assets/luxury/lux2.jpg'
import Lux3 from '../../assets/luxury/lux3.jpg'
import Lux4 from '../../assets/luxury/lux4.jpg'
import Lux5 from '../../assets/luxury/lux5.jpg'

export default function Luxury() {
  let luxurys = [
    
      {
        "name": "Golden Necklace",
        "image" : Lux1,
        "price" : 1200
      },
      {
        "name": "Golden Necklace",
        "image" : Lux2,
        "price" : 5200
      },
      {
        "name": "Golden Necklace",
        "image" : Lux3,
        "price" : 6200
      },
      {
        "name": "Golden Necklace",
        "image" : Lux4,
        "price" : 3200
      },
      {
        "name": "Golden Necklace",
        "image" : Lux5,
        "price" : 5200
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
    <h2>Luxury</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
      {
        luxurys.map((luxury)=>{
          let { image , name , price} = luxury;
          return <>
          <div className='m-2'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{price}</p>
          </div>
          </>
        })
      }
    </div>
  </div>
   </div>
   </>
  )
}