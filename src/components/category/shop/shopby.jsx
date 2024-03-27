import React from 'react'
import { BiMinus } from "react-icons/bi";
import { Link } from 'react-router-dom';
import ShopOption from './shopOption';
export default function Shopby() {
  return (
    <>
    <div className=' m-5 lg:mr-24 hidden sm:block'>
        <h2 className='text-center'>Shop by</h2>

        <div className='flex flex-col  justify-center items-start'>
          <p>Category</p>

        <Link  to="/necklaces" className='flex'>
          <ShopOption text="Necklece" active={2} Icon={BiMinus} />
        </Link>
        <Link to="/bracelets" className='flex'>
          <ShopOption text="Bracelets"  Icon={BiMinus} />
        </Link>
        <Link to="/earrings" className='flex'>
          <ShopOption text="Earrings" Icon={BiMinus} />
        </Link>
        <Link  to="/rings" className='flex'>
          <ShopOption text="Rings" Icon={BiMinus} />
        </Link>
        <Link to="/luxury" className='flex'>
          <ShopOption text="Luxury Collection" Icon={BiMinus} />
        </Link>
        <Link to="/other" className='flex'>
          <ShopOption text="Other " Icon={BiMinus} />
        </Link>
        </div>
        </div>
          <div className='border h-96 m-2 hidden sm:block'>
          </div>
    </>
   
  )
}
