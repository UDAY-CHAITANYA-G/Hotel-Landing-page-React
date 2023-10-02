import React from "react";
import Card from "../../../components/Card";
import "./styles.css";

export default function Properties({data, ...props}){
    return  (
    <div className="cards">
    {data.map((props,index)=>{return <Card id={props.id} isLink={true}  key={index} name={props.name} address={props.address} city={props.city} image={props.image_link} room={props.room} bed={props.bed} bath={props.bath} area={props.area} price={props.price} popular={props.popular}/>})}
</div>);
}