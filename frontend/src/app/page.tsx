'use client'
import { Toast } from "@/components/ui/Toast/Toast";
import styles from "./page.module.css";
import { Footer, Navbar } from "@/components";

export default function Home() {
  const links = [
    { title: 'sobre', links: [{ title: 'Termos de uso', url: '/termos' }, { title: 'Direitos autorais', url: '/direitos' }, { title: 'Termos de Responsabilidade', url: '/termos' }, { title: 'Direitos pessoais', url: '/direitos' }] },
    { title: 'suporte', links: [{ title: 'Central de ajuda', url: '/central-ajuda' }] },
    { title: 'Mapa do site', links: [{ title: 'Inicio', url: '/' }, { title: 'Login', url: '/sign-in' }, { title: 'Cadastro', url: '/sign-up' }] }
  ]
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.page_main}>
        <Toast variable='primary'  title="Ainda não consegue lembrar?" subtitle="Caso não lembre sua palavra de segurança ou confira outras dificuldades, entre em contato com nosso suporte." />
        <Toast variable='success' title="Dados atualizados" subtitle="Seus dados pessoais foram atualizados com sucesso" />
        <Toast variable='warning' title="Instabilidade no sistema" subtitle="Estamos enfrentando problemas de instabilidade que já estão em rota de resolução.Agradecemos a paciencia" />
        <Toast variable='error' title="Erro 401" subtitle="Ocorreu um erro ao processar suas informações " />
        <Toast variable='info' title="Atualização programada" subtitle="Teremos uma atualização para melhorar sua experiencia no dia 28/10/2026" />

        <h5>Somente descricao</h5>
        <Toast variable='primary' isOnlyDescribe  title="Ainda não consegue lembrar?" subtitle="Caso não lembre sua palavra de segurança ou confira outras dificuldades, entre em contato com nosso suporte." />
        <Toast variable='success' isOnlyDescribe title="Dados atualizados" subtitle="Seus dados pessoais foram atualizados com sucesso" />
        <Toast variable='warning' isOnlyDescribe title="Instabilidade no sistema" subtitle="Estamos enfrentando problemas de instabilidade que já estão em rota de resolução.Agradecemos a paciencia" />
        <Toast variable='error' isOnlyDescribe title="Erro 401" subtitle="Ocorreu um erro ao processar suas informações " />
        <Toast variable='info' isOnlyDescribe title="Atualização programada" subtitle="Teremos uma atualização para melhorar sua experiencia no dia 28/10/2026" />


      </main>
      {/* <Footer linksFooter={links} /> */}
    </div>
  );
}
