import React, { useEffect, useState } from 'react';
import { Bar ,Line} from 'react-chartjs-2';
import './BarChartGraph.css';
const BarChartGraph = (props) => {
    const [confirmed, setConfirmed] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [recovered, setRecovered] = useState(0);

    
    useEffect(() => {
        graphData();
    },[props.countryname])
    

    const graphData = async () => {
        if(props.countryname){
            console.log(props.countryname);
        const res = await fetch(`https://covid19.mathdro.id/api/countries/${props.countryname}`);
        const json = await res.json();
        let c=await json.confirmed.value;
        let d=await json.deaths.value;
        let r=await json.recovered.value;
        setRecovered(r);
        setConfirmed(c);
        console.log(c,d);
        setDeaths(d);
        }
        

    }
    let barchart;
    (props.countryname!=="" ?  barchart = (
        <Bar
            data={{
                labels: ['Confirmed','Deaths','Recovered'],
                datasets: [{
                    data: [confirmed,deaths,recovered],
                    label: "People",
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'],
                    fill: true,
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true}
            }}

        />
    )  :  barchart="");

    return (
        < > 
           { barchart===""?<></>: <div className="containerone">{barchart}</div>}
            
        </>
    )
}
export default BarChartGraph;