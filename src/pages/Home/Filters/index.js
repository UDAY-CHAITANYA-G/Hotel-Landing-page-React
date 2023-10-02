import React from "react";

import "./styles.css";

export default function Filter({FILTERS, handleFilter,...props}){
    return (
    <div className="filter-options">
    {FILTERS.map((filter,index)=>{return <button key={index} value={filter} onClick={()=>{handleFilter(filter)}}>{filter}</button>}) }
</div>
)
}