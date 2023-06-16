import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function SearchInput({handleQueryChange}) {
    const [searchText, setSearchText] = useState('')

function handleChangeInput(e) {
    const inputValue = e.target.value;
    setSearchText(inputValue);
    handleQueryChange(inputValue)
}


return (
    <Row >
        <div className="inputSearch">
            <label className="text-white p-2"> Cerca dei libri:</label>
            <input type="text" className="text-center " placeholder="Cerca i libri" value={searchText} onChange={handleChangeInput} />
        </div>
    </Row>
)
}

export default function MyNavbar({handleChangeInput}) {
    function handleQueryChange(value) {
        handleChangeInput(value)
    }
    

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">EPICBOOK</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <NavDropdown title="Generi" id="basic-nav-dropdown">
                        <Link className='dropdown-item' to="/fantasy">Fantasy</Link>
                        <Link className='dropdown-item' to="/horror">Horror</Link>
                        <Link className='dropdown-item' to="/history">History</Link>
                        <Link className='dropdown-item' to="/romance">Romance</Link>
                        <Link className='dropdown-item' to="/scifi">Scifi</Link>
                    </NavDropdown>
                </Nav>
                <SearchInput handleQueryChange={handleQueryChange} />
            </Container>
        </Navbar>
    );
}

