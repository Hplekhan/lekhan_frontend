import Card from 'react-bootstrap/Card';
import NavBarUi from './NavBarUi';
import FooterPartUi from './FooterPartUi';
import { Container, Row, Col } from 'react-bootstrap';

function Clients() {
    return (
        <>
            <NavBarUi />
            <h3 className="text-center my-5" id="port">
                CLIENT ALBUM'S
            </h3>
            <Container className="mt-4">
                <Row className="justify-content-center"> 

                    <Col sm={12} md={6} lg={4}  className="mb-5">
                        <Card className="bg-dark text-white text-center" id="card" style={{ width: '18rem', height: '25rem' }}>
                            <Card.Img
                                alt="Card image"
                                src=' https://images.unsplash.com/photo-1527763874622-d23474336e68?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3VjdW1iZXIlMjBpbiUyMGJvd2x8ZW58MHx8MHx8fDA%3D'
                                style={{ width: '100%', height: '100%' }}
                            />
                            <Card.ImgOverlay>
                                <div className="text-white text-center mt-5" id="name">
                                    <h5 style={{ fontSize: '1.5rem' }}>FRENCH COOKBOOK</h5>
                                    <p style={{ fontSize: '0.8rem', color: 'white' }}>Client: Herbal Magzine</p>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    {/* SECOND */}
                    <Col sm={12} md={6} lg={4}  className="mb-5">
                        <Card className="bg-dark text-white text-center" id="card" style={{ width: '18rem', height: '25rem' }}>
                            <Card.Img
                                alt="Card image"
                                src='https://images.unsplash.com/photo-1520099786114-37290de065e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YlJFQUslMjBCQUtJTkclMjBSRUNJUEVTfGVufDB8fDB8fHww'
                                style={{ width: '100%', height: '100%' }}
                            />
                            <Card.ImgOverlay>
                                <div className="text-white text-center mt-5" id="name">
                                    <h5 style={{ fontSize: '1.5rem' }}>FRENCH COOKBOOK</h5>
                                    <p style={{ fontSize: '0.8rem', color: 'white' }}>Client: The Baker Blog</p>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    {/* THIRD CARD */}
                    <Col sm={12} md={6} lg={4}  className="mb-5">
                        <Card className="bg-dark text-white text-center" id="card" style={{ width: '18rem', height: '25rem' }}>
                            <Card.Img
                                alt="Card image"
                                src='https://images.unsplash.com/photo-1517416795316-fe60b516a37d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZW5jaCUyMGJha2VzfGVufDB8fDB8fHww'
                                style={{ width: '100%', height: '100%' }}
                            />
                            <Card.ImgOverlay>
                                <div className="text-white text-center mt-5" id="name">
                                    <h5 style={{ fontSize: '1.5rem' }}>FRENCH COOKBOOK</h5>
                                    <p style={{ fontSize: '0.8rem', color: 'white' }}>Client: La Peche</p>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>


                </Row>
            </Container>
            <FooterPartUi />
        </>
    );
}

export default Clients;
