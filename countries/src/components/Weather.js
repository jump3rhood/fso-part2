import React, {useState,useEffect} from 'react'
import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY;

const Weather = ({name,lat,lng}) => {
    const [weather, setWeather] = useState(null);
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&apikey=${api_key}&units=metric`)
        .then(response => {
            setWeather(response.data);
            console.log(response.data);
        })
    },[lat,lng])
    let renderResult = null;
    if(weather === null){
        renderResult = "loading weather details..."
    } else {
        const description = weather.weather[0].description;
        const temperature = weather.main.temp;
        const wind = weather.wind.speed;
        const icon = weather.weather[0].icon;
        const imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
        console.log(imgUrl);
        renderResult = <div>
            <p>{description}</p>
            <p>Temperature {temperature} Celcius</p>
            <img src={imgUrl} alt="weather icon"></img>
            <p>Wind {wind}m/s</p>
        </div>;
    }
  return (
    <div>
        <h2>Weather in {name}</h2>
        {renderResult}
    </div>
  )
}

export default Weather