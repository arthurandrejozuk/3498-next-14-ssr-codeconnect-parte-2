"use client";

import { useEffect } from "react";
import styles from "./error.module.css";
import { ArrowBack } from "@/components/ArrowBack";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container__error}>
      <img src="https://github.com/alura-cursos/3498-next-14-ssr-codeconnect-parte-2/blob/aula-2/src/app/error/500.png?raw=true" />
      <h1 className={styles.titulo}>OPS! Página não encontrada.</h1>
      <p className={styles.info}>
        Você pode voltar para ao feed e continuar procurando projetos incríveis!
      </p>
      <a href="/" className={styles.volta}>
        Voltar ao feed <ArrowBack color="#81FE88" />
      </a>
    </div>
  );
}
