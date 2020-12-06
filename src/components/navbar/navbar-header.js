import React from "react";
import { Avatar } from "../avatar";
import { Navbar } from "react-bootstrap";

export function NavbarHeader() {
  return (
    <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand href="/home">Instruments</Navbar.Brand>
        <Navbar.Brand href="/profile">
          <Avatar imgSrc="https://randomuser.me/api/portraits/men/6.jpg"></Avatar>
        </Navbar.Brand>
    </Navbar>
  );
}
