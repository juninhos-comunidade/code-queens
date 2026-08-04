'use client'
import { CameraIcon } from "lucide-react";
import styles from "./page.module.css";
import { Input, Checkbox, SignCard, Button } from "@/components";

export default function Home() {
  return (
    <main className={styles.page}>
      <h3>Stack Check!</h3>
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
      </SignCard>
    </main>
  );
}
