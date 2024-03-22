  import L1 from '../../assets/l1.jpg'
  import L2 from '../../assets/l2.jpg'
  import L3 from '../../assets/l3.jpg'
  import L4 from '../../assets/l4.jpg'
  import L5 from '../../assets/l5.jpg'


  export default function hotProduct(){
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
    ]
    return( 
        <>
        <div>
            <h3 className='text-3xl font-bold text-center font-mono'>Hot Products</h3>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 m-2'>
                {products.map((product,index)=>{
                    let { title, image, price} = product
                    return <div className='m-2 border border-black'>
                        <img src={image} alt="image" className='h-42 w-auto' />
                        <div className='p-1 m-1 '>
                        <h3 className='font-bold'>{title}</h3>
                        <p>{price}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
        </>
    )
  }