import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, Card, Button, ListGroup } from "react-bootstrap";
import events from "../events";
import "./EventScreen.css";
import Map from "../components/Map";

export const EventScreen = () => {
  const params = useParams();
  const event = events.find((p) => p._id === params.id);
return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
       <div className="containerStyle">
            <Image src={event.image} alt={event.name} fluid style={{ maxWidth: "100%" , height:"50vh"}}/>
          </div>
      </Row>
      <Row>
      <div className="containerStyle1">
            <ListGroup.Item style={{ marginTop: "20px"}}>
            &nbsp; <i class="fa-solid fa-user-plus">
                &nbsp;<b>Followers: {event.follower}</b>
              </i>
              <Button
              style={{ backgroundColor: "#4B0082", marginLeft: "30px" }} variant="dark"
            >
              Follow
            </Button>
            </ListGroup.Item>
          </div>
      </Row>
      <br></br>
      <Row>
        <Col md={8} className="padding">
          <ListGroup className="Details" variant="flush">
            <ListGroup.Item>
              <h3>{event.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Price : ${event.price}</b>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Description : {event.description}</b>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Organiser : {event.organizer}</b>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <b>
                  <i class="fa-solid fa-calendar-days"></i> Date & Time :{event.date_time}
                </b>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <b>
                  <i class="fa-solid fa-clock"></i> Duration : {event.duration}
                </b>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <b>
                  <i class="fa-solid fa-building"></i> Venue : {event.location.venue}
                </b>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <b>
                  <i class="fa-solid fa-location-dot"></i> Location : {event.location.address}
                  
                </b>
                <Map address={event.location.address} />
              </Row>
             </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} className="custom-width-col">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <b>Ticket Price:</b>
                  </Col>
                  <Col>
                    <strong>${event.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <b>Status:</b>
                  </Col>
                  <Col>
                    <b> {event.spaceLeft > 0 ? "Available" : "Sold Out"}</b>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={event.spaceLeft === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
            </Card>
        </Col>
      </Row>
    </>
  );
};
