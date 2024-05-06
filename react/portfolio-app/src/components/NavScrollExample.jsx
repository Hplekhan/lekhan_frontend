import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function NavScrollExample() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" className="bg-body-tertiary shadow m-3">
          <Container fluid>
            <Navbar.Brand href="#" className="fw-bold">BizLand</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row>
            <Col sm={12} className="text-center"><div className='mt-4 btn btn-primary bg-primary-subtle text-primary border rounded-pill fw-bold'>TEAM</div></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12} className="text-center mt-3"><h2>Our Hardworking <span className='text-primary fw-bold'>Team</span></h2></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12} className="text-center mt-3"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et. Eget aliquet nibh praesent tristique magna. In tellus integer feugiat scelerisque varius. Mauris in aliquam sem fringilla ut. Et tortor at risus viverra adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p></Col>
          </Row>
        </Container>
        <Container className='d-flex justify-content-center mb-3'>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Card style={{ width: '18rem', height: '30rem' }} className='shadow me-4'>
                <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._Bo-v36aCm0ocJiQjzxGgQHaKX%26pid%3DApi&f=1&ipt=fcdf5566ccc30e7a26ea835eb4cd147985f02b99f2e1c8e3d9bed84648bdb507&ipo=images" />
                <Card.Body>
                  <Card.Title className='fw-bold'>Walter White</Card.Title>
                  <Card.Text>
                    Chief Executive Officer
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card style={{ width: '18rem', height: '30rem' }} className='shadow me-4'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" />
                <Card.Body>
                  <Card.Title className='fw-bold mt-3'>Sarah Johnson</Card.Title>
                  <Card.Text>
                    CTO
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card style={{ width: '18rem', height: '30rem' }} className='shadow me-4'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1641260774125-04d527b376a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMGJveSUyMHBvc2V8ZW58MHx8MHx8fDA%3D" />
                <Card.Body>
                  <Card.Title className='fw-bold mb-1'>William Anderson</Card.Title>
                  <Card.Text>
                    Product Manager
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card style={{ width: '18rem', height: '30rem' }} className='shadow me-4'>
                <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aXTXqPOkzLD-0lNxpFe52wHaKM%26pid%3DApi&f=1&ipt=32f649d6824b3c6567e6ba3d71e8a06d25d821b3cbe7afc7981da1159336810c&ipo=images" />
                <Card.Body>
                  <Card.Title className='fw-bold'>Amanda Jepson</Card.Title>
                  <Card.Text>
                    Accountant
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div >
  );
}

export default NavScrollExample;