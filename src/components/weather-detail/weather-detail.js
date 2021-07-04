import { Card } from 'react-bootstrap';
import './weather-detail.css';

function WeatherDetail(props){
  return (
    <div>
    {props.weatherData.weather ?
      <Card className="detailCard">
            <Card.Img variant="top" src={`http://openweathermap.org/img/w/${props.weatherData['weather'][0]['icon']}.png`} />
              <Card.Title>{props.weatherData['weather'][0]['description']} {Math.floor(props.weatherData['main']['temp']-273)}
                <span>&#176;</span> C</Card.Title>
                <Card.Title>
                <h3 >{props.weatherData['name']} {props.weatherData['sys']['country']}</h3>
                </Card.Title>
            <Card.Body>


                <Card.Text>
                <div className="row">
                  <div className="col-12 col-md-6 col-sm-12 boxclass">
                    {props.weatherData['weather'][0]['icon'].includes('d') ?
                    <h6><i class="fas fa-sunrise fa-2x"></i> Sunset {props.sunset}</h6>
                    :<h6><i class="fas fa-sunset fa-2x"></i> Sunrise {props.sunrise}</h6>}
                  </div>
                  <div className="col-12 col-md-6 col-sm-12 boxclass">
                    <h6><i class="fa fa-tachometer fa-2x" aria-hidden="true"></i> Pressure {props.weatherData['main']['pressure']}mbar</h6>
                  </div>
                  <div className="col-12 col-md-6 col-sm-12 boxclass">
                    <h6><i class="fas fa-humidity fa-2x"></i> Humidity {props.weatherData['main']['humidity']}%</h6>
                  </div>
                  <div className="col-12 col-md-6 col-sm-12 boxclass">
                    <h6><i class="fas fa-fan fa-2x"></i> Wind {props.weatherData['wind']['speed']}km/h</h6>
                  </div>
                  <div className="col-12 col-md-6 col-sm-12 boxclass">
                    <h6><i class="fas fa-map-marker-alt fa-2x"></i> Latitude {props.weatherData['coord']['lat']}</h6>
                  </div>
                  <div className="col-12 col-md-6 col-sm-12 boxclass">
                    <h6><i class="fas fa-map-marker-alt fa-2x"></i> Longitude {props.weatherData['coord']['lon']}</h6>
                  </div>
                </div>

                </Card.Text>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
       :<h2>Loading...</h2>}
       </div>
    )
}

export default WeatherDetail
