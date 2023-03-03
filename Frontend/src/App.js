import './App.css';
import React from 'react';
import {Container,Card, Row,Col,Nav,NavDropdown,Navbar,Button,Form} from 'react-bootstrap';
import ChatbotVideo from './components/ChatBotVideo';



function App() {
   return( <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand id='bot' href="#home">Chat Bot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Nav.Link eventKey={2} href="#memes">
              {/* Dank memes */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container>
      <Row>
        <Col>
          <h1>Articles</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Article 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacus sit amet sapien maximus interdum vel nec enim.
              </Card.Text>
                <Card.Link href="https://example.com/page1"></Card.Link>
                <Button id='Btn' variant="primary">Read More</Button>
                {/* <Card.Link href="https://example.com/page2">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Article 2</Card.Title>
              <Card.Text>
                Ut sodales dolor sapien, nec facilisis purus feugiat eu. Donec aliquam enim at magna mollis, vitae feugiat magna sodales.
              </Card.Text>
                <Card.Link href="https://example.com/page2"></Card.Link>
                <Button id='Btn' variant="primary">Read More</Button>
                {/* <Card.Link href="https://example.com/page2">Another Link</Card.Link> */}

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Article 3</Card.Title>
              <Card.Text>
                Nullam quis tortor nec nisi elementum hendrerit vel vel arcu. Duis facilisis nisl sed laoreet interdum.
              </Card.Text>
                <Card.Link href="https://unsplash.com/photos/CXYPfveiuis/"></Card.Link>
                <Button id='Btn' variant="primary">Read More</Button>
                {/* <Card.Link href="https://example.com/page2">Another Link</Card.Link> */}
                
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    <ChatbotVideo></ChatbotVideo>

    </div>)
  }
  
  export default App;



