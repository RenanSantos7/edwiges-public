import { useState } from 'react';
import Pesquisa from './components/BarraPesquisa/Pesquisa.tsx';
import TabelaProced from '../../components/TabelaProced/TabelaProced.tsx';
import { IProcedimento } from '../../types/types.ts';
import { useDataContext } from '../../context/DadosContext.tsx';

interface IContexto {
	procedimentos: IProcedimento[];
}

export default function Procedimentos() {
	const { procedimentos }: IContexto = useDataContext();

	const [procFiltrados, setProcFiltrados] = useState(procedimentos);

	return (
		<>
			<Pesquisa
				placeholder={
					'Digite o número do procedimento, o processo ou o nome do cliente'
				}
				itens={procedimentos}
				setItensFiltrados={setProcFiltrados}
			/>

			<TabelaProced procedimentos={procFiltrados} />
		</>
	);
}
