import styles from './MenuUsuario.module.css'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { IUsuario } from '../../../types/types.ts'

export default function MenuUsuario() {
	const usuarioLogado: Pick<IUsuario, 'nome' | 'sobrenome' | 'email' | 'tratamento'> = {
		nome: 'Renan',
		sobrenome: 'Santos',
		email: 'renansantos.jus@gmail.com',
		tratamento: 'Dr.',
	}

	return (
		<div className={classNames(styles.container, 'trans-ease')}>
			<div>
				<div className={styles.nomeUsuario}>
					{usuarioLogado.tratamento} {usuarioLogado.nome} {usuarioLogado.sobrenome}
				</div>
				<div className={styles.emailUsuario}>{usuarioLogado.email}</div>
			</div>

			<div className={classNames('circulo', styles.foto)}>
				<FontAwesomeIcon icon={faUser} />
			</div>
		</div>
	)
}
