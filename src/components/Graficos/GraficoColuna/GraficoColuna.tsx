import { useEffect } from 'react';
import styles from './GraficoColuna.module.css';

interface GraficoColunaProps {
    titulo: string
    tamanho: number
    dados: IDado[]
}

interface IDado {
    id: number
    nome: string
    [key:string]: any
}

export default function GraficoColuna({ titulo, tamanho, dados }:GraficoColunaProps) {

    const total = dados.reduce((acc, obj) => {
        const chaves = Object.keys(obj)
        return acc + obj[chaves[1]]
    }, 0);

    return (
        <section className={styles.graficoColuna}>
            <h2 className={styles.coluna__titulo}>{titulo}</h2>
            <div className={styles.coluna__itens}>
                {dados.map((dado) => {
                    const chaves = Object.keys(dado)

                    return (
                        <div className={styles.coluna__item} key={dado.id}>
                            <div className={styles.coluna__label}>{dado.nome}</div>
                            <div className={styles.coluna__total} style={{ height: tamanho }}>
                                <div
                                    className={styles.coluna__parcial}
                                    style={{ height: `${(dado[chaves[2]] / total) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
