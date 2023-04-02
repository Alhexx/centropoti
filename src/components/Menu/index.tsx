import { Container, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

import styles from "./style.module.scss";

export function Menu() {
  return (
    <Navbar expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand>
            <img
              src="/img/potilogoSF.jpg"
              alt={"POTI"}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "55px",
                maxWidth: "55px",
              }}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className={styles.menuItems} href="/register">
              O Centro
            </Nav.Link>
            <Nav.Link className={styles.menuItems} href="/login">
              Eventos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
