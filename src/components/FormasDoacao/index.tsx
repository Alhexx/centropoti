import { Col, Container, Row, Card, Modal, Button } from "react-bootstrap";
import { SiPix } from "react-icons/si";
import { FaPaypal, FaPiggyBank } from "react-icons/fa";

import style from "./style.module.scss";
import { useState } from "react";

export function FormasDoacao() {
  const [show, setShow] = useState(false);
  const [showT, setShowT] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseT = () => setShowT(false);
  const handleShowT = () => setShowT(true);

  return (
    <div>
      <div className={style.margins}>
        <Container>
          <div>
            <Row>
              <Col xs={12} md={4} lg={4}>
                <Card onClick={handleShow}>
                  <Card.Body>
                    <div style={{ display: "flex" }}>
                      <SiPix
                        style={{
                          fontSize: "3rem",
                          marginRight: "1rem",
                        }}
                      />
                      <div>
                        <h3>Pix</h3>
                        <span>Clique para ver os dados!</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <Card onClick={handleShowT}>
                  <Card.Body>
                    <div style={{ display: "flex" }}>
                      <div>
                        <FaPiggyBank
                          style={{
                            fontSize: "3rem",
                            marginRight: "1rem",
                          }}
                        />
                      </div>
                      <div>
                        <h3>Transfêrencia</h3>
                        <span>Clique para ver os dados!</span>
                        {/* <span>Banco: 290 - PagSeguro</span>
                        <br />
                        <span>Agência: 0001</span>
                        <br />
                        <span>Conta corrente: 46788930-9</span>
                        <br />
                        <span>CNPJ: 50.065.813/0001-38</span> */}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} lg={4}>
                <Card>
                  <Card.Body>
                    <div style={{ display: "flex" }}>
                      <FaPaypal
                        style={{
                          fontSize: "3rem",
                          marginRight: "1rem",
                        }}
                      />
                      <div>
                        <h3>PayPal</h3>
                        <span>Clique para ser direcionado ao PayPal!</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Pix</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className={style.pagamento}>
            <h4> CHAVE PIX: (CNPJ) 50.065.813/0001-38</h4>
            <img
              src={"/img/qrCodePix.png"}
              width={170}
              height={170}
              alt={"qrcode"}
            />

            <h6>
              Sinta-se livre para falar conosco!
              <br />
              Todas as informações estão no rodapé do site.
            </h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showT} onHide={handleCloseT}>
        <Modal.Header>
          <Modal.Title>Transfêrencia</Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.pagamento}>
          <div className={style.pagamento}>
            <p>
              Banco: 290 - PagSeguro
              <br /> Agência: 0001 <br /> Conta corrente: 46788930-9 <br />{" "}
              CNPJ: 50.065.813/0001-38
            </p>
            <h6>
              Sinta-se livre para falar conosco!
              <br />
              Todas as informações estão no rodapé do site.
            </h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseT}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
