import React, { useState } from 'react'

function Search() {

    const [SearchValue,setSearchValue] =useState([])
    
    const handelChange =(e)=>{
        const Data =e.target.value
        setSearchValue((pev)=>{
            return{
                ...pev,
                Data
            }
        })
    }
    return (
        <div style={{width:"50%",margin:"1rem auto"}}>
    <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">🔍</span>
        <input type="search" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>{handelChange(e)}}/>
    </div>
        </div>
    )
}

export default Search
