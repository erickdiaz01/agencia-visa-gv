import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import ChinaIcon from "../../assets/icons/china.png";
import UsaIcon from "../../assets/icons/estados-unidos.png";
import CanadaIcon from "../../assets/icons/canada.png";
import "./Nav.css";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
export const NavComponent = () => {
  return (
    <Fragment>
      <Navbar expand="xl" className="nav-container">
        <Container fluid>
          <Navbar.Brand href="/home" className="name-company">
            <div className="wrap-name">EASY VISA</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xl"
            aria-labelledby="offcanvasNavbar-expand-xl"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-xl">
                Menú
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-start flex-grow-1"
                id="items-navbar"
              >
                <Nav.Link className="nav-item fw-bold" href="/home">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-item fw-bold" href="#action2">
                  Sobre nosotros
                </Nav.Link>
                <NavDropdown
                  title="Visas"
                  id="offcanvasNavbarDropdown-expand-xl"
                >
                  <NavDropdown.Item href="#action3">
                    <img src={UsaIcon} width="15%" alt="UsaIcon" /> Americana
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <img src={CanadaIcon} width="15%" alt="CanadaIcon" />{" "}
                    Canadiense
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <img src={ChinaIcon} width="15%" alt="ChinaIcon" /> China
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Otras visas
                  </NavDropdown.Item>
                </NavDropdown>
                <span className="fill-remaining-space"> </span>
              </Nav>
              <Button variant="outline-success" className="nav-item-btn">
                <BsWhatsapp /> <strong>CONTACTENOS</strong>
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Fragment>
  );
};
