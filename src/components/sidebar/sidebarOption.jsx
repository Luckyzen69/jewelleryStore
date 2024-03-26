

function sidebarOption({text}){
    return (
        <>
        <div >
            {/* {icon && <Icon/>} */}
            <h2 className="sm:hover:border sm:rounded-sm p-2  hover:text-emerald-600	  ">{text}</h2>
        </div>
        </>
    )
}

export default sidebarOption;