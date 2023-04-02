import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { SocialIcon } from "react-social-icons";

export function Footer() {
  return (
    <footer id="footer">
      <div id="copyrights" className={styles.footer}>
        <Container>
          <Row>
            <Col xs={5} md={5} lg={3} className={styles.primeira}>
              <Col>
                <img
                  src="/img/potilogoSFbranca.png"
                  alt={"POTI"}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "65px",
                    maxWidth: "65px",
                  }}
                />
              </Col>
              <Col>
                <span>Francisco Fernandes freire, 90</span>
              </Col>
              <Col>
                <span>CEP: 59194-000</span>
              </Col>

              <Col>
                <span>(84) 99874-5527</span>
              </Col>
              <Col>
                <span>comunicacao@potiguaresrace.com.br</span>
              </Col>
            </Col>
            <Col xs={2} md={2} lg={1}>
              <div className={styles.vl} />
            </Col>
            <Col xs={5} md={5} lg={3} className={styles.segunda}>
              <Col>
                <h4>Navegue Pelo Site</h4>
              </Col>
              <Col>
                <span>O Centro</span>
              </Col>
              <Col>
                <span>Eventos</span>
              </Col>
            </Col>
            <Col xs={0} md={0} lg={1}>
              <div className={styles.vl} />
            </Col>
            <Col xs={0} md={0} lg={3} className={styles.terceiraCol}>
              <div className={styles.container}>
                <div className={styles.box} />
                <div className={styles.box_overlay}>
                  <div>
                    <h4>Siga-nos</h4>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ paddingRight: "1rem" }}>
                      <SocialIcon url="facebook.com/potiguaresrunners/" />
                    </div>
                    <div style={{ paddingRight: "1rem" }}>
                      <SocialIcon url="instagram.com/centro_potiguares/" />
                    </div>
                    <div>
                      <SocialIcon
                        url="wa.me/5584998745527?text=Ol%C3%A1%21+Gostaria+de+Fazer+uma+Doa%C3%A7%C3%A3o+Para+o+Centro+Potiguares."
                        network="whatsapp"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Row xs={12} md={12} lg={0}>
              <Col xs={12} className={styles.terceiraCol}>
                <div className={styles.linhaF} />
              </Col>
            </Row>

            <div className={styles.terceira}>
              <Row xs={12} md={12} lg={0}>
                <Col xs={4}>
                  <div className={styles.linhaG} />
                </Col>
                <Col xs={4}>
                  <div className={styles.container}>
                    <div className={styles.box} />
                    <div>
                      <h4>Siga-nos</h4>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ paddingRight: "1rem" }}>
                        <SocialIcon url="facebook.com/potiguaresrunners/" />
                      </div>
                      <div style={{ paddingRight: "1rem" }}>
                        <SocialIcon url="instagram.com/centro_potiguares/" />
                      </div>
                      <div>
                        <SocialIcon
                          url="wa.me/5584998745527?text=Ol%C3%A1%21+Gostaria+de+Fazer+uma+Doa%C3%A7%C3%A3o+Para+o+Centro+Potiguares."
                          network="whatsapp"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className={styles.linhaG} />
                </Col>
              </Row>
            </div>
          </Row>
          <div className={styles.copy1}>
            Copyrights &copy; 2023
            <br />
          </div>
          <div className={styles.copy2}>
            Todos Os Direitos Reservados | Centro Potiguares.
          </div>
        </Container>
      </div>
    </footer>
  );
}
