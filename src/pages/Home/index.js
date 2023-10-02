import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

import Header from "./Header";
import Properties from "./Properties";
import Filter from "./Filters";

import properties from "../../data/properties";

const FILTERS = ["Chicago","New York","Los Angeles","San Francisco"]

export default function Home(){
    const [size, setSize] = useState(properties.length);
    const [filter, setFilter] = useState("All");
    const [limit, setlimit] = useState(6);
    const [data, setData]=useState([]);
    useEffect(()=>{
        if(filter==="All"){
            setData(properties.slice(0,limit));
            console.log(data);
        }
        else{
            const filteredData = properties.filter((prop)=>{return prop.city===filter});
            setSize(filteredData.length);
            setData(filteredData.slice(0,limit));
        }
    },[limit, filter]);

    function handleFilter(filter){setFilter(filter); setlimit(6)}
    return (
        <div className="home">
            <Header />
            <Filter FILTERS={FILTERS} handleFilter={handleFilter}/>
            <Properties data={data}/>
            <button onClick={()=>{setlimit((limit)=>{return limit+3})}} style={{visibility: limit>=size && "hidden"}}>Show More</button>
        </div>
    );
}