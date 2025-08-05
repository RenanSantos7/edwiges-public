import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header/Header.tsx';
import Aside from '../components/Aside/Aside.tsx';
import Main from '../components/Main/Main.tsx';
import Carregamento from '../components/Elementos/Carregamento/Carregamento.tsx';
import { useDataContext } from '../context/DadosContext.tsx';

interface Contexto {
	loading: boolean;
}

export default function Base() {
	const { loading }: Contexto = useDataContext();

	return (
		<>
			<Header />
			<Aside />
			<Main>
				<Outlet />
			</Main>

			<Carregamento ativo={loading} />
			<ScrollRestoration />
		</>
	);
}
