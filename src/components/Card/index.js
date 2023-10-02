import React from "react";
import { useNavigate} from 'react-router-dom';
import {FiHeart, FiMapPin} from "react-icons/fi"
import Icons from "../Icon";

import "./styles.css";

export default function Card(props){
    const navigate = useNavigate();
    return (
        <div className="card" onClick={()=>{ props.isLink && navigate("/"+props.id)}}>
            <div className="image-box">               
                <div className="image-over-section">
                    <div className="forrent">For Rent</div>
                    <div className="like"><FiHeart /></div>
                </div>
               {props.popular===true & <div className="populartag">Popular</div>}
            </div>
            
            <div className="box-main-body">
                <div className="location"><FiMapPin /> {props.city}</div>
                <div className="hotel-name"><h3>{props.name} - {props.address}</h3></div>
                <div className="hotel-info">
                    <div className="Box-bro">
                        <Icons type={1} count={props.room}/>
                        <Icons type={2} count={props.bed}/>
                        <Icons type={3} count={props.bath}/>
                        <Icons type={4} area={props.area} />
                    </div>
                </div>
            </div>
            <div className="box-bottom">
                <div className="rent-money">{props.price}<a>/month</a></div>
                <div className="readmore">Read more</div>
            </div>
        </div>
    );
}
