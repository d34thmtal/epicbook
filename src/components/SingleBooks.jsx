import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function SingleBook({ book, show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Text><strong>Genere</strong> {book.category}</Card.Text>
                        <Card.Text><strong>Id</strong> {book.asin}</Card.Text>
                        <Card.Text><strong>Prezzo</strong> € {book.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Chiudi
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SingleBook;
