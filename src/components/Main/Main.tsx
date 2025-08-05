import { ReactNode } from 'react';
import styles from './Main.module.css';
import classNames from 'classnames';
import { useDataContext } from '../../context/DadosContext.tsx';

export default function ({ children }: { children: ReactNode }) {
	const { asideOculto } = useDataContext();

	return (
		<main
			className={classNames(
				styles.main,
				asideOculto ? styles.colapsado : '',
			)}
		>
			{children}
		</main>
	);
}
