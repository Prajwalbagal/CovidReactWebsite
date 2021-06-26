import React, { useEffect, useState } from 'react';
import BarChartGraph from './BarChartGraph';
import './Choose.css'
const Choose=()=>{
    const [selected,setSelected]=useState("");
    const [listed,setListed]=useState([]);
    useEffect(()=>{
        findList();
    },[])
    const findList=async ()=>{
        const res=await fetch('https://covid19.mathdro.id/api/countries');
        const json=await res.json();
        const countries=await json.countries;
        setListed(countries);
        
    }
    return (
        <>
        <div className="centerone">
        <select onChange={(e)=>{ setSelected(e.target.value)}}>
               <option></option>
            {
                listed.map((country)=>{
                   return (<option key={country.name}>{country.name}</option>)
                })
            }
        </select>
        </div>
        <BarChartGraph countryname={selected}/>
        </>
    )
};
export default Choose;