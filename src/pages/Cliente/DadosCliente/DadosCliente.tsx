import { ICliente } from '../../../types/types.ts'
import styles from './DadosCliente.module.css'

interface DadosClienteProps {
    cliente: ICliente
}

export default function DadosCliente({ cliente }:DadosClienteProps) {
    
    function adaptaNumWhatsapp(telefone:string) {
        telefone = telefone.replaceAll('(', '')
        telefone = telefone.replaceAll(')', '')
        telefone = telefone.replaceAll(' ', '')
        telefone = telefone.replaceAll('-', '')
        return telefone
    }

    return (
        <div className={styles.tabelaContainer}>
            <table>
                <tbody>
                    <tr className={styles.tabela__linha}>
                        <th className={styles.tabela__head}>Telefone:</th>
                        <td className={styles.tabela__dados}>
                            {cliente.telefone && <a href={`https://api.whatsapp.com/send/?phone=${adaptaNumWhatsapp(cliente.telefone)}`}>{cliente.telefone}</a>}
                        </td>
                    </tr>
                    <tr className={styles.tabela__linha}>
                        <th className={styles.tabela__head}>CPF:</th>
                        <td className={styles.tabela__dados}>{cliente.cpf}</td>
                    </tr>
                    <tr className={styles.tabela__linha}>
                        <th className={styles.tabela__head}>Endereço:</th>
                        <td className={styles.tabela__dados}>
                            <p>{cliente.endereco}</p>
                            <p>{cliente.cidade}</p>
                        </td>
                    </tr>
                    <tr className={styles.tabela__linha}>
                        <th className={styles.tabela__head}>Email:</th>
                        <td><a href={`mailto:${cliente.email}`}>{cliente.email}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
