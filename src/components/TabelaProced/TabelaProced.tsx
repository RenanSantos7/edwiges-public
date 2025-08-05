import styles from './TabelaProced.module.css'
import corrigeData from '../../utils/corrigeData.ts'
import Tabela from '../Elementos/Tabela/Tabela.tsx'
import { Link } from "react-router-dom"
import { IProcedimento } from '../../types/types.ts'

interface TabelaProcedProps {
    procedimentos: IProcedimento[]
}

export default function TabelaProced({procedimentos}:TabelaProcedProps) {

    return (
        <section>
            <div className={styles.procedimentos__cabecalho}>
                <h2>Procedimentos</h2>
                <Link to='/procedimentos'>Ver todos</Link>
            </div>

            <Tabela titulos={['Procedimento', 'Número CNJ','Cliente','Juízo','Polo','Última Movimentação','DUM']}>
                {procedimentos.map((procedimento, i) => {
                    return (
                        <tr key={i}>
                            <td>{procedimento.procedimento || ''}</td>
                            <td>{procedimento.numCNJ || ''}</td>
                            <td>{procedimento.cliente || ''}</td>
                            <td>{procedimento.juizo || ''}</td>
                            <td className={styles.centralizado}>{procedimento.polo || ''}</td>
                            <td>{procedimento.ultMov || ''}</td>
                            <td>{procedimento.DUM ? corrigeData(procedimento.DUM) : ''}</td>
                        </tr>
                    )
                })}
            </Tabela>
        </section>
    )
}
