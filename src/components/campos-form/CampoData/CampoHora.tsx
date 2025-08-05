import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import styles from './CampoData.module.css';
import LabelContainer from '../../styles/LabelContainer.tsx';
import Label from '../../styles/Label.tsx';

interface CampoHoraProps {
	name: string;
	label?: string;
	obrigatorio?: boolean;
}

export default function CampoHora({label = 'Horário', ...props}: CampoHoraProps) {

    const [field, { error, touched }] = useField(props.name);
    
	return (
		<label className={styles.campo}>
			<LabelContainer>
				<Label
					texto={label}
					obrigatorio={props.obrigatorio}
					erro={error && touched}
				/>
			</LabelContainer>
			
            <input
                {...props}
                {...field}
                type='time'
                className={styles.input}
            />

            <FontAwesomeIcon
                icon={faClock}
                className={styles.icon}
            />
		</label>
	);
}
