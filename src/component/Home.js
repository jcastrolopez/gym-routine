import React, { Component } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap';

class Home extends Component {
    render() {
        return(
            <CardGroup>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/friend_gyms.jpg" />
                <Card.Body>
                  <Card.Title>Friends</Card.Title>
                  <Card.Text>
                    This section is to find routines of our friends
                  </Card.Text>
                  <Button href="/friends" variant="warning">Friends</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="/friends_routines.jpg" />
                <Card.Body>
                  <Card.Title>Routines</Card.Title>
                  <Card.Text>
                    This section is to find and create routines.
                  </Card.Text>
                  <Button href="/routines" variant="warning">Routines</Button>
                </Card.Body>
              </Card>
            </CardGroup>
        )
    }
}

export default Home;