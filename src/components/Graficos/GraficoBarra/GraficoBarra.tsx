import styles from './GraficoBarra.module.css';

interface GraficoBarraProps {
    titulo: string
    tamanho: number
}

export default function GraficoBarra({ titulo, tamanho }:GraficoBarraProps) {
    const dados = [
        { nome: 'Renan', peso: 90 },
        { nome: 'Elaine', peso: 80 },
        { nome: 'Selena', peso: 20 }
    ];

    const total = dados.reduce((pesoDeTodos, obj) => pesoDeTodos + obj.peso, 0);

    return (
        <section className={styles.graficoBarra} style={{ width: `${tamanho}px` }}>
            <h2 className={styles.barra__titulo}>{titulo}</h2>
            <div className={styles.barra__itens}>
                {dados.map(dado => (
                    <div className={styles.barra__item} key={dado.nome}>
                        <div className={styles.barra__label}>{dado.nome}</div>
                        <div className={styles.barra__total}>
                            <div className={styles.barra__parcial} style={{ width: `${(dado.peso / total) * 100}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
