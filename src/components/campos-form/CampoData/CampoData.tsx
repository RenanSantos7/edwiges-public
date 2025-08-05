import styles from './CampoData.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { SetStateAction } from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import MsgErro from '../../styles/MsgErro.tsx';
import {Label, LabelContainer} from '../../styles/index.tsx';

interface CampoDataProps {
	name: string;
	label?: string;
	obrigatorio?: boolean;
}

export default function CampoData({
	name,
	label = 'Data',
	obrigatorio = false,
	...props
}: CampoDataProps) {
	const [field, { error, touched }] = useField(name);

	return (
		<label className={styles.campo}>
			<LabelContainer>
				<Label
					erro={error && touched}
					texto={label}
					obrigatorio={obrigatorio}
				/>
				{error && touched && <MsgErro>{error}</MsgErro>}
			</LabelContainer>{' '}
			
            <input
				{...props}
				{...field}
                type='date'
                className={classNames(
					styles.input,
					error && touched ? styles.erro : '',
				)}
            />
			
            <FontAwesomeIcon icon={faCalendar} className={styles.icon} />
		</label>
	);
}
