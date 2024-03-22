

function sidebarOption({text}){
    return (
        <>
        <div >
            {/* {icon && <Icon/>} */}
            <h2 className="sm:hover:border sm:rounded-sm p-2  text-xl ">{text}</h2>
        </div>
        </>
    )
}

export default sidebarOption;