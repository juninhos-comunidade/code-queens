'use client'
import styles from "./page.module.css";
import { Footer, Navbar } from "@/components";

export default function Home() {
      const links = [
        { title: 'sobre', links: [{ title: 'Termos de uso', url: '/termos' }, { title: 'Direitos autorais', url: '/direitos' },{ title: 'Termos de Responsabilidade', url: '/termos' }, { title: 'Direitos pessoais', url: '/direitos' }] },
        { title: 'suporte', links: [{ title: 'Central de ajuda', url: '/central-ajuda' }] },
        { title: 'Mapa do site', links: [{ title: 'Inicio', url: '/' }, { title: 'Login', url: '/sign-in' }, { title: 'Cadastro', url: '/sign-up' }] }
    ]
  return (
    <>
    <Navbar/>
    <main className={styles.page}>
    

    {/* <h3>Stack Check!</h3>
      <SignCard>
        <Input label="E-mail" labelFor="email" placeholder="Digite seu email" type="email" />
        <Input label="Senha" labelFor="password" placeholder="Digite sua senha" type="password" />
        <div className={styles.passwordHelper}>
          <Checkbox label="Lembrar de mim" value="lembrar_de_mim" />  <a href="/">Esqueci minha senha</a>
        </div>
        <Button text="Entrar" />

        <div className={styles.divisor}>
          <hr /><p>ou</p> <hr />
        </div>
        <span className={styles.optinalContainer}>
          Ainda não tem uma conta?
          <a href="">Crie sua conta</a>
        </span>
      </SignCard> */}
      
    </main>
      <Footer linksFooter={links}/>
    </>
  );
}
