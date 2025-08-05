import { ChangeEvent, useState } from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

import styles from './CheckBox.module.css';
import inicialMaiuscula from '../../../utils/inicialMaiuscula.ts';
import MsgErro from '../../styles/MsgErro.tsx';

interface CheckboxProps {
	name: string;
	label?: string;
	obrigatorio?: boolean;
	tarefa?: boolean;
	posicaoTexto?: 'esquerda' | 'direita';
	onChange?: (...args: any[]) => any
}

export default function CheckBox({
	name,
	label = inicialMaiuscula(name),
	obrigatorio = false,
	posicaoTexto = 'esquerda',
	tarefa = false,
	...props
}: CheckboxProps) {
	const [checado, setChecado] = useState(false);

	const [field, { error, touched, value }, { setValue }] = useField(name);

	function handleCheck(e: ChangeEvent<HTMLInputElement>) {
		try {
			setChecado(prev => !prev)
		} finally {
			setValue(checado)
		}
	}

	const labelText = tarefa
		? classNames(styles.labelText, checado ? styles.checado : '')
		: styles.labelText;

	return (
		<label className={styles.inputContainer}>
			{posicaoTexto === 'esquerda' && (
				<span className={labelText}>
					{label}
					{obrigatorio ? ' *' : ''}
				</span>
			)}

			<input
				{...props}
				{...field}
				type='checkbox'
				className={styles.input}
				onChange={handleCheck}
			/>
			<div className={styles.checkbox}></div>

			{posicaoTexto === 'direita' && (
				<span className={labelText}>
					{label}
					{obrigatorio ? ' *' : ''}
				</span>
			)}

			{error && touched && <MsgErro>{error}</MsgErro>}
		</label>
	);
}
