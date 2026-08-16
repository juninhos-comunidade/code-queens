'use client'
import { CircleCheck } from "lucide-react";
import styles from "./page.module.scss";
import { Button, Footer, Limit, Navbar } from "@/components";
import { useRouter } from "next/navigation";


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
              <p>Resolva testes com problemas reais do dia a dia de um desenvolvedor e saia na frente em sua próxima entrevista.</p>
              <div className={styles.button_container}>
                <Button text="Cadastrar agora" onClick={() => router.push('/sign-up')}/>
                <Button text="Login" variant="outline"  onClick={() => router.push('/sign-in')} />
              </div>
            </div>

            <div className={styles.header_image}>

            </div>
          </div>

        </Limit>
      </header>
      <main className={styles.page_main}>
        {/* O que fazemos */}
        <section className={styles.proposal_section}>
          <Limit>
            <div className={styles.proposal_image}></div>
            <div className={styles.proposal_info}>
              <h2>O que fazemos?</h2>
              <p>O StackCheck cria testes técnicos personalizados para desenvolvedores que buscam sair na frente
                em suas entrevistas.Geramos automaticamente um teste baseado no seu objetivo e você pode definir:
              </p>
              <ul>
                <li><CircleCheck /> Frente de atuação</li>
                <li><CircleCheck /> Senioridade desejada</li>
                <li><CircleCheck /> E as tecnologias que quer avaliar</li>
              </ul>
            </div>
          </Limit>
        </section>
        {/* Proximo sim */}
        <section className={styles.features_section}>
          <Limit>
            <div className={styles.feature_title}>
              <h2>Iremos <span className='emphasys'>destravar</span> o seu próximo <span className='emphasys'>“sim”</span> </h2>
              <p>Escolha sua área, monte seu teste e descubra exatamente o que falta para chegar mais confiante na próxima entrevista.</p>
            </div>

            {/* Cards */}
            <>
              <div className={styles.feature_card_container}>

                <div className={styles.feature_card}>
                  <h3>Teste suas  <span className='emphasys'>habilidades</span></h3>
                  <p>Responda a testes personalizados focado em entrevistas reais e descubra seu nível em cada stack.</p>
                  <ul>
                    <li>
                      <CircleCheck /> Até 25 perguntas por teste </li>
                    <li><CircleCheck />Baseado nas stacks escolhidas </li>
                    <li><CircleCheck /> Adaptados à senioridade selecionada </li>
                  </ul>
                </div>
                <div className={styles.feature_card}>
                  <h3>Receba   <span className="emphasys">feedbacks</span></h3>
                  <p>Após concluir, receba uma análise detalhada do seu desempenho e descubra exatamente onde focar.</p>
                  <ul>
                    <li>
                      <CircleCheck /> Nota geral imediata </li>
                    <li><CircleCheck />Análise por tecnologia </li>
                    <li><CircleCheck /> Dicas de estudo</li>
                  </ul>
                </div>
                <div className={styles.feature_card}>
                  <h3>Acompanhe <span className="emphasys">evolução</span></h3>
                  <p>Veja seus resultados anteriores e acompanhe seu crescimento profissional ao longo do tempo.</p>
                  <ul>
                    <li>
                      <CircleCheck /> Histórico completo </li>
                    <li><CircleCheck />Gráfico de progresso </li>
                    <li><CircleCheck /> Gráfico de progresso</li>
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
