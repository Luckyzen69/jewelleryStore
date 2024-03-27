import React from 'react'
import Shopby from './shop/shopby'
import Brace1 from "../../assets/bracelets/brace1.jpg"
import Brace2 from "../../assets/bracelets/brace2.jpg"
import Brace3 from "../../assets/bracelets/brace3.jpg"
import Brace4 from "../../assets/bracelets/brace4.jpg"
export default function Bracelets() {
  let bracelets =[
    {
      "name": "bracelet",
      "image" : Brace1,
      "price" : 2500
    },
    {
      "name": "heart bracelet",
      "image" : Brace2,
      "price" : 500
    },
    {
      "name": "butterfly bracelet",
      "image" : Brace3,
      "price" : 1500
    },
    {
      "name": "bracelet",
      "image" : Brace4,
      "price" : 200
    },
  ]
  return (
   <>
   <div className='h-[1080px] flex m-2'>
    <Shopby/>
   <div>
    <h2 className='text-xl m-2'>Bracelets</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
      {
        bracelets.map((bracelet)=>{
          let { name ,image ,price} = bracelet;
          return <>
          <div className='m-2'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>Rs: {price}</p>
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