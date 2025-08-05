import { useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './CampoNumero.module.css';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useField } from 'formik';
import { Label, MsgErro, LabelContainer } from '../../styles/index.tsx';
import inicialMaiuscula from '../../../utils/inicialMaiuscula.ts';

interface CampoNumeroProps {
	name: string;
	label?: string;
	min?: number;
	max?: number;
	obrigatorio?: boolean;
}

export default function CampoNumero({
	name,
	label = inicialMaiuscula(name),
	min = 0,
	max,
	...props
}: CampoNumeroProps) {
	const [field, { value, error, touched }, { setValue }] = useField(name);
	const valorNum = useMemo(() => Number(value), [value]);

	useEffect(() => {
		if (value < min) {
			setValue(min);
		}

		if (value > max) {
			setValue(max);
		}
	}, [value]);

	function aumentar() {
		setValue((prev: string) => `${Number(prev) + 1}`);
	}

	function diminuir() {
		setValue((prev: string) => `${Number(prev) - 1}`);
	}

	return (
		<div className={styles.container}>
			<LabelContainer>
				{label && (
					<Label
						erro={!!error}
						texto={label}
						obrigatorio={props?.obrigatorio}
					/>
				)}
				{error && touched && <MsgErro>{error}</MsgErro>}
			</LabelContainer>
			<label className={styles.label}>
				<FontAwesomeIcon
					icon={faMinus}
					className={styles.btMenos}
					onClick={diminuir}
				/>

                <input
                    {...props}
                    {...field}
					name={name}
					className={styles.campo}
                    value={value}
					readOnly
				/>

				<FontAwesomeIcon
					icon={faPlus}
					className={styles.btMais}
					onClick={aumentar}
				/>
			</label>
		</div>
	);
}
