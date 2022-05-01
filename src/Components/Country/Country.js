import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    // const{common,official}=props.country;

    return (
        <div className='Country-list'>
            <div>
                <img src={props.country.flags.png} alt="" />
            </div>

            <div>
                <h4>This Country Name: {props.country.name.common}</h4>
                <h2>Official Name:{props.country.name.official}</h2>
                <h3>Population:{props.country.population}</h3>
                <button className='main-button' onClick={()=>props.handleaddCountry(props.country.population)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;