import styles from './Carregamento.module.css'

interface CarregamentoProps {
    ativo: boolean
}

export default function Carregamento({ ativo }:CarregamentoProps) {
    if (ativo) {
        return (
            <div className={styles.container}>
                <div
                    className={styles.sombra}
                />

                <div className={styles.caixaCarregando}>
                    <div className={styles.load}>
                        <div className={styles.linha}></div>
                        <div className={styles.linha}></div>
                        <div className={styles.linha}></div>
                    </div>

                    <div className={styles.carregando}>Espere um <br/>pouquinho</div>
                </div>

            </div>
        )
    }
}
