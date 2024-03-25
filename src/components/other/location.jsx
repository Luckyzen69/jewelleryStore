import L from '../../assets/location.png'
import { ImLocation2 } from "react-icons/im";

import Shop from '../../assets/banner/shop.jpg'
export default function Locations(){
    return (
        <>
        <div className='m-2 p-2'>
            <h2 className='text-center font-mono font-bold text-2xl'>Location</h2>
            <div className='flex justify-center'>
                <img src={Shop} alt="" />
            </div>
            <div className='m-2 font-serif justify-center flex '>
                <p className='text-center flex justify-center items-center'>Scan for location.</p>
                <img src={L} alt="location qr scan" className='h-46 w-auto' />
            </div>
            <div className='flex justify-center font-sans '>
                <h2 className='font-bold mr-1'>Opening hours: </h2>
                <p> Sunday - Friday </p>
            </div>
            <div className='flex justify-center font-sans '>
                <h2 className='font-bold mr-1'>Time: </h2>
                <p> 9:00 am - 7 pm. <br /> Saturday Closed </p>
            </div>

            <div className='flex justify-center font-sans'>
            <ImLocation2 className='text-xl' />
            <p>Golfutar, Budhanilkantha, Kathmandu, Big Mart.   </p>
            </div>
        </div>
        </>
    )
}