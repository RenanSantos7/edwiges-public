import { Dispatch, SetStateAction } from 'react';

import styles from './ModalTarefa.module.css';
import Modal from '../../../../components/Elementos/Modal/Modal.tsx';
import { ITarefa } from '../../../../types/types.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useTaskContext } from '../../../../context/TarefasContexto.tsx';

interface ModalTarefaProps {
	tarefa: ITarefa;
	ativo: boolean;
	setAtivo: Dispatch<SetStateAction<boolean>>;
}

export default function ModalTarefa({
	tarefa,
	ativo,
	setAtivo,
}: ModalTarefaProps) {
	const { editarTituloTarefa } = useTaskContext();
	const { tags } = tarefa;

	return (
		<Modal ativo={ativo} setAtivo={setAtivo}>
			<input
				type='text'
				value={tarefa.titulo}
				title='Título da tarefa'
				className={styles.titulo}
				onChange={e => editarTituloTarefa(tarefa.id, e.target.value)}
			/>

			<label>
				<input type='text' title='tags' multiple />
			</label>

			<div className={styles.tagsContainer}>
				{tags.map(tag => (
					<span className={styles.tagPill} key={tag.id}>
						{tag.titulo}
						<FontAwesomeIcon icon={faClose} />
					</span>
				))}
			</div>
		</Modal>
	);
}
