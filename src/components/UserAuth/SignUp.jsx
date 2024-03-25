import React, { useEffect, useLayoutEffect,useState } from 'react';


export default function SignUp(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
      }, []);
    return (
        <>
        <div>
        <h2 className="text-center text-2xl font-mono  ">Customer SignUp</h2>
        <div className="flex justify-center m-5 p-4 ">
            <form className="text-xl flex flex-col " >
                <label htmlFor="name " className="">Name:</label>
                <input type="text"  className="border rounded-sm p-1 sm:w-96" placeholder="Eg: Ram Bahadur" required/>
                <br />
                <label htmlFor="email " className="">Email:</label>
                <input type="email"  className="border rounded-sm p-1" placeholder="Eg:ram@gmail.com" required/>
                <br />
                <label htmlFor="Password" className="">Password:</label>
                <input type="password" name="password" id="password"  className="border rounded-sm p-1 " placeholder="Password" required />
                <br />
                <label htmlFor="Confirm Password" className="">Confirm Password:</label>
                <input type="cpassword" name="cpassword" id="cpassword"  className="border rounded-sm p-1 " placeholder="Confirm Password" required />
                <br />
                <label htmlFor="Province" className="">Province:</label>
                <select name="province" id="" className="text-lg border p-1" required>
                        <option value="Bagmati Province">Bagmati Province</option>
                        <option value="Koshi Province">Koshi Province</option>
                        <option value="Madhesh Province">Madhesh Province</option>
                        <option value="Gandaki Province">Gandaki Province</option>
                        <option value="Province No.5">Province No.5</option>
                        <option value="Karnali Province">Karnali Province</option>
                        <option value="Sudurpashch Province">Sudurpashch Province</option>
                    </select>            
                <br />
                <label htmlFor="Location" className="">Location:</label>
                <input type="location" name="location" id="location"  className="border rounded-sm p-1 " placeholder="Eg:Budhanilkantha,Kathmandu" required />
                <br />
                <label htmlFor="Landmark" className="">Landmark:</label>
                <input type="landmark" name="landmark" id="landmark"  className="border rounded-sm p-1 " placeholder="Eg:Budhanilkantha temple  " required />
                <br />
                <div className="flex justify-between">
                <button type="submit" className="border rounded-sm border-slate-950 p-2 flex hover:bg-slate-400 hover:text-white ">Sign Up</button>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}