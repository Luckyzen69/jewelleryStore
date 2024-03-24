import L1 from '../../assets/hotProducts/l1.jpg'
import L2 from '../../assets/hotProducts/l2.jpg'
import L3 from '../../assets/hotProducts/l3.jpg'
import L4 from '../../assets/hotProducts/l4.jpg'
import L5 from '../../assets/hotProducts/l5.jpg'
import L6 from '../../assets/hotProducts/l6.jpg'
import L7 from '../../assets/hotProducts/l7.jpg'
import L8 from '../../assets/hotProducts/l8.jpg'
import Ring from '../../assets/category/rings.jpg'
import Earring from '../../assets/category/earring.jpg'
import { Link } from 'react-router-dom'
export default function Products(){
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
        {
            "title":"Gold Necklace",
            "image":Ring,
            "price":"Rs 809"
        },
        {
            "title":"Earrnig",
            "image":Earring,
            "price":"Rs 350"
        },
    ]
    return ( 
        <>
        <div>
            <h2 className="font-bold font-mono text-xl text-center ">Products</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
                {
                    products.map((product,index)=>{
                        let {title, image ,price} = product;
                        return <>
                        <Link to='/productdetail'> <div className='border m-2'>
                            <img src={image} alt="item image" className='h-56 ' />
                            <h2>{title}</h2>
                            <p>{price}</p>
                        </div> </Link>
                        </>
                    })
                }
            </div>
        </div>
        </>
    )
}