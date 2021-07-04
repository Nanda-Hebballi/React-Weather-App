import axios from 'axios';
import React,{useState,useEffect} from 'react';
// import { Button,Card,Spinner,Form,Row,Col,Container } from 'react-bootstrap';
import WeatherSearch from '../weather-search/weather-search';
import WeatherDetail from '../weather-detail/weather-detail';
import './weather.css';

function Weather(){
  const [cityname,setCity ] = useState('Belgaum');
  const [weatherData,setWeatherdata] = useState({});
  const [sunrise ,setSunrise] = useState('');
  const [sunset ,setSunset] = useState('');

  useEffect(() => {
    fetchLocation()
  },[]);

  const fetchLocation =  async() =>{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5c4dec6ad3ef53155b7527da78253474`;
      await axios.get(url).then(function (response) {
          setWeatherdata(response.data);
          console.log(response.data);
          getTimeFromDate(response.data)
      })
      .catch(function (error) {
          console.log(error);
      })
  }

  function getTimeFromDate(weatherInfo) {
    console.log(weatherInfo);
    if(weatherData){
      setSunrise(new Date(weatherInfo['sys']['sunrise'] * 1000).toLocaleTimeString());
      setSunset(new Date(weatherInfo['sys']['sunset'] * 1000).toLocaleTimeString());
      console.log(sunrise,sunset);
    }
  }

  function handleSubmit(event) {
    fetchLocation();
    event.preventDefault();
  }

  function handleInputChanged(event) {
    setCity(event.target.value);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 col-sm-12">
           <WeatherSearch handleSubmit={handleSubmit} cityname={cityname} handleInputChanged={handleInputChanged}/>
        </div>
        <div className="col-12 col-md-6 col-sm-12">
          <WeatherDetail weatherData={weatherData} sunrise={sunrise} sunset = {sunset}/>
        </div>
      </div>
    </div>
  )
}

export default Weather
