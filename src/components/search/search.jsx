import { CiSearch } from "react-icons/ci";


export default function Search(){
    return ( <>
    <div >
        <form action="search" className="flex justify-center ">
            <input type="search" name="" id="" className="border sm:w-96 p-1" />
            <CiSearch className="text-4xl  cursor-pointer border " type="search"/>
        </form>
    </div>
    </>)
}