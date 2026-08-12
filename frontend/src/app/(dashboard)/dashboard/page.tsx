'use client'
import { useDashboard } from "./useDashboard";
import Image from "next/image";
import styles from './dashboard.module.scss'
import { Button, Limit, StackTag, Tag } from "@/components";
import { CloudLightning, Play, TurkishLiraIcon } from "lucide-react";
const Dashboard = () => {

  const { user, full_name, nickname } = useDashboard()
  const stacks = ['css', 'html', 'vitest', 'javascript', 'vue', 'node']
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

          <div className={styles.table_item}>
            <div className={styles.table_item_icon}>
              <CloudLightning />
            </div>
            <div className={styles.table_item_title}>
              <p>Teste Java Sênior</p>
              <p>10/08/2026</p>
            </div>

            <div className={styles.table_item_tags}>
              {/* <Tag text="Junior" />
              <Tag text="Front-end" />
              <Tag text="Javascript" />
              <Tag text="SCSS" />
              <Tag text="Python" /> */}

                <StackTag options={stacks}/>

            </div>

            <div className={styles.table_item_progress}>
              <h6>79%</h6>
            </div>
          </div>
        </div>
      </Limit>
    </section>
  );
}

export default Dashboard;