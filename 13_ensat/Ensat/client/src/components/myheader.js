import React from 'react';
import 'antd/dist/antd.css';
import "./myheader.css";

const logo = require('../assets/logo/faviconaen.png');

function MyHeader() {
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',                        'October', 'November', 'December']

    let d = new Date();
    let day = weekday[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return (
        <div className= 'wrapper' data-testid = 'my-header'>
            <div className="topbar">
                <img src={logo} alt="En Sat Logo" className="logo"/>
                <div>
                    <h2 className="red"> {day} {date}<sup>th</sup></h2>
                    <p>{month}, {year}</p>
                </div>
            </div>
        </div>
    )
}        

export default MyHeader;