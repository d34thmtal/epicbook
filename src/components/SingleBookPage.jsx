import React from 'react';
import { useParams } from 'react-router-dom';
import fantasyBooks from '../json/fantasy.json';
import horrorBooks from '../json/horror.json';
import scifiBooks from '../json/scifi.json';
import historyBooks from '../json/history.json';
import romanceBooks from '../json/romance.json';
import allbooks from '../json/allbooks.json';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';


function SingleBookPage() {
    const { asin } = useParams();
    const { category } = useParams();

    let book;

    if (category === "horrorBooks") {
        book = horrorBooks.find((elem) => elem.asin === asin);
    } else if (category === "scifiBooks") {
        book = scifiBooks.find((elem) => elem.asin === asin);
    } else if (category === "historyBooks") {
        book = historyBooks.find((elem) => elem.asin === asin);
    } else if (category === "romanceBooks") {
        book = romanceBooks.find((elem) => elem.asin === asin);
    } else if (category === "fantasyBooks") {
        book = fantasyBooks.find((elem) => elem.asin === asin);
    } else {
        book = allbooks.find((elem) => elem.asin === asin);
    }
    console.log("book", book)
    return (
        // <div>
        //     <h1>{book.title}</h1>
        //     <img src={book.img} alt={book.title} />
        //     <p>Categoria: {book.category}</p>
        //     <p>ID: {book.asin}</p>
        //     <p>Prezzo: € {book.price}</p>

        // </div>
        <Container>
            <div className="row">
                <div className="col-md-6">
                    <img src={book.img} alt={book.title} className=" w-50 m-2 shadow-lg: " />
                </div>
                <div className="col-md-6">
                    <h1>{book.title}</h1>
                    <p>Categoria: {book.category}</p>
                    <p>ID: {book.asin}</p>
                    <p>Prezzo: € {book.price}</p>
                    <Button>Acquista</Button>
                </div>
            </div>
        </Container>
    );
}


export default SingleBookPage;


