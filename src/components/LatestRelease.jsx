// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// // inzio commento
// // import fantasyBooks from '../json/fantasy.json';
// // import horrorBooks from '../json/horror.json';
// // import scifiBooks from '../json/scifi.json';
// // import historyBooks from '../json/history.json';
// // import romanceBooks from '../json/romance.json';
// // fine commento
// import allbooks from '../json/allbooks.json';

// function CardsProd({ inputValue }) {
//     const [books, setBooks] = useState([]);

//     // inzio commento
// //     useEffect(() => {
// //     setBooks(fantasyBooks.concat(horrorBooks).concat(scifiBooks).concat(historyBooks).concat(romanceBooks));
// //      }, []);
// // fine commento

//     useEffect(() => {
//         const bookSelected = allbooks.map((book) => ({
//             ...book,
//             selected: false,
//         }));
//         setBooks(bookSelected);
//     }, []);

//     const handleBookClick = (index) => {
//         const updatedBooks = books.map((book, i) => {
//             if (i === index) {
//                 return {
//                     ...book,
//                     selected: !book.selected,
//                 };
//             } else {
//                 return {
//                     ...book,
//                     selected: false,
//                 };
//             }
//         });
//         setBooks(updatedBooks);
//     };

//     const filteredBooks = books.filter((book) =>
//         book.title.toLowerCase().includes(inputValue.toLowerCase())
//     );

//     return (
//         <Container fluid className="d-flex">
//             <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
//                 {filteredBooks.map((book, i) => (
//                     <Col key={i} xs={12} md={4} lg={3}>
//                         <Card
//                             className={`h-100 shadow ${book.selected ? 'border border-3 border-danger' : ''
//                                 }`}
//                             id="card-body"
//                         >
//                             <Card.Img
//                                 className={`p-3 ${book.selected ? 'selected-image' : ''}`}
//                                 style={{ width: '300px' }}
//                                 variant="top"
//                                 src={book.img}
//                                 onClick={() => handleBookClick(i)}
//                             />

//                             <Card.Body className="d-flex flex-column">
//                                 <Card.Title className="p-3 m-2">
//                                     {book.title.length > 100
//                                         ? book.title.slice(0, 100) + '...'
//                                         : book.title}
//                                 </Card.Title>
//                                 <div>
//                                     <Card.Text>{book.category}</Card.Text>
//                                     <Card.Text>{book.asin}</Card.Text>
//                                     <Card.Text>€ {book.price}</Card.Text>
//                                     <Button variant="dark">Acquista</Button>
//                                     <Link to={`/${book.category}/${book.asin}`}>
//                                         <Button variant="primary">Info</Button>
//                                     </Link>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default function LastRelease() {
//     const [inputValue, setInputValue] = useState('');

//     return (
//         <Container>
//             <div className="container p-3">
//                 <input
//                     type="text"
//                     onChange={(event) => setInputValue(event.target.value)}
//                     value={inputValue}
//                     placeholder="Search"
//                     className="form-control"
//                 />
//             </div>
//             <CardsProd inputValue={inputValue} />
//         </Container>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import allbooks from '../json/allbooks.json';
// import { Link } from 'react-router-dom';

// export function CardsProd({ inputValue }) {
//     const [books, setBooks] = useState('');

//     useEffect(() => {
//         const booksWithSelected = allbooks.map((book) => ({
//             ...book,
//             selected: false,
//         }));
//         setBooks(booksWithSelected);
//     }, []);

//     const handleBookClick = (index) => {
//         const updatedBooks = books.map((book, i) => {
//             if (i === index) {
//                 return {
//                     ...book,
//                     selected: !book.selected,
//                 };
//             } else {
//                 return {
//                     ...book,
//                     selected: false,
//                 };
//             }
//         });
//         setBooks(updatedBooks);
//     };

//     const filteredBooks = allbooks.filter((book) =>
//         book.title.toLowerCase().includes(books.toLowerCase())
//     );// si può far filtrare sia per titolo che per categoria? Si potrebbe provare con &&

