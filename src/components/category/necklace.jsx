import React from 'react'
import Shopby from './shop/shopby'
import { Link } from 'react-router-dom'
import Neck1 from "../../assets/necklaces/neck1.jpg"
import Neck2 from "../../assets/necklaces/neck2.jpg"
import Neck3 from "../../assets/necklaces/neck3.jpg"
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
  ]
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