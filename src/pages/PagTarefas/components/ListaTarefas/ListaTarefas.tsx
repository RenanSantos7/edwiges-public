import { ITarefa } from '../../../../types/types.ts'
import { Titulo3, Titulo4 } from '../../../../components/Titulos/index.ts'
import { useTaskContext } from '../../../../context/TarefasContexto.tsx'
import { useConfig } from '../../../../context/ConfigContext.tsx'
import Divisor from '../../../../components/Elementos/Divisor/Divisor.tsx'
import ItemTarefa from '../ItemTarefa/ItemTarefa.tsx'
import styles from './ListaTarefas.module.css'

interface ListaTarefasProps {}

export default function ListaTarefas({}: ListaTarefasProps) {
	const { tarefas } = useTaskContext()
	const { exibirTarefasCompletas } = useConfig()

	const tarefasExibidas: ITarefa[] = exibirTarefasCompletas
		? tarefas
		: tarefas.filter(tarefa => !tarefa.completa)

	const tarefasConcluidas = tarefas.filter(tarefa => tarefa.completa)

	const numTarefas = tarefasExibidas ? String(tarefasExibidas.length) : ''

	return (
		<>
			<Titulo3> Todas as suas Tarefas ({numTarefas})</Titulo3>
			<div className={styles.container}>
				{tarefasExibidas.map(tarefa => (
					<>
						<Divisor variante='horizontal' />
						<ItemTarefa key={tarefa.id} tarefa={tarefa} />
						<Divisor variante='horizontal' />
					</>
				))}
			</div>

			{!exibirTarefasCompletas && (
				<>
					<Titulo4>Tarefas concluídas</Titulo4>
					{tarefasConcluidas &&
						tarefasConcluidas.map(tarefa => (
							<ItemTarefa tarefa={tarefa} key={tarefa.id} />
						))}
				</>
			)}
		</>
	)
}
