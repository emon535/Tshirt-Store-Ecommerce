import React, { Component, useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


const TopBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">TShirt Online Shop</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Men</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Women</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Kids</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Shoes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Brands</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment >
    )
}


export default TopBar;