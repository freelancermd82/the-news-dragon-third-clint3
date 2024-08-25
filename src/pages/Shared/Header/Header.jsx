import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (

        <Container>
            <div className="text-center">
                <Image src={logo} fluid />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('MMMM, D, YYYY, h:mm:ss a')}</p>
            </div>
            <div className='d-flex bg-light mb-2'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Profile</Nav.Link>
                        <Button variant="outline-secondary">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>

    );
};

export default Header;