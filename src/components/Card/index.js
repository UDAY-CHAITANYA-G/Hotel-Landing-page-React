import React from "react";
import {FaHotel} from "react-icons/fa";
import Icons from "../Icon";

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
                        <Icons type={1} count={"3"}/>
                        <Icons type={2} count={"3"}/>
                        <Icons type={3} count={"1"}/>
                        <Icons type={4} area={"745 sft"} />
                    </div>
                </div>
            </div>
            <div className="box-bottom">
                <div className="rent-money">$7,255<a>/month</a></div>
                <div className="readmore">Read more</div>
            </div>
        </div>
    );
}
