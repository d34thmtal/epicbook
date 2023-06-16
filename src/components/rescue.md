import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import allbooks from '../json/allbooks.json';
import {Link} from 'react-router-dom';

function CardsProd({filteredBooks}) {
    const [selectBook, setSelectBook] = useState('');

    useEffect(() => {
        const booksSelected = allbooks.map((book) => ({
            ...book,
            // selected: false,
        }));
        setBooks(booksSelected);
    }, []);
    // const cardSelectClass = (selectBook === index ? book.selected ? 'selected border border-4 border-danger' : 'unselected';
    const cardSelectClass = selectBook === i ? "selected border border-3 border-danger" : "unselected";

    const resetSelection =() => {
        setSelectBook("")}

    const handleBookClick = (i) => {
        console.log(i)
        resetSelection()
        setSelectBook(index)

        // const updatedBooks = books.map((book, i) => {
        //     if (i === index) {
        //         return {
        //             ...book,
        //             selected: !book.selected,
        //         };
        //     } else {
        //         return {
        //             ...book,
        //             selected: false,
        //         };
        //     }
        // });
        // setBooks(updatedBooks);
    };


    return (
        <Container fluid className="d-flex">
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                {filteredBooks.map((book, i) => (
                    <Col key={i} xs={12} md={4} lg={3}>
                        <Card
                            className={`h-100 shadow ${cardSelectClass}`}
                            id="card-body"
                        >
                            <Card.Img
                                className={`p-3`}
                                style={{ width: '300px' }}
                                variant="top"
                                src={book.img}
                                onClick={() => handleBookClick(i)}
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="p-3 m-2">
                                    {book.title.length > 100
                                        ? book.title.slice(0, 100) + '...'
                                        : book.title}
                                </Card.Title>
                                <div>
                                    <Card.Text>{book.category}</Card.Text>
                                    <Card.Text>{book.asin}</Card.Text>
                                    <Card.Text>€ {book.price}</Card.Text>
                                    <Button variant="dark">Acquista</Button>
                                    <Link to={`/${book.category}/${book.asin}`}>
                                        <Button variant="primary">Info</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default function LastRelease({handleChangeInput, filteredBooks}) {


    return (
        <Container>
            <CardsProd handleChangeInput={handleChangeInput} filteredBooks={filteredBooks}/>
        </Container>
    );
}
