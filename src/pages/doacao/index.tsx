import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import style from "../../styles/doacao.module.scss";
import { FormasDoacao } from "@/components/FormasDoacao";

export default function doacao() {
  return (
    <div>
      <Head>
        <title>Centro Potiguares - Doacao</title>
        <meta name="description" content="Centro Potiguares" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <div>
        <Col>
          <div className={style.doacao}>
            <img
              className={style.image}
              src="/img/doacao.jpeg"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "370px",
                maxHeight: "250px",
              }}
            />
            <h1 className={style.texto}>Doação</h1>
          </div>
        </Col>
      </div>

      <main>
        <FormasDoacao />
      </main>
    </div>
  );
}
