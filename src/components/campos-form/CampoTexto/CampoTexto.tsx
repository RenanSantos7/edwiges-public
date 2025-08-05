import { useField } from 'formik';

import styles from './CampoTexto.module.css';
import inicialMaiuscula from '../../../utils/inicialMaiuscula.ts';
import classNames from 'classnames';
import { Label, LabelContainer, MsgErro } from '../../styles/index.tsx';

interface CampoProps {
	name?: string;
	label?: string;
	type?: 'text' | 'tel' | 'email' | 'password' | 'textarea';
	placeholder?: string;
	tamanho?: 'maior' | 'menor' | number;
	obrigatorio?: boolean;
}

export default function CampoTexto({
	name,
	label = name,
	type = 'text',
	...props
}: CampoProps) {
	let etiqueta = '';

	if (label === 'rg' || label === 'cpf' || label === 'cep') {
		etiqueta = label.toUpperCase();
	} else if (label) {
		etiqueta = inicialMaiuscula(label);
	}

	const [field, { error, touched }] = useField(name);

	if (type === 'textarea') {
		return (
			<label className={classNames(styles.campo, styles.textarea)}>
				<LabelContainer>
					<Label
						texto={etiqueta}
						obrigatorio={props?.obrigatorio}
						erro={error && touched}
					/>
					{error && touched && <MsgErro>{error}</MsgErro>}
				</LabelContainer>
				<textarea
					name={name}
					className={classNames(
						styles.input,
						error && touched ? styles.erro : '',
					)}
					style={{
						minHeight:
							typeof props.tamanho === 'number'
								? `${props.tamanho}px`
								: '',
					}}
					{...field}
					{...props}
				/>
			</label>
		);
	}

	return (
		<label className={classNames(styles.campo, styles[props.tamanho])}>
			<LabelContainer>
				{label && (
					<Label
						texto={etiqueta}
						obrigatorio={props?.obrigatorio}
						erro={error && touched}
					/>
				)}
				{error && touched && <MsgErro>{error}</MsgErro>}
			</LabelContainer>
			<input
				name={name}
				className={classNames(
					styles.input,
					error && touched ? styles.erro : '',
				)}
				type={type}
				placeholder={props.placeholder}
				{...field}
				{...props}
			/>
		</label>
	);
}
