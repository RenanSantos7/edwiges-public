import { ReactNode } from 'react'
import styles from './Tabela.module.css'

interface TabelaProps {
    titulos: string[]
    children: ReactNode
}

export default function Tabela({titulos, children}:TabelaProps) {
    return (
        <div className={styles.tabelaContainer}>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        {titulos.map((titulo, i) => <th key={i}>{titulo}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}
