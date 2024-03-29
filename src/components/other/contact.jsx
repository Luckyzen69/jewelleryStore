import React from 'react'

export default function contact() {
  return (
    <>
    <div className='h-[600px]'>
        <h2 className='text-xl text-center'>Contact Us</h2>
        <div>
            <form className='flex flex-col justify-center items-center '>
                <div className='flex flex-col '>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder='Name' className='border rounded-sm border-gray-950 m-1 p-1 sm:w-96'  required /> 
                </div>

                <div className='flex flex-col'>
                <label htmlFor="name">Email:</label>
                <input type="text" name="email" id="email" placeholder='Email' className='border rounded-sm border-gray-950 m-1 p-1 sm:w-96' required />
                </div>

                <div className='flex flex-col'>
                <label htmlFor="name">Location:</label> 
                <input type="text" name="location" id="location" placeholder='Location' className='border rounded-sm border-gray-950 m-1 p-1 sm:w-96' required /> 
                </div>
                    
                <div className='flex flex-col'>
                <label htmlFor="name">Message:</label>
                <textarea type="text" name="message" id="message" placeholder='Message' className='border rounded-sm border-gray-950 m-1 p-1 sm:w-96' required /> 
                    </div> 
                    <button type='submit' className='border w-24 p-2 m-2 border-green-900 bg-neutral-600 hover:bg-neutral-700 text-white rounded-lg'>Send</button>
            </form>
        </div>
    </div>
    </>
    )
}
