import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import { ICliente, IProcedimento, IUsuario } from '../types/types.ts';
import { getData } from '../utils/requisicoes/index.ts';

interface IDadosContext {
	procedimentos: IProcedimento[];
	setProcedimentos: React.Dispatch<React.SetStateAction<IProcedimento[]>>;
	clientes: ICliente[];
	setClientes: React.Dispatch<React.SetStateAction<ICliente[]>>;
	asideOculto: boolean;
	setAsideOculto: React.Dispatch<React.SetStateAction<boolean>>;
	usuarios: IUsuario[];
	setUsuarios: React.Dispatch<React.SetStateAction<IUsuario[]>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const DadosContext = createContext<IDadosContext>(null);
DadosContext.displayName = 'Dados';

export function DadosProvider({ children }: { children: ReactNode }) {
	const [procedimentos, setProcedimentos] = useState([]);
	const [clientes, setClientes] = useState([]);
	const [usuarios, setUsuarios] = useState([]);
	const [asideOculto, setAsideOculto] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getData<ICliente[]>('clientes', setClientes);
		getData<IProcedimento[]>('procedimentos', setProcedimentos);
		getData<IUsuario[]>('usuarios', setUsuarios);
	}, []);

	return (
		<DadosContext.Provider
			value={{
				procedimentos,
				setProcedimentos,
				clientes,
				setClientes,
				asideOculto,
				setAsideOculto,
				usuarios,
				setUsuarios,
				loading,
				setLoading,
			}}
		>
			{children}
		</DadosContext.Provider>
	);
}

export function useDataContext() {
	const context = useContext(DadosContext);
	if (!context) {
		throw new Error('O contexto de dados não está sendo provido neste componente');
	}
	return context
}
