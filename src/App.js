import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Population from './Components/Population/Population';

function App() {
  const [countries, setCountries] = useState([]);
  const [popu, setpopu] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(json => setCountries(json))
  }, [])

  const handleaddCountry = (props) => {
    console.log('Country Added', props);
    const newpopu = [...popu, props];
    setpopu(newpopu);
  }
  return (
    <div className="App">
       
      <div className="details.container">
         <h1>Country Loaded: {countries.length}</h1>
        {countries.map(country => <Country country={country} key={country.name.common} handleaddCountry={handleaddCountry}></Country>)}
      </div>

      <div className="popu-container">
        <Population popu={popu}></Population>
      </div>
    </div>

  );
}

export default App;
