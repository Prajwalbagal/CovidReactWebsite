import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './GraphChart.css';
const GraphChart = () => {
    const [daily, setDaily] = useState([]);
    useEffect(() => {
        graphData();
    },[])

    const graphData = async () => {
        const res = await fetch('https://covid19.mathdro.id/api/daily');
        const json = await res.json();
        setDaily(json);

    }
    const linechart = (
        <Line
            data={{
                labels: daily.map((datato) => {
                    return (datato.reportDate)
                }),
                datasets: [{
                    data: daily.map((data) => (data.confirmed.total)),
                    label: "Infected",
                    borderColor: 'green',
                    fill: true,
                },
                {
                    data: daily.map((data) => (data.deaths.total)),
                    label: "Deaths",
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }]
            }}

        />
    );
    return (
        <>
            <div className="container">
                {linechart}
            </div>
        </>
    )
}
export default GraphChart;