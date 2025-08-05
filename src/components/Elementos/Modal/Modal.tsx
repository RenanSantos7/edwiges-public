import { Dispatch, ReactNode, SetStateAction } from 'react'
import styles from './Modal.module.css'
import Titulo3 from '../../Titulos/Titulo3.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

interface ModaProps {
	children: ReactNode
	ativo: boolean
	setAtivo: Dispatch<SetStateAction<boolean>>
	titulo?: string
}

export default function Modal({
	children,
	ativo,
	setAtivo,
	titulo,
}: ModaProps) {
	if (ativo) {
		return (
			<div className={styles.modalContainer}>
				<div
					className={styles.sombra}
					onClick={() => setAtivo(false)}
				/>
                <article className={styles.modal}>
                    <button
                        title='Fechar'
                        className={styles.btFechar}
                        onClick={() => setAtivo(false)}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </button>
					{titulo && (
						<Titulo3 style={{ marginTop: 0 }}>{titulo}</Titulo3>
					)}
					{children}
				</article>
			</div>
		)
	}
}
