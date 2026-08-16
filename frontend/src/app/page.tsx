'use client'
import styles from "./page.module.scss";
import { Button, Footer, Limit, Navbar } from "@/components";

export default function Home() {



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
                <Button text="Cadastrar agora" />
                <Button text="Login" variant="outline" />
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
                <li>Frente de atuação. (exemplo: Front-end,Back-end),</li>
                <li>Senioridade desejada,</li>
                <li>E as tecnologias que quer avaliar</li>
              </ul>
            </div>
          </Limit>
        </section>
        {/* Proximo sim */}
        <section className={styles.features_section}>
          <Limit>
            <div>
              <h2>Iremos <span className='emphasys'>destravar</span> o seu próximo <span className='emphasys'>“sim”</span> </h2>
              <p>Escolha sua área, monte seu teste e descubra exatamente o que falta para chegar mais confiante na próxima entrevista.</p>
            </div>
          </Limit>
        </section>
      </main>
      <Footer />
    </div>
  );
}
