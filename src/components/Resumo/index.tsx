import { Col, Container, Row } from "react-bootstrap";
import style from "./style.module.scss";

export function Resumo() {
  return (
    <div>
      <div className={style.teste2}>
        <Container>
          <div className={style.aboutForum}>
            <Row>
              <Col>
                <h3>Um Mundo Melhor? Queremos!</h3>
                <div className={style.line}></div>
                <p>
                  Acreditamos que a melhor forma de melhorar o mundo é apoiar as
                  pessoas a serem protagonistas das suas vidas, e aliando o
                  esporte à educação na transformação do amanhã.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className={style.ajudas}>
        <Container>
          <div>
            <Row className={style.teste}>
              <Col
                xs={12}
                lg={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <img />
                </div>
                <div>
                  <h4>+ de 80</h4>
                  <span>Crianças e jovens</span>
                </div>
              </Col>
              <Col
                xs={12}
                lg={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <img />
                </div>
                <div>
                  <h4>+ de 30</h4>
                  <span>Adultos</span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <div className={style.treinos}>
          <Row>
            <Col>
              <h4>Ajudados Atraves de treinos e atividades como:</h4>
              <p>
                Desenvolvimento motor Funcional, Surf, Alteltismo, Corrida de
                orientação, Vôlei de praia, Lógica, Sócio emocional e Leitura
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
