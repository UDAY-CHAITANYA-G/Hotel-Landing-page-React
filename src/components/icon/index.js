import React from "react";
import {FaHotel, FaBed, FaBath, FaDirections} from "react-icons/fa";

import "./styles.css";

export default function Icons(props){
    return <div className="icon-box">
            {props.type === 1 && <div><FaHotel /> <p>{props.count} room</p></div>}
            {props.type === 2 && <div><FaBed /><p>{props.count} Bed</p></div>}
            {props.type === 3 && <div><FaBath /><p>{props.count} Bath</p></div>}
            {props.type === 4 && <div><FaDirections /><p>{props.area}</p></div>}
        </div>
     ;
}