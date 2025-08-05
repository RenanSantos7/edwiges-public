import styles from './BotaoAside.module.css';
import { SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDataContext } from '../../../context/DadosContext.tsx';

interface IContext {
	setAsideOculto: React.Dispatch<SetStateAction<boolean>>;
	asideOculto: boolean;
}

export default function BotaoAside() {
	const { setAsideOculto, asideOculto }: IContext = useDataContext();

	return (
		<button
			type='button'
			className={styles.asideToggle}
			onClick={() => setAsideOculto(prev => !prev)}
			title='Esconder/mostrar o painel lateral'
		>
			<FontAwesomeIcon icon={faBars} />
		</button>
	);
}
