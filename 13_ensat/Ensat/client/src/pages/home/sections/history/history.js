import React, { useState, useEffect } from 'react';
import { Icon, message } from 'antd';
import './history.css';
const thermo = require('../../../../assets/images/home/thermo.png');
const pollutionico = require('../../../../assets/images/home/pollution.png');

function History() {
    const [data, setData] = useState(
        {
            minimumTemperature: 0,
            maximumTemperature: 0,
            minimumHumidity: 0,
            maximumHumidity: 0,
            minimumPressure: '0000',
            maximumPressure: '0000',
            minimumGas: 0,
            maximumGas: 0,
            minimumPollution: 0,
            maximumPollution: 0,
        }
    );

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('https://ensatserver.herokuapp.com/get24hourdata')
                .then((response) => response.json())
                .then(data => {
                    return {
                        minimumTemperature: Math.round(data.minTemperature),
                        maximumTemperature: Math.round(data.maxTemperature),
                        minimumHumidity: Math.round(data.minHumidity),
                        maximumHumidity: Math.round(data.maxHumidity),
                        minimumPressure: Math.round(data.minPressure),
                        maximumPressure: Math.round(data.maxPressure),
                        minimumGas: Math.round(data.minGas),
                        maximumGas: Math.round(data.maxGas),
                        minimumPollution: Math.round(data.minPollution),
                        maximumPollution: Math.round(data.maxPollution),
                    }
                })
                .then(setData)
                .catch(function (error) {
                    message.error('Cannot get past 24 hour data');
                });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="wrapper-history-home">
            <h1> Past 24 Hours Data Range:</h1>
            <div className="history-home-box">
                <div className="history-home-icon-box">
                    <img src={thermo} alt="En Sat Logo" style={{ height: "30px", width: "30px", marginLeft: "5px" }} />
                </div>

                <div className="history-home-title">
                    <h4>Temperature</h4>
                </div>
                <div className="history-home-right-box">
                    <h4>
                        {data.minimumTemperature} - {data.maximumTemperature} °C
                    </h4>
                </div>
            </div>

            <div className="history-home-box">
                <div className="history-home-icon-box">
                    <Icon type="cloud" theme="filled" style={{ fontSize: '40px', color: '#7ECFFF' }} />
                </div>
                <div className="history-home-title">
                    <h4>Humidity</h4>
                </div>
                <span style={{ width: "25px" }}></span>
                <div className="history-home-right-box" style={{ backgroundColor: "#7ECFFF", borderColor: "#7ECFFF" }}>
                    <h4>
                        {data.minimumHumidity} - {data.maximumHumidity} %
                    </h4>
                </div>
            </div>

            <div className="history-home-box">
                <div className="history-home-icon-box">
                    <Icon type="dashboard" theme="filled" style={{ fontSize: '40px', color: '#7768E5' }} />
                </div>
                <div className="history-home-title">
                    <h4>Pressure</h4>
                </div>
                <span style={{ width: "30px" }}></span>
                <div className="history-home-right-box" style={{ backgroundColor: "#7768E5", borderColor: "#7768E5" }}>
                    <h4>
                        {data.minimumPressure} - {data.maximumPressure} Pascal
                    </h4>
                </div>
            </div>

            <div style={{ height: "30px" }}></div>

            <div className="history-home-box">
                <div className="history-home-icon-box">
                    <Icon type="fire" theme="filled" style={{ fontSize: '35px', color: '#FFA03B' }} />
                </div>

                <div className="history-home-title">
                    <h4>Gas Readings</h4>
                </div>
                <div className="history-home-right-box" style={{ backgroundColor: "#FFA03B", borderColor: "#FFA03B" }}>
                    <h4>
                        {data.minimumGas} - {data.maximumGas}
                    </h4>
                </div>
            </div>

            <div className="history-home-box">
                <div className="history-home-icon-box">
                    <img src={pollutionico} alt="En Sat Logo" style={{ height: "30px", width: "30px", marginLeft: "5px" }} />
                </div>

                <div className="history-home-title">
                    <h4>Pollution</h4>
                </div>
                <div className="history-home-right-box" style={{ backgroundColor: "#CACACD", borderColor: "#CACACD" }}>
                    <h4>
                        {data.minimumPollution} - {data.maximumPollution} μg/m<sup>3</sup>
                    </h4>
                </div>
            </div>

        </div>
    )
}

export default History;
