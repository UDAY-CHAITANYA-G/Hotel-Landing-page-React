import React from "react";
import {FaHotel} from "react-icons/fa";
// import Icons from "../icon";

import "./styles.css";

export default function Card(props){
    return (
        <div className="card">
            <div className="image-box">               
                <div className="image-over-section">
                    <div className="forrent">For Rent</div>
                    <div className="like">L</div>
                </div>
                <div className="populartag">Popular</div>
            </div>
            
            <div className="box-main-body">
                <div className="location">:location</div>
                <div className="hotel-name"><h3>name</h3></div>
                <div className="hotel-info">
                    <div className="Box-bro">
                        <FaHotel />
                        <a>3 Room</a>
                    </div>
                {/* <Icons type={2} text={"3 Rooms"}/> */}
                </div>
            </div>
            <div className="box-bottom">
                <div className="rent-money">$7,255<a>/month</a></div>
                <div className="readmore">Read more</div>
            </div>
        </div>
    );
}
