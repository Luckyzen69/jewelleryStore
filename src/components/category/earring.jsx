import React from 'react'
import Shopby from './shop/shopby';
import Ear1 from '../../assets/earrings/ear1.jpg'
import Ear2 from '../../assets/earrings/ear2.jpg'
import Ear3 from '../../assets/earrings/ear3.jpg'
export default function Earrings() {
  let earrings =[
    {
      "name": "Earring",
      "image" : Ear1,
      "price" : 2000
    },
    {
      "name": "Earring",
      "image" : Ear2,
      "price" : 1000
    },
    {
      "name": "Earring",
      "image" : Ear3,
      "price" : 1200
    },
  ]
  return (
   <>
   <div className='h-[1080px] flex m-2'>
    <Shopby/>
   <div>
    <h2>Earrings </h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
      {
        earrings.map((earring)=>{
          let { name,image, price} = earring;
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