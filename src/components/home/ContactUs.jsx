import { FaFacebook,FaTiktok,FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


export default function ContactUs(){
 
    return(
        <>
        <div className="bg-neutral-900 h-96 relative bottom-0">
            <h2 className="text-center text-2xl  font-mono text-white pt-10">Kamla Shringar</h2>
        <div className="flex text-4xl space-x-10 justify-center text-white m-5 pt-10">
        <Link to="/" className="hover:border rounded-full p-2 hover:bg-inherit"><FaFacebook  /></Link>
        <Link to="/" className="hover:border rounded-full p-2 hover:bg-neutral-900"><FaInstagram /></Link>
        <Link to="/" className="hover:border rounded-full p-2 hover:bg-neutral-900"><FaTiktok   /></Link>
        </div>

        <div className="m-2 ">
        <p className="text-white flex text-xl underline m-1 hover:text-neutral-600"><MdEmail className="m-1" />:KamlaSringar@gmail.com</p>
        <p className="text-white flex text-xl m-3 underline hover:text-neutral-600"><FaPhoneAlt />:987654321</p>
        <p className="text-white flex m-3"><FaLocationDot className="text-xl"/>: Golfutar, Budhanilkantha. <br />Attached to  Big Mart</p>

        <p className="text-white text-center absolute bottom-0 sm:left-20 lg:left-96" >© 2024 <span className="text-teal-500"> Kamla Shringar</span>. All rights reserved. | Developed By: <a href="https://lagzenthakuri.com.np/" target="blank" className="text-slate-500"> Lagzen Thakuri </a></p>
        </div>
        </div>
        </>
    )
}