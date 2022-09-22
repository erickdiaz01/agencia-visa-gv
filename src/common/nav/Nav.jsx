import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import UsaSvg from "../../assets/images/Flag_of_the_United_States.svg";
import ColSvg from "../../assets/images/Flag_of_Colombia.svg";
import Logo from "../../assets/images/visa-americana-colombia-estados-unidos.jpg";
import ChinaIcon from "../../assets/icons/china.png"
import UsaIcon from "../../assets/icons/estados-unidos.png"
import CanadaIcon from "../../assets/icons/canada.png"
import "./Nav.css";
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import{BsWhatsapp} from 'react-icons/bs'
export const NavComponent = () => {
  return (
    <Fragment>
      {/* <div className="nav-container">
        <div className="name-logo-company">
          <h3>EASY VISA</h3>
        </div>
        <div className="container-nav-items">
          <ul>
            <li>Sobre nosotros</li>
            <li>Visas</li>
            <li>Contactenos</li>
            <li>Casos de exito</li>
            <li>Herramientas</li>
          </ul>
        </div>
        <div className="contact-button">
          <Button variant="success">Success</Button>
        </div>
      </div> */}
      <Navbar expand="xl" className="nav-container">
        <Container fluid>
          <Navbar.Brand href="#" className="name-company">
            <div className="wrap-name">
            EASY VISA
            </div>
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
                <Nav.Link className="nav-item" href="#action1">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-item" href="#action2">
                  Sobre nosotros
                </Nav.Link>
                <NavDropdown
                  title="Visas"
                  id="offcanvasNavbarDropdown-expand-xl"
                >
                  <NavDropdown.Item href="#action3">
                  <img src={UsaIcon} width="15%" alt="UsaIcon"/> Americana</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  <img src={CanadaIcon} width="15%" alt="CanadaIcon"/> Canadiense
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  <img src={ChinaIcon} width="15%" alt="ChinaIcon"/> China 
                  </NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                 
                </NavDropdown>
                <span className="fill-remaining-space"> </span>
              
              </Nav>
              <Button variant="outline-success" className="nav-item-btn" >
                  <BsWhatsapp/> Contactenos
                </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Fragment>
  );
};
