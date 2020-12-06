import React from "react";
import { NavbarHeader } from "./components/navbar";
import { Container } from "react-bootstrap";
import { MainBody } from "./components/main-body";

export default function App() {
  return (
    <React.Fragment>
      <NavbarHeader></NavbarHeader>
      <Container fluid>
        <MainBody></MainBody>
      </Container>
    </React.Fragment>
  );
}
