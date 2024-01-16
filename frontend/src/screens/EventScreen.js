import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, Card, Button, ListGroup } from "react-bootstrap";
import events from "../events";
import "./EventScreen.css";
import Map from '../components/Map';

export const EventScreen = () => {
  const params = useParams();
  const event = events.find((p) => p._id === params.id);

  const containerStyle = {
    backgroundColor: "linear-gradient(to right, #f0f0f0, #e0e0e0)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    border: "none",
    opacity: 0,
    animation: "fadeIn 0.5s ease-out forwards",
  };

  const containerStyle1 = {
    backgroundColor: "linear-gradient(to right, #f0f0f0, #e0e0e0)",
    padding: "20px 0 20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    border: "none",
    width: "40%",
    margin: "0 auto 0 115px",
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "120vh",
          }}
        >
          <div style={containerStyle}>
            <Image src={event.image} alt={event.name} fluid style={{ width: "1050px" }}/>
          </div>
        </div>
      </Row>
      <Row>
        <div style={containerStyle1}>
          <div style={{ display: "flex", marginLeft: "115px" }}>
            <ListGroup.Item style={{ marginTop: "15px" }}>
              <i class="fa-solid fa-user-plus">
                &nbsp;<b>Followers: {event.follower}</b>
              </i>
            </ListGroup.Item>
            <Button
              style={{ backgroundColor: "#4B0082", marginLeft: "30px" }}
              variant="dark"
            >
              Follow
            </Button>
          </div>
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
                  <Map address={event.location.address} />
                </b>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={2} className="custom-width-col">
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
