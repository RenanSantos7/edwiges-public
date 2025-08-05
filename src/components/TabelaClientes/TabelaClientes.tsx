import styles from './TabelaClientes.module.css'
import Tabela from '../Elementos/Tabela/Tabela.tsx'
import { Link } from 'react-router-dom'
import { ICliente } from '../../types/types.ts'

interface TabelaClientesProps {
	clientes: ICliente[]
}

export default function TabelaClientes({ clientes }: TabelaClientesProps) {
	return (
		<Tabela titulos={['Nome', 'CPF', 'Telefone', 'Endereço', 'Email', 'Cidade', 'Financeiro']}>
			{clientes.map(cliente => {
				return (
					<tr key={cliente.id}>
						<td>
							<Link to={`/clientes/${cliente.id}`}>{cliente.nome}</Link>
						</td>
						<td>{cliente.cpf || ''}</td>
						<td>{cliente.telefone || ''}</td>
						<td>{cliente.endereco || ''}</td>
						<td>{cliente.email || ''}</td>
						<td>{cliente.cidade || ''}</td>
						<td>{cliente.financeiro || ''}</td>
					</tr>
				)
			})}
		</Tabela>
	)
}
