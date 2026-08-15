'use client'
import { useDashboard } from "./useDashboard";
import Image from "next/image";
import styles from './dashboard.module.scss'
import { Button, Limit } from "@/components";
import { Play } from "lucide-react";
import { HistoryCard } from "@/components/feature/HistoryCard/HistoryCard";
import EmptyTest from '../../../../public/empty-test-icon.svg';
import { useEffect } from "react";

const Dashboard = () => {

  const { id_users, full_name, history, navigationToTest, getAssessmentsHistoryById } = useDashboard()
  useEffect(() => {
    getAssessmentsHistoryById()
  }, [id_users])
  return (
    <section className={styles.dashboard} >
      <Limit>
        <div className={styles.header_container}>
          <div className={styles.welcome}>
            <h3>Olá, <span className={styles.username}>{full_name || 'Fanny'}</span>! Vamos nessa?</h3>
            <p>Acompanhe seus testes realizados, veja detalhes e continue evoluindo.</p>
            <Button text="Iniciar novo teste" icon={<Play />} onClick={() => navigationToTest()} />
          </div>
          {/* <Image src={''} alt={''} /> */}
        </div>

        <div className={styles.table_container}>
          {
            history.length ?
              <>
                <h4>
                  Seus testes realizados
                </h4>
                {
                  history?.map(item => (
                    <HistoryCard
                      key={item.assessment_id}
                      index={item.assessment_id}
                      titleTest={item.title}
                      date={item.date}
                      stacks={item.stacks}
                      score={item.score_global}
                    />

                  ))
                }
              </>
              :
              <section className={styles.empty}>
                <Image src={EmptyTest} alt="teste vazio" />
                <h4>Você ainda não realizou nenhum teste</h4>
                <p>Escolha uma tecnologia, inicie seu primeiro teste e descubra seu nível de proficiência técnica de forma rápida e prática!</p>
                <Button text="Iniciar meu primeiro teste" onClick={() => navigationToTest()} />
              </section>
          }
        </div>
      </Limit>
    </section>
  );
}

export default Dashboard;