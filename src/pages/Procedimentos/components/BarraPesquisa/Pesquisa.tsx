import styles from './Pesquisa.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SetStateAction, useState } from 'react';
import { IProcedimento } from '../../../../types/types.ts';

interface PesquisaProps {
	placeholder: string;
	itens: IProcedimento[];
	setItensFiltrados: React.Dispatch<SetStateAction<IProcedimento[]>>;
}

export default function Pesquisa({
	placeholder,
	itens,
	setItensFiltrados,
}: PesquisaProps) {
	const [valor, setValor] = useState('');

	function aoPesquisar() {
		let resultados: Array<IProcedimento> = [];

		const cliente: IProcedimento[] = itens.filter((proc: IProcedimento) =>
			proc.cliente.toLowerCase().includes(valor.toLowerCase()),
		);
		const proced = itens.filter((proc: IProcedimento) =>
			proc.procedimento.toLowerCase().includes(valor.toLowerCase()),
		);
		const cnj = itens.filter((proc: IProcedimento) =>
			proc.numCNJ.includes(valor),
		);
		const clienteProcCnj = [...cliente, ...proced, ...cnj];

		//* Set evita valores duplicados
		resultados = [...new Set(clienteProcCnj)];

		setItensFiltrados(resultados);
	}

	return (
		<section className={styles.pesquisar}>
			<h2 className={styles.pesquisar__titulo}>Pesquisar</h2>
			<input
				type='search'
				placeholder={placeholder}
				className={styles.pesquisar__input}
				onChange={evt => {
					setValor(evt.target.value);
					aoPesquisar();
				}}
			/>

			<FontAwesomeIcon
				icon={faSearch}
				className={styles.pesquisar__ico}
			/>
		</section>
	);
}
