import "./Home.css";
import Passport from "../../assets/images/Logo.jpg";
import PassportDesing from "../../assets/images/11006.jpg"
import { Button, Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <header>
        <div className="container-header">
          <div className="title fw-bolder px-5">
            ¡Te asesoramos para que cumplas tus sueños en el exterior!
            <br />
            Contactanos ahora para comenzar este camino juntos
            <br />
            <Button className="fw-bold mt-3 bg" id="button-go">
              ¡Comencemos!
            </Button>
          </div>
        </div>
      </header>
      <main>
        <Row id="row-servicios" className="py-5 px-5">
          <Container className="text-center" fluid>
            <Row className=" px-5">
              <h1 className="fw-bold">Nuestros servicios</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                animi doloremque aspernatur harum quidem nihil, itaque
                laboriosam architecto doloribus voluptatum.
              </h4>
              <br />
            </Row>
            <Row className="py-5 px-5">
              <Col className="py-3">
                <img src={Passport} alt="Pasaportes" width={500} />
                <h4 className="fw-bold mt-3">Lorem, ipsum dolor.</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  dignissimos fugiat ipsa expedita. Doloribus voluptatibus,
                  perspiciatis obcaecati officiis dolor deleniti.
                </p>{" "}
              </Col>
              <Col className="py-3">
                <img src={Passport} alt="Pasaportes" width={500} />
                <h4 className="fw-bold mt-3">Lorem, ipsum dolor.</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  dignissimos fugiat ipsa expedita. Doloribus voluptatibus,
                  perspiciatis obcaecati officiis dolor deleniti.
                </p>{" "}
              </Col>
              <Col className="my-3">
                <img src={Passport} alt="Pasaportes" width={500} />
                <h4 className="fw-bold mt-3">Lorem, ipsum dolor.</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  dignissimos fugiat ipsa expedita. Doloribus voluptatibus,
                  perspiciatis obcaecati officiis dolor deleniti.
                </p>{" "}
              </Col>
            </Row>
          </Container>
        </Row>
        <Row id="row-aboutus" className="py-5 px-5">
          <Container id="container-aboutus">
            <Row>
              <Col>
              <img src={PassportDesing}  alt="Pasaportes" className="img-shadow"/>
              </Col>
              <Col className="mt-4">
              <h1 className="fw-bold">Sobre nosotros</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt possimus sapiente quas! Alias, aspernatur? Explicabo, assumenda earum! Temporibus tempore, amet eaque, possimus perferendis, veniam iure molestiae consequatur alias sequi reiciendis delectus labore corrupti magnam saepe velit at vitae quod. Fuga mollitia debitis ipsum aliquam vero ullam tempora non quia ipsa?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, deserunt quaerat sit asperiores ipsum accusantium perferendis exercitationem vel, culpa ut fuga nesciunt adipisci dolorem veritatis dolore odio nemo et consequatur?</p>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row id="row-resultados"></Row>
      </main>
    </>
  );
};
