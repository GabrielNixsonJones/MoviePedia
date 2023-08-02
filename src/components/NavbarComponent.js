import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { SearchBar } from './SearchBar';




export const NavbarComponent = () => {


    return (
        <div>
            <Navbar className="shadow-lg backgroundColor">
                <Container>
                    <Navbar.Brand href="#home" className='fs-3 text-light fw-bold'>MoviePedia</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <SearchBar />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
