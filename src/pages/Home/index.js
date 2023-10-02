import React from "react";
import "./styles.css";

import Header from "./Header";
import Card from "../../components/Card";

export default function Home(){
    return (
        <div className="Home">
            <Header />
            <div className="Filter-options">
                <button>New York</button>
            </div>
            <Card />
            <button>Show More</button>
        </div>
    );
}