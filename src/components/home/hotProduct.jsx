  import L1 from '../../assets/hotProducts/l1.jpg'
  import L2 from '../../assets/hotProducts/l2.jpg'
  import L3 from '../../assets/hotProducts/l3.jpg'
  import L4 from '../../assets/hotProducts/l4.jpg'
  import L5 from '../../assets/hotProducts/l5.jpg'
  import L6 from '../../assets/hotProducts/l6.jpg'
  import L7 from '../../assets/hotProducts/l7.jpg'
  import L8 from '../../assets/hotProducts/l8.jpg'
  import { Link } from 'react-router-dom'
  import React, { useEffect, useLayoutEffect } from 'react';
  import { FaDumpsterFire } from "react-icons/fa6";

  export default function hotProduct(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
      }, []);
    let products = [
        {
            "title":"Krishna Necklace",
            "image":L1,
            "price":"Rs 8099"
        },
        {
            "title":"God Necklace",
            "image":L2,
            "price":"Rs 909"
        },
        {
            "title":"Goddess Necklace",
            "image":L3,
            "price":"Rs 999"
        },
        {
            "title":"Moti Necklace",
            "image":L4,
            "price":"Rs 899"
        },
        {
            "title":"Gold Necklace",
            "image":L5,
            "price":"Rs 809"
        },
        {
            "title":"Golden Necklace",
            "image":L6,
            "price":"Rs 809"
        },
        {
            "title":"Gold Necklace",
            "image":L7,
            "price":"Rs 809"
        },
        {
            "title":"Gold Necklace",
            "image":L8,
            "price":"Rs 809"
        },
    ]
    return( 
        <>
        <div>
            <h3 className='text-3xl font-bold text-center font-mono flex justify-center '>Hot Products<FaDumpsterFire className='m-1 text-orange-700 hover:text-red-700'/></h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 m-2 '>
                {products.map((product,index)=>{
                    let { title, image, price} = product
                    return <>
                  <Link to='/productdetail'>  <div className='m-2 border border-black' key={product}>
                        <img src={image} alt="image" className='h-42 w-auto ' />
                        <div className='p-1 m-1 '>
                        <h3 className='font-bold'>{title}</h3>
                        {/* <p>{price}</p> */}
                        </div>
                    </div>
                    </Link>
                    </>
                })}
            </div>
        </div>
        </>
    )
  }