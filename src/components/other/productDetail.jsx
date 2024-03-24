import L3 from '../../assets/hotProducts/l3.jpg'

export default function ProductDetail(){
    return ( 
        <>
        <div className='grid sm:flex grid-cols-1 m-2'>
            <img src={L3} alt="" className='h-96' />
            <div className='p-2 m-2 sm:ml-12'>
            <h2 className='text-2xl'>Necklaces</h2> 
            <p className='text-xl'>Rs 3000</p> <br /> 
            <div>
                <h2 className='font-mono text-xl font-bold'>Discription</h2>
                <ol role='list' className='font-serif'>
                    <li>- Handmade</li>
                    <li>- Material: panchadhatu</li>
                    <li>- Strucutre: solid</li>
                    <li>- Unisex: for female</li>
                </ol>
            </div>
              
              <div className='m-2'>
                <h2 className='font-bold text-xl font-mono'>Product Details</h2>
                <p className='font-serif'>Panchadhatu translated from Sanskrit is a term used for a five-metal alloy of sacred importance. <br />
                     The 5 metals consist out of gold, silver, copper, lead or zinc and iron. <br /> These metals are carrying a
                      certain energy which resonance with the body so <br /> it's believed to give balance in life, good health,
                       peace of mind and fortune. <br /> The outer parts covered by silver are representing a lion. <br /> This design is
                        also available in a bracelet.</p>
              </div>
            <div>
                <form  className='m-2'>
                <label htmlFor="quantity">Quantity: </label>
                <input type="number" name="" id="" className='border border-black rounded-sm' /> 
                </form>
                <button className='border border-black p-2 rounded-xl hover:bg-black hover:text-white'>ADD TO CART</button>
                <button className='border border-black p-2 rounded-xl hover:bg-black hover:text-white ml-2'>Place an Order</button>
            </div>
            </div>
        </div>
        </>
    )
}