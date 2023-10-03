import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import properties from "../../data/properties";
import Card from "../../components/Card";
import "./style.css";

export default function Single(){
    let {id} = useParams();
    const [data, setData] = useState({});
    useEffect(()=>{
        const data = properties.filter((props)=>{return props.id === Number(id)});
        setData(...data);
    },[id]);
    return (
    <div className="single">
       {data.name && <Card id={data.id} name={data.name} address={data.address} city={data.city} image={data.image_link} room={data.room} bed={data.bed} bath={data.bath} area={data.area} price={data.price} popular={data.popular}/>}
       {!data && <p>Invalid</p> }
    </div>
    );
}