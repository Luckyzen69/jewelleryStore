import React from 'react'
import "../../../index.css"
export default function shopOption({active, text,Icon}) {
  return (
    <div className={`sidebarOption   flex justify-center items-center m-2 hover:text-green-600   ${active && 'sidebarOption--active'}`}>
    {Icon && <Icon className="text-xl mr-1" />}
        <h2 className="cursor-default" active >{text}</h2>
    </div>
  )
}
