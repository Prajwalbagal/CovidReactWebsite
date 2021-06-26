import React from 'react'

import './Data.css';
import CountUp from 'react-countup';
const Data = (props) => {
    return (
        <>
            <div className="top">
                <div className="left">
                    <h1>Covid19 Data</h1>
                </div>
                <div className="right">
                    <h2 className="red">Confirmed  <CountUp start={0} end={props.confirmed }duration={2.75}/> </h2>
                    <h2 className="red">Recovered  <CountUp start={0} end={props.recovered }duration={2.75}/> </h2>
                    <h2 className="red">Deaths     <CountUp start={0} end={props.deaths }duration={2.75}/> </h2>
                </div>
            </div>
        </>
    )
};
export default Data;