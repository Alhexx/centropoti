import { Container } from "react-bootstrap";
import styles from "./style.module.scss";

export function Footer() {
  return (
    <footer id="footer">
      <div id="copyrights" className={styles.footer}>
        <Container>
          <div className={styles.copyright}>
            Copyrights &copy; 2023 Todos Os Direitos Reservados | Centro
            Potiguares.
            <br />
          </div>
          <div className={styles.info}>Fale Conosco</div>
        </Container>
      </div>
    </footer>
  );
}
