import React from 'react';
import './Country.css'
const Country = (props) => {

    const handleCountry = props.handleCountry;

    // console.log(props)
    const {name,region,population,flag} = props.country;
    return (
        <div className="country">
            <div className="countryFlag">
                <img src={flag} alt="flag"/>
                <br/>
            </div>
            <div className="countryInfo">
            <h2>Country Name: {name}</h2>
            <h4>Population: {population}</h4>
            <p>Region: {region}</p>
        <button onClick={() => handleCountry(props.country)} className="countryBtn">Add Country</button>

        </div>
        </div>
       
    );
};

export default Country;