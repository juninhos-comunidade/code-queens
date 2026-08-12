'use client'
import { useDashboard } from "./useDashboard";
import Image from "next/image";
import styles from './dashboard.module.scss'
import { Button, Limit, StackTag, Tag } from "@/components";
import { CloudLightning, Play, TurkishLiraIcon } from "lucide-react";
import { HistoryCard } from "@/components/feature/HistoryCard/HistoryCard";
import { it } from "node:test";
const Dashboard = () => {

  const { user, full_name, nickname } = useDashboard()
  const stacks = ['css', 'html', 'vitest', 'javascript', 'vue', 'node']

  const history = [
    {
      index: 1,
      titleTest: 'Teste HTML e CSS',
      date: '12/07/2026',
      stacks: ['html', 'css'],
      progress: 98,
    },
    {
      index: 2,
      titleTest: 'Teste para nubank',
      date: '12/07/2026',
      stacks: ['html', 'css', 'javascript', '.net'],
      progress: 73,
    },
    {
      index: 3,
      titleTest: 'Backend Itau',
      date: '31/07/2026',
      stacks: ['python', 'sql'],
      progress: 65,
    },

  ]

  return (
    <section className={styles.dashboard} >
      <Limit>
        <div className={styles.header_container}>
          <div className={styles.welcome}>
            <h2>Olá, <span className={styles.username}>{full_name || 'Fanny'}</span>! Vamos nessa?</h2>
            <p>Acompanhe seus testes realizados, veja detalhes e continue evoluindo.</p>
            <Button text="Iniciar novo teste" icon={<Play />} />
          </div>
          <Image src={''} alt={''} />
        </div>

        <div className={styles.table_container}>
          <h4>
            Seus testes realizados
          </h4>
          {
            history.map((item) => (

              <HistoryCard
                index={item.index}
                titleTest={item.titleTest}
                date={item.date}
                stacks={item.stacks}
                progress={item.progress}
              />
            ))
          }
        </div>
      </Limit>
    </section>
  );
}

export default Dashboard;