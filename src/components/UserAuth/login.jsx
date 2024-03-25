import React, { useEffect, useLayoutEffect,useState } from 'react';


export default function Login(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
      }, []);

    return ( <>
    <div>
        <h2 className="text-center text-2xl font-mono  underline-offset-3 underline">Customer Login</h2>
        <div className="flex justify-center m-5 p-4 ">
            <form className="text-xl flex flex-col" >
                <label htmlFor="email " className="">Email:</label>
                <input type="text"  className="border rounded-sm p-1" required/>
                <br />
                <label htmlFor="Password" className="">Password:</label>
                <input type="password" name="password" id="password"  className="border rounded-sm p-1 " required />
                <br />
                <div className="flex justify-between">
                <button type="submit" className="border rounded-sm border-slate-950 p-2 flex hover:bg-slate-400 hover:text-white ">Login</button>
                <label htmlFor="forgotPassword " className="text-sm underline text-teal-500">Forget Password?</label>
                </div>
                <label htmlFor="" className="text-sm flex justify-end">New Customer? <span className="underline text-teal-500 ">Sign Up</span> </label>
            </form>
        </div>
    </div>
    </>)
}