
import styles from "./ProcuraPost.module.css";

export default function ProcuraPost(){
    return(
        <form action="/" className={styles.container__procura}>
            <input name="q" className={styles.procura} type="text" placeholder="Digite o que você procura" />
            <button className={styles.botao}>Buscar</button>
        </form>
    )
}