import React from 'react'
import {Card} from 'react-bootstrap';
import {Link } from 'react-router-dom'

const Event = ({event}) => {
  return (

    <Card className ="my-5 p-3 rounded">
      <Link to = {`./event/${event._id}`}>
          <Card.Img src ={event.image} variant ='top'/>
      </Link>
      <Card.Body>
      <Link to = {`./event/${event._id}`}>
        <Card.Title as ='div' style={{ height: '4rem' }}>
          <strong>{event.name}</strong>
        </Card.Title>
      </Link>  
        <Card.Text as ='div'>
         {event.date_time}
        </Card.Text>
        <Card.Text as ='div'style={{ height: '4rem' }}>
          {event.location.venue}<br/>
          <i class="fa-solid fa-location-dot"></i> {event.location.address}
        </Card.Text>
      </Card.Body>
    </Card>
   
  )
}

export default Event;