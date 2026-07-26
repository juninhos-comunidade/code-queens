import Image from "next/image";
import styles from "./page.module.css";
import { Select } from "@/components";

export default function Home() {
  const stateOptions = [
    { value: "sp", label: "São Paulo" },
    { value: "rj", label: "Rio de Janeiro" },
    { value: "bh", label: "Belo Horizonte" }
  ];
  return (
    <main className={styles.page}>
     <h1>Stack Check!</h1>
     <Select label="Estado:" isInvalid errorMessage="Estado inválido" labelFor="estado" options={stateOptions} />
     <Select label="Cidade:" labelFor="cidade" options={stateOptions} />
    </main>
  );
}
