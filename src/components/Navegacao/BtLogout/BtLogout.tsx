import styles from './BtLogout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function BtLogout() {
	return (
        <button
            type='button'
            className={styles.logout}
            title='Sair'
        >
			<FontAwesomeIcon icon={faArrowRightFromBracket} />
		</button>
	)
}
