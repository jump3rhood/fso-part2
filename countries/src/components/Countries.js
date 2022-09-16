import React from 'react'
import Weather from './Weather';
import Country from './Country';

const Countries = ({filter, countries, onFilterChange}) => {
    let resultElements = "Please specify a filter";

    if(filter.length > 0){
        if(countries.length === 1){
            const country = countries[0];
            let languages = [];
            for(let key in country.languages){
                languages.push(country.languages[key])
            }
            resultElements = <div>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital[0]}</p>
                <p>Area: {country.area} sq. km</p>
                <p>Languages spoken:</p>
                {languages.map(lang => <li key={lang}>{lang}</li>)}
                <br/>
                <img src={country.flags.png} alt="country flag"></img>
                <Weather name={country.name.common} lat={country.latlng[0]} lng={country.latlng[1]}/>
            </div>;
        } else if(countries.length > 10){
            resultElements = "Too many matches, specify another filter."
        }else if(countries.length <= 10){
            resultElements = countries.map(c => {
                return <Country key={c.name.common} name={c.name.common} onFilterChange={onFilterChange} />
            })
        }
    }
  return (
    <div>
        {resultElements}
    </div>
  )
}

export default Countries