import { Button,Form,Card } from 'react-bootstrap';
import './weather-search.css';

function WeatherSearch(props){
  return (

    <Form  onSubmit={props.handleSubmit}>
       <Card className="cardClass">
        <Card.Body>
          <Card.Title>Search City To get Location Info</Card.Title>
          <Card.Text>
            <Form.Control type="text" placeholder="Search City"
            value={props.cityname} onChange={props.handleInputChanged.bind(this)}/>
          </Card.Text>
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Card.Body>
      </Card>
    </Form>
  )
}

export default WeatherSearch
