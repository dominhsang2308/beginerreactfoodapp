import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Image } from "react-bootstrap";
import '../headercomponent/header.css'
function BasicExample() {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-danger-subtle sticky-top"
        >
          <Container>
            <Navbar.Brand>
              <Image
                src="https://img.freepik.com/premium-vector/food-logo-design_139869-254.jpg"
                width={70}
                height={70}
                roundedCircle
              ></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                  
              </Offcanvas.Header>
             
              <Offcanvas.Body>
              {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 "
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
              </Form> */}
                
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About Me</Nav.Link>

                  <NavDropdown
                    title="Into"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Register
                    </NavDropdown.Item>
                    
                    
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default BasicExample;
