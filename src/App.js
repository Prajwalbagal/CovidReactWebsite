import { useState, useEffect } from 'react';
import './App.css';
import Data from './Data'
import GraphChart from './GraphChart';
import Choose from './Choose';
function App() {
  let [confirmed, setConfirmed] = useState(0);
  let [recovered, setRecovered] = useState(0);
  let [deaths, setDeaths] = useState(0);

  useEffect(() => {
    firsturl();
  },[]);

  
  const firsturl = async () => {
    const res = await fetch('https://covid19.mathdro.id/api');
    const json = await res.json();
    setConfirmed(json.confirmed.value);
    setRecovered(json.recovered.value);
    setDeaths(json.deaths.value);
  };
  return (
    < >
      <Data confirmed={confirmed} recovered={recovered} deaths={deaths} />
      <Choose />
      <GraphChart />
    </>
  );
}

export default App;
