import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
         <Row>
           <Col className= "text-center py-3" style ={{position: 'absolute', bottom: "0", left: "5%"}}>
             Copyright &copy; Eventbrite
           </Col>
         </Row>
      </Container>
    </footer>
  )
}

export default Footer