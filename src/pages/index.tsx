import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/home.module.scss";
import { Resumo } from "@/components/Resumo";
import { Sobre } from "@/components/Sobre";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Centro Potiguares - pagina inicial</title>
        <meta name="description" content="Centro Potiguares" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <div>
        <div>
          <Image
            src="/img/treino.jpeg"
            alt={"treino"}
            height={700}
            width={1864}
          />
        </div>
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
