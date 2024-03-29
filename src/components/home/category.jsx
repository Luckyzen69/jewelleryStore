import Braclet from '../../assets/bracelets/brace5.jpg'
import Earring from '../../assets/earrings/ear5.jpg'
import Luxury from '../../assets/luxury/lux1.jpg'
import Ring from '../../assets/rings/ring1.jpg'
import Necklace from '../../assets/necklaces/neck1.jpg'
import { Link } from 'react-router-dom'
import OtherItems from '../../assets/other/other2.jpg'
export default function Category(){
   
    return( <>
    <div className="max-w-[1400px] h-[800x]  pt-5 m-2">
        <h2 className=" text-center font-mono  text-2xl">SHOP BY CATEGORY </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 m-5'>
           
            <Link to="/necklaces" className='relative m-2 '> 
            <img src={Necklace} alt="bracelets" />
            <p className='absolute top-12 left-8 lg:top-32 lg:left-28 md:left-24 sm:left-12 sm:top-16 md:top-28 text-white text-2xl'>Necklaces</p>
            </Link>

            <Link to="/bracelets" className='relative m-2 '> 
            <img src={Braclet} alt="bracelets" />
            <p className='absolute top-12 left-8 lg:top-32 lg:left-28 md:left-24 sm:left-12 sm:top-16 md:top-28 text-white text-2xl'>Bracelets</p>
            </Link>

            <Link to="/earrings" className='relative  m-2'> 
            <img src={Earring} alt="bracelets" />
            <p className='absolute top-12 left-8 lg:top-32 lg:left-28 md:left-24 sm:left-12 sm:top-16 md:top-28 text-white text-2xl'>Earrings</p>
            </Link>

            <Link to="/rings" className='relative  m-2'> 
            <img src={Ring} alt="bracelets" />
            <p className='absolute top-12 left-8 lg:top-32 lg:left-28 md:left-24 sm:left-12 sm:top-16 md:top-28 text-white text-2xl'>Rings</p>
            </Link>

            <Link to="/luxury" className='relative m-2 '> 
            <img src={Luxury} alt="bracelets" />
            <p className='absolute top-12 left-8 lg:top-32 lg:left-28 md:left-24 sm:left-12 sm:top-16 md:top-28 text-white text-2xl'>Luxury Collection</p>
            </Link>

            <Link to="/other" className='relative m-2 '> 
            <img src={OtherItems} alt="bracelets" />
            <p className='absolute top-12 left-8 lg:top-32 lg:left-28 md:left-24 sm:left-12 sm:top-16 md:top-28 text-white text-2xl'>Other</p>
            </Link>

           
        </div>
    </div>
    </>)
}