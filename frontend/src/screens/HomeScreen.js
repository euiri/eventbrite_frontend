import React from 'react'
import events from '../events'
import Event from '../components/Event'

const HomeScreen = () => {
  return (
    <>
      <h1>Best Events and Things to Do</h1>
      <Row>
        {events.map(p => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Event event={p} />
          </Col>
          ))
        }
      </Row>
    </>
  )
}

export default HomeScreen