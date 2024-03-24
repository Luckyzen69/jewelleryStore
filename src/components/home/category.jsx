import Braclet from '../../assets/category/bracelet.jpg'
import Tilhari from '../../assets/category/tilhari.jpg'
import Earring from '../../assets/category/earring.jpg'
import Luxury from '../../assets/category/luxury.jpg'
import Ring from '../../assets/category/rings.jpg'
import Necklace from '../../assets/category/necklace.jpg'

export default function Category(){
    let products = [
        {
            "title":"Bracelets",
            "image":Braclet
        },
        {
            "title":"Necklace Sets",
            "image":Necklace
        },
        {
            "title":"Rings",
            "image":Ring
        },
        {
            "title":"Tilhari",
            "image":Tilhari
        },
        {
            "title":"Earrings",
            "image":Earring
        },
        {
            "title":"Luxury Collection",
            "image":Luxury
        },
    ]
    return( <>
    <div className="max-w-[1400px] h-[800x]  pt-5 m-2">
        <h2 className="font-bold text-center font-mono  text-2xl">SHOP BY CATEGORY </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 m-5'>
            {products.map((product,index)=>{
                let {title , image} = product 
                return <div className='m-2' key={index}>
                   <img src={image} alt="images" className='h-46 w-auto rounded-sm' />
                    <p className='font-bold'>{title}</p>
                </div>
            })}
        </div>
    </div>
    </>)
}