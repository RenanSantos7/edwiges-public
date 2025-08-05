import styles from './Erro404.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons'

export default function Erro404() {
	return (
		<div className={styles.erro404}>
			<FontAwesomeIcon icon={faThumbsDown} className={styles.erro404__emoji} />
			<h2 className={styles.erro404__title}>Algo deu errado...</h2>
			<p className={styles.erro404__text}>Não foi possível encontrar essa página</p>
		</div>
	)
}
