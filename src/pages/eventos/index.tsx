import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import style from "../../styles/eventos.module.scss";

export default function eventos() {
  return (
    <div>
      <Head>
        <title>Centro Potiguares - Eventos</title>
        <meta name="description" content="Centro Potiguares" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Container>
        <div>
          <h1 className={style.emBreve}>Em breve</h1>
        </div>
      </Container>
    </div>
  );
}
