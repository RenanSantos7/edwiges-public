import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SetStateAction, useEffect, useState } from 'react';
import { useField } from 'formik';

import styles from './Select.module.css';
import inicialMaiuscula from '../../../utils/inicialMaiuscula.ts';
import MsgErro from '../../styles/MsgErro.tsx';

interface SelectProp {
	name: string;
	label?: string;
	opcoes: string[];
	obrigatorio?: boolean;
	placeholder?: string;
}

export default function Select({
	name,
	label = name,
	opcoes,
	placeholder = 'Clique para abrir as opções',
	obrigatorio = false,
	...props
}: SelectProp) {
	const [listaAberta, setListaAberta] = useState(false);

	const [field, { error, touched }, { setValue }] = useField(name);

	function aoEscolher(opcaoEscolhida: string) {
		setValue(opcaoEscolhida);
		setListaAberta(false);
	}

	return (
		<div className={styles.select}>
			<label className={styles.label}>
				<div>
					<span className={styles.titulo}>
						{inicialMaiuscula(label)}
						{obrigatorio && ' *'}
					</span>

					{touched && error && <MsgErro>{error}</MsgErro>}
				</div>

				<div className={styles.inputWrapper}>
					<input
						className={styles.input}
						onClick={() => setListaAberta(true)}
						required={obrigatorio}
						placeholder={placeholder}
						{...field}
						{...props}
					/>

					<FontAwesomeIcon
						icon={listaAberta ? faChevronUp : faChevronDown}
						className={styles.icone}
					/>
				</div>
			</label>

			{listaAberta && (
				<ul className={styles.listaOpcoes}>
					{opcoes.map(opcao => (
						<li
							key={opcao}
							className={styles.opcao}
							onClick={() => aoEscolher(opcao)}
						>
							{opcao}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
