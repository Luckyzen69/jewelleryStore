import React from 'react'
import Shopby from './shop/shopby'
import Other1 from '../../assets/other/other1.jpg'
import Other2 from '../../assets/other/other2.jpg'
import Other3 from '../../assets/other/other3.jpg'
import Other4 from '../../assets/other/other4.jpg'
export default function OtherItems() {
  let others = [
    {
      "name": "Unknown Name",
        "image" : Other1,
        "price" : 3200
    },
    {
      "name": "Unknown Name",
        "image" : Other2,
        "price" : 3200
    },
    {
      "name": "Unknown Name",
        "image" : Other3,
        "price" : 3200
    },
    {
      "name": "Unknown Name",
        "image" : Other4,
        "price" : 3200
    },
  ]
  return (
   <>
   <div className='h-[1080px] flex m-2'>
   <Shopby/>

   <div>
    <h2>Other</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 '>
    {
      others.map((other)=>{
        let { image ,name, price} = other;
        return <>
        <div className='m-2'>
          <img src={image} />
          <h1>{name}</h1>
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