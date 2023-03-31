import Image from "next/image";
import { Container, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

import styles from "./style.module.scss";

export function Menu() {
  return (
    <Navbar expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand>
            <Image
              src="/img/potilogo3.jpeg"
              alt={"POTI"}
              height={85}
              width={85}
            ></Image>
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