//     return (
//         <Container fluid className="d-flex">
//             <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
//                 {filteredBooks.map((book, i) => (
//                     <Col key={i} xs={12} md={4} lg={3}>
//                         <Card
//                             className={`h-100 shadow ${book.selected ? 'border border-3 border-danger' : ''
//                                 }`}
//                             id="card-body"
//                         >
//                             <Card.Img
//                                 className={`p-3 ${book.selected ? 'selected-image' : ''}`}
//                                 style={{ width: '300px' }}
//                                 variant="top"
//                                 src={book.img}
//                                 onClick={() => handleBookClick(i)}
//                             />

//                             <Card.Body className="d-flex flex-column">
//                                 <Card.Title className="p-3 m-2">
//                                     {book.title.length > 100
//                                         ? book.title.slice(0, 100) + '...'
//                                         : book.title}
//                                 </Card.Title>
//                                 <div>
//                                     <Card.Text>{book.category}</Card.Text>
//                                     <Card.Text>{book.asin}</Card.Text>
//                                     <Card.Text>€ {book.price}</Card.Text>
//                                     <Button variant="dark">Acquista</Button>
//                                     <Link to={`/${book.category}/${book.asin}`}>
//                                         <Button variant="primary">Info</Button>
//                                     </Link>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default function LastRelease({setBooks}) {
//     // const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (value) => {
//         setBooks(value);
//     };

//     return (
//         <Container>
//             {/* <MyNavbar onInputChange={handleInputChange} /> */}
//             <CardsProd handleInputChange={handleInputChange} />
//         </Container>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import allbooks from '../json/allbooks.json';
// import {Link} from 'react-router-dom';

// function CardsProd({filteredBooks}) {
//     const [books, setBooks] = useState('');

//     useEffect(() => {
//         const booksSelected = allbooks.map((book) => ({
//             ...book,
//             selected: false,
//         }));
//         setBooks(booksSelected);
//     }, []);


//     const handleBookClick = (index) => {
//         const updatedBooks = books.map((book, i) => {
//             if (i === index) {
//                 return {
//                     ...book,
//                     selected: !book.selected,
//                 };
//             } else {
//                 return {
//                     ...book,
//                     selected: false,
//                 };
//             }
//         });
//         setBooks(updatedBooks);
//     };


//     return (
//         <Container fluid className="d-flex">
//             <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
//                 {filteredBooks.map((book, i) => (
//                     <Col key={i} xs={12} md={4} lg={3}>
//                         <Card
//                             className={`h-100 shadow ${book.selected ? 'border border-4 border-danger' : ''
//                                 }`}
//                             id="card-body"
//                         >
//                             <Card.Img
//                                 className={`p-3 ${book.selected ? 'selected-image' : ''}`}
//                                 style={{ width: '300px' }}
//                                 variant="top"
//                                 src={book.img}
//                                 onClick={() => handleBookClick(i)}
//                             />
//                             <Card.Body className="d-flex flex-column">
//                                 <Card.Title className="p-3 m-2">
//                                     {book.title.length > 100
//                                         ? book.title.slice(0, 100) + '...'
//                                         : book.title}
//                                 </Card.Title>
//                                 <div>
//                                     <Card.Text>{book.category}</Card.Text>
//                                     <Card.Text>{book.asin}</Card.Text>
//                                     <Card.Text>€ {book.price}</Card.Text>
//                                     <Button variant="dark">Acquista</Button>
//                                     <Link to={`/${book.category}/${book.asin}`}>
//                                         <Button variant="primary">Info</Button>
//                                     </Link>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default function LastRelease({handleChangeInput, filteredBooks}) {


//     return (
//         <Container>
//             <CardsProd handleChangeInput={handleChangeInput} filteredBooks={filteredBooks}/>
//         </Container>
//     );
// }

import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import allbooks from '../json/allbooks.json';
import {Link} from 'react-router-dom';

function CardsProd({filteredBooks}) {
    const [books, setBooks] = useState('');
    const [selectBook, setSelectBook] = useState('');

    useEffect(() => {
        const booksSelected = allbooks.map((book) => ({
            ...book,
            selected: false,
        }));
        setBooks(booksSelected);
    }, []);



    const cardSelectClass =  selectBook ? "selected border border-3 border-danger" : "unselected";

    const resetSelection =() => {
        setSelectBook("")}

    const handleBookClick = (i) => {
        console.log(i)
        resetSelection()
        setSelectBook(i)
    }

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


