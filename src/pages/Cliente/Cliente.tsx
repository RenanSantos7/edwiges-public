import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import DadosCliente from './DadosCliente/DadosCliente.tsx';
import Tabela from '../../components/Elementos/Tabela/Tabela.tsx';
import { ICliente, IProcedimento } from '../../types/types.ts';
import { Titulo2 } from '../../components/Titulos/index.ts';
import { useDataContext } from '../../context/DadosContext.tsx';
import styles from './ClienteUm.module.css';

interface IContexto {
	clientes: ICliente[];
	procedimentos: IProcedimento[];
}

export default function ClienteUm() {
	const { clienteId } = useParams();

	const { clientes, procedimentos }: IContexto = useDataContext();

	const [procedimentosCliente, setProcedimentosCliente] = useState([]);
	const [cliente, setCliente] = useState<ICliente>(() => clientes.find(
		cliente => cliente.id === clienteId,
	));

	useEffect(() => {
		setProcedimentosCliente(
			procedimentos.filter(
				procedimento => procedimento.cliente === cliente.nome,
			),
		);
	}, [cliente]);

	 return (
		<>
			<div className={styles.cliente__cabecalho}>
				<Titulo2>{cliente.nome}</Titulo2>
				<a className='flex-content'>
					<FontAwesomeIcon icon={faPenToSquare} />
					<span>Alterar Cadastro</span>
				</a>
			</div>
			<section className={styles.cliente__infos}>
				<DadosCliente cliente={cliente} />
			</section>

			<section className={styles.cliente__procedimentos}>
				<div className={styles.cliente__procedimento__cabecalho}>
					<h3 className={styles.cliente__procedimentos__titulo}>
						Procedimentos
					</h3>
					<a>
						<FontAwesomeIcon icon={faPenToSquare} />
						<span>Editar procedimento</span>
					</a>
				</div>

				<Tabela
					titulos={[
						'Procedimento',
						'Número CNJ',
						'Juízo',
						'Polo',
						'Fase',
						'Últ. movimentação',
						'Data últ. mov.',
					]}
				>
					{procedimentosCliente.map(proc => (
						<tr key={proc.id}>
							<td>
								<Link to={`/procedimentos/${proc.id}`}>
									{proc.procedimento || ''}
								</Link>
							</td>
							<td>{proc.numCNJ || ''}</td>
							<td>{proc.juizo || ''}</td>
							<td>{proc.polo || ''}</td>
							<td>{proc.fase || ''}</td>
							<td>{proc.ultMov || ''}</td>
							<td>{proc.DUM || ''}</td>
						</tr>
					))}
				</Tabela>
			</section>
		</>
	);
}
