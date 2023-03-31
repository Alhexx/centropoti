import Head from "next/head";
import style from "../styles/home.module.scss";
import { Resumo } from "@/components/Resumo";
import { Sobre } from "@/components/Sobre";
import { Col } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Centro Potiguares - pagina inicial</title>
        <meta name="description" content="Centro Potiguares" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <div>
        <Col>
          <div className={style.teste}>
            <img
              src="/img/treino.jpeg"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "750px",
              }}
            />
          </div>
        </Col>
      </div>

      <main>
        <Resumo />
        <div className={style.sobre}>
          <Sobre />
        </div>
      </main>
    </div>
  );
}
