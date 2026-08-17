'use client'
import { CircleCheck } from "lucide-react";
import styles from "./page.module.scss";
import { Button, Footer, Limit, Navbar } from "@/components";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ImageHeader from '../../public/header_image.png';
import ImageBanner from '../../public/study_section.png'


export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.page}>
      <Navbar />
      <header className={styles.header}>
        <Limit>
          <div className={styles.header_container}>
            <div className={styles.header_info}>
              <h1>
                Coloque suas <span className='emphasys'>stacks</span> em <span className='emphasys'>check</span> e avance de verdade
              </h1>
              <p>Descubra se você está preparado para as vagas que deseja conquistar. Teste suas habilidades,
                identifique seus pontos de melhoria e evolua com confiança para sua próxima entrevista.</p>
              <div className={styles.button_container}>
                <Button text="Começar agora" onClick={() => router.push('/sign-up')} />
                <Button text="Já tenho uma conta" variant="outline" onClick={() => router.push('/sign-in')} />
              </div>
            </div>

            <div className={styles.header_image}>
              <Image src={ImageHeader} alt='Garota estudando' />
            </div>
          </div>

        </Limit>
      </header>
      <main className={styles.page_main}>
        {/* O que fazemos */}
        <section className={styles.proposal_section}>
          <Limit>
            <div className={styles.proposal_image}>
              <Image src={ImageBanner} alt='Garoto estudando' />
            </div>
            <div className={styles.proposal_info}>
              <h2>O que fazemos?</h2>
              <p>O StackCheck cria avaliações técnicas personalizadas para ajudar desenvolvedores a entender seu nível atual,
                identificar oportunidades de evolução e chegar mais preparado aos desafios do mercado.

              </p>
              <ul>
                <li><CircleCheck /> Área de atuação</li>
                <li><CircleCheck />  Nível desejado</li>
                <li><CircleCheck /> Tecnologias que deseja praticar</li>
              </ul>
            </div>
          </Limit>
        </section>
        {/* Proximo sim */}
        <section className={styles.features_section}>
          <Limit>
            <div className={styles.feature_title}>
              <h2> O próximo <span className='emphasys'>sim</span>{' '}da sua carreira pode estar a poucos testes de distância</h2>
              <p> Monte um teste alinhado aos seus objetivos e descubra os conhecimentos que podem acelerar sua evolução profissional.</p>
            </div>

            {/* Cards */}
            <>
              <div className={styles.feature_card_container}>

                <div className={styles.feature_card}>
                  <h3>Teste suas  <span className='emphasys'>habilidades</span></h3>
                  <p>Resolva desafios inspirados em situações reais do mercado e descubra exatamente quais conhecimentos já são seus pontos fortes e quais ainda podem evoluir.
                  </p>
                  <ul>
                    <li>
                      <CircleCheck /> Até 25 perguntas por teste </li>
                    <li><CircleCheck />Stacks que você escolhe </li>
                    <li><CircleCheck /> Adaptados à senioridade selecionada </li>
                  </ul>
                </div>
                <div className={styles.feature_card}>
                  <h3>Receba<span className="emphasys">{' '}feedbacks</span></h3>
                  <p>Receba uma análise clara do seu desempenho e descubra quais temas merecem mais atenção para acelerar sua evolução.</p>
                  <ul>
                    <li>
                      <CircleCheck /> Resultado imediato </li>
                    <li><CircleCheck /> Feedback por tecnologia </li>
                    <li><CircleCheck />  Recomendações personalizadas</li>
                  </ul>
                </div>
                <div className={styles.feature_card}>
                  <h3>Acompanhe a {' '}<span className="emphasys">evolução</span></h3>
                  <p>Visualize seu progresso, compare desempenhos anteriores e acompanhe sua jornada rumo às próximas oportunidades da sua carreira.</p>

                  <ul>
                    <li>
                      <CircleCheck /> Histórico completo </li>
                    <li><CircleCheck />Evolução por tecnologia </li>
                    <li><CircleCheck />Progresso ao longo do tempo</li>
                  </ul>
                </div>
              </div>
            </>
          </Limit>
        </section>
      </main>
      <Footer />
    </div>
  );
}
