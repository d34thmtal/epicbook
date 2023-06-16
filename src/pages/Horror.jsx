import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import horrorBooks from '../json/horror.json';
import Welcome from '../components/Welcome';


function CardsProd() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(horrorBooks);
    }, []);


    return (
        <Container fluid className="d-flex">
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                {books.map((book, i) => (
                    <Col key={i} xs={12} md={4} lg={3}>
                        <Card className="h-100 shadow" id="card-body">
                            <Card.Img className="p-3 w-75 object-fit-contain" variant="top" src={book.img} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="p-3 m-2">
                                    {book.title.length > 100 ? book.title.slice(0, 100) + '...' : book.title}
                                </Card.Title>
                                <div>
                                    <Card.Text>{book.category}</Card.Text>
                                    <Card.Text>{book.asin}</Card.Text>
                                    <Card.Text>€ {book.price}</Card.Text>
                                    <Button variant="dark">Acquista</Button>
                                    <Link to={`/${book.category}/${book.asin}`}><Button variant="primary">Info</Button></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default function HorrorRelease() {
    return (
        <Container>
            <Welcome />
            <CardsProd />
        </Container>
    );
}