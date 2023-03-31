import Image from "next/image";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import style from "./style.module.scss";

export function Sobre() {
  return (
    <Container>
      <div className={style.Sobre}>
        <Row className={style.row_centro}>
          <Col xs={12} lg={4} className={style.texto}>
            <h2>Um pouco sobre nós</h2>
            <p>
              Há 07 anos atras iniciamos como uma assessoria esportiva. Já
              começamos pensando em cobrar um valor justo, que cobrisse nossas
              despesas. Mas, mesmo assim, não demorou muito para participantes
              apresentarem problemas financeiros, pelos mais diversos motivos, e
              sentíamos que não podíamos deixar essas pessoas para trás, afinal
              precisam da nossa ajuda para se reerguer psicologicamente. Logo,
              na pandemia nos deparamos com uma quantidade muito grande de
              pessoas que viam na gente uma luz, através do esporte, e fomos
              acolhendo. Até que em agosto de 2022, decidimos que não
              justificava continuarmos com a empresa aberta, pagando impostos,
              se praticamente tudo que fazíamos era sem retorno financeiro.
              Então, demos baixa no CNPJ e seguimos com ações, buscando doações
              se parceiros, mesmo sem a empresa.
            </p>
            <p>
              ... até que criamos coragem e hoje somos uma instituição social
              formalizada. E acreditamos que conseguiremos fazer ainda mais pelo
              próximo
            </p>
          </Col>
          <Col xs={12} lg={4} className={style.carrossel}>
            <Carousel>
              <Carousel.Item>
                <Image
                  src="/img/carrossel3.jpeg"
                  width={470}
                  height={540}
                  alt={"Sorrindo"}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/img/carrossel1.jpeg"
                  width={470}
                  height={540}
                  alt={"flyer"}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/img/carrossel2.jpeg"
                  width={470}
                  height={540}
                  alt={"correndo"}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
