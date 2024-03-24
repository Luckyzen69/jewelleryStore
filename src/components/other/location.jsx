import L from '../../assets/location.png'
import Shop from '../../assets/banner/shop.jpg'
export default function Locations(){
    return (
        <>
        <div>
            <h2 className='text-center font-mono font-bold text-2xl'>Location</h2>
            <div className='flex justify-center'>
                <img src={Shop} alt="" />
            </div>
            <div className='m-2 font-serif justify-center flex '>
                <p className='text-center flex justify-center items-center'>Scan for location.</p>
                <img src={L} alt="location qr scan" className='h-46 w-auto' />
            </div>
        </div>
        </>
    )
}