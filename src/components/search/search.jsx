import { CiSearch } from "react-icons/ci";


export default function Search(){
    return ( <>
    <div >
        <form action="search" className="flex justify-center ">
            <input type="search" name="" id="" className="border font-serif p-1 rounded-sm sm:w-96" placeholder="Search" />
            <CiSearch className="text-4xl  cursor-pointer border " type="submit "/>
        </form>
    </div>
    </>)
}