import { SetStateAction, useEffect, useState } from 'react';
import styles from './CampoMoeda.module.css';
import { useField } from 'formik';
import LabelContainer from '../../styles/LabelContainer.tsx';
import Label from '../../styles/Label.tsx';
import MsgErro from '../../styles/MsgErro.tsx';
import inicialMaiuscula from '../../../utils/inicialMaiuscula.ts';

interface CampoMoedaProps {
	name: string;
	label: string;
	obrigatorio?: boolean;
	nomeCampo?: string;
}

export default function CampoMoeda({
	name,
	label = inicialMaiuscula(name),
	obrigatorio = false,
	...props
}: CampoMoedaProps) {
	const [valorExibido, setValorExibido] = useState('R$ 0,00');

	const [field, { error, touched, value }, { setValue }] = useField(name);

	useEffect(() => {
		const valorFormatado = value.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});

		setValorExibido(valorFormatado);
	}, [value]);

	return (
		<div className={styles.campoMoedaContainer}>
			<LabelContainer>
				{label && (
					<Label
						texto={label}
						erro={error && touched}
						obrigatorio={obrigatorio}
					/>
				)}
				{error && touched && <MsgErro>{error}</MsgErro>}
			</LabelContainer>
			
			<label className={styles.campoMoeda}>
				<span className={styles.valor}>{valorExibido}</span>
				<input
					{...props}
					{...field}
					type='number'
					className={styles.campoInput}
				/>
			</label>
		</div>
	);
}
