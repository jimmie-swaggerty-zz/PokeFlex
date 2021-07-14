import React, {useState} from 'react'
import {Link} from 'react-router-dom'
const DropDown = (props) => {
const [open, setOpen]=useState(true)
const {data, title, subdata} = props

const clickHandler = (e) => {
    e.preventDefault();
    if(open===true){
        setOpen(false)
    }
    else {
        setOpen(true)
    }
}
    return(
        <div className="dropdown">
            <h3 className="catheader" onClick={clickHandler}>{title}</h3>
            {open && data.map((tag, idx)=>{
                return(
                    <div className="tagholder">
                        {tag.name && <div className="typetag">{tag.name}</div>}
                        {tag.ability && <div className="typetag">{tag.ability.name}</div>}
                        {tag.move && <div className="typetag">{tag.move.name}</div>}
                        {tag.type && <div className={"typetag "+tag.type.name}>{tag.type.name}</div>}
                    </div>
                )
            })}
        </div>
    )
}

export default DropDown