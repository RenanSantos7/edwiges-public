import { useState } from 'react';
import Pesquisa from './components/BarraPesquisa/PesquisaCliente.tsx';
import TabelaClientes from '../../components/TabelaClientes/TabelaClientes.tsx';
import { ICliente } from '../../types/types.ts';
import { Titulo2, Titulo3 } from '../../components/Titulos/index.ts';
import { useDataContext } from '../../context/DadosContext.tsx';

interface IContexto {
	clientes: ICliente[];
}

export default function Clientes() {
	const { clientes }: IContexto = useDataContext();

	const [clientesFiltrados, setClientesFiltrados] = useState([...clientes]);

	return (
		<>
			<Titulo2>Clientes</Titulo2>

			<Titulo3>Pesquisar</Titulo3>
			<Pesquisa
				placeholder='Digite o nome ou o CPF do cliente e aperte Enter'
				itens={clientes}
				setItensFiltrados={setClientesFiltrados}
			/>

			<TabelaClientes clientes={clientesFiltrados} />
		</>
	);
}
