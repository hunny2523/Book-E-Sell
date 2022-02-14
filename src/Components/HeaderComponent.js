import { Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, Nav, Button, Form, Input, Collapse, Jumbotron } from 'reactstrap';
import logo from './logo.jpeg'
// import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <Navbar expand="md" className="container">
                <NavbarBrand href="/">
                    <img src={logo} alt="Logo" height="45" />
                </NavbarBrand>
                <NavbarToggler className="btn btn-dark border" onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="ml-auto align-items-center">
                        <NavItem>
                            <NavLink >
                               <a href="#" className='text-danger'>Login</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                            <a href="#" className='text-danger'>Register</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Button color="light" className='btn border button'><span className="fa fa-shopping-cart fa-lg text-danger"> 0 Cart</span> </Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Jumbotron style={{ padding:"30px"}} >
            <div className="container">
                <Form className="row justify-content-center ">
                    <Input type="search" className="form-control w-50" placeholder="What are you looking For..."></Input>
                    <Button color="success" className="button mt-sm-0 mt-2 col-6 col-sm-2 mx-2"><span className='fa fa-search mx-1'></span> Search</Button>
                    <Button color="danger" className=" button  mt-sm-0 mt-2 col-6 col-sm-2">Cancel</Button>
                </Form>

            </div>
            </Jumbotron>
        </div>
    )
}

export default Header;