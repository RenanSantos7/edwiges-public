import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from './ItemTarefa.module.css';
import { ITarefa } from '../../../../types/types.ts';
import CheckBox from '../../../../components/campos-form/CheckBox/CheckBox.tsx';
import { useTaskContext } from '../../../../context/TarefasContexto.tsx';
import ModalTarefa from '../ModalTarefa/ModalTarefa.tsx';

interface ItemTarefaProps {
	tarefa: ITarefa;
}

export default function ItemTarefa({ tarefa }: ItemTarefaProps) {
	const { alterarStatusTarefa, editarTituloTarefa } = useTaskContext();
	const [modalAberto, setModalAberto] = useState(false);
	const { tags } = tarefa;

	return (
		<>
			<div className={styles.tarefa}>
				<CheckBox
					label={tarefa.titulo}
					aoMudar={() => alterarStatusTarefa(tarefa.id)}
					posicaoTexto='direita'
					tarefa
				/>

				<div className={styles.tagsContainer}>
					{tags.map(tag => (
						<span className={styles.tagPill} key={tag.id}>
							{tag.titulo}
							<FontAwesomeIcon icon={faClose} />
						</span>
					))}
				</div>

				<div className={styles.acoes}>
					<FontAwesomeIcon
						icon={faPencil}
						onClick={() => setModalAberto(true)}
					/>
					<FontAwesomeIcon icon={faTrash} />
				</div>
			</div>

			<ModalTarefa
				tarefa={tarefa}
				ativo={modalAberto}
				setAtivo={setModalAberto}
			/>
		</>
	);
}
