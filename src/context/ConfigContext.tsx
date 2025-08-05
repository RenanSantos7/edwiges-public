import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';

interface IConfigContext {
	exibirTarefasCompletas: boolean;
	setExibirTarefasCompletas: Dispatch<SetStateAction<boolean>>;
}

const ConfigContext = createContext<IConfigContext>(null);

export default function ConfigProvider({ children }: { children: ReactNode }) {
	const [exibirTarefasCompletas, setExibirTarefasCompletas] = useState(false);

	return (
		<ConfigContext.Provider
			value={{ exibirTarefasCompletas, setExibirTarefasCompletas }}
		>
			{children}
		</ConfigContext.Provider>
	);
}

export function useConfig() {
	return useContext(ConfigContext);
}
