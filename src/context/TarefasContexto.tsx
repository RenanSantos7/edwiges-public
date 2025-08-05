import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { ITag, ITarefa } from '../types/types.ts';
import {
	deleteData,
	getData,
	patchData,
	postData,
} from '../utils/requisicoes/index.ts';

interface ITaskContext {
	tarefas: ITarefa[];
	criarTarefa: (titulo: string, tags: ITag[]) => void;
	excluirTarefa: (id: number) => void;
	alterarStatusTarefa: (id: number) => void;
	editarTituloTarefa: (id: number, novoTitulo: string) => void;
}

const TaskContext = createContext<ITaskContext>(null);

export default function TaskProvider({ children }: { children: ReactNode }) {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);

	function criarTarefa(titulo: string, tags: ITag[]) {
		const novaTarefa: ITarefa = {
			id: tarefas.length ? Math.max(...tarefas.map(t => t.id)) + 1 : 0,
			titulo: titulo,
			tags: tags,
			completa: false,
		};

		setTarefas(prev => [...prev, novaTarefa]);
		postData<ITarefa>('tarefas', novaTarefa);
	}

	function excluirTarefa(id: number) {
		setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
		deleteData('tarefas', id);
	}

	function alterarStatusTarefa(id: number) {
		const tarefaAtualizada = tarefas.find(tarefa => tarefa.id === id);

		if (tarefaAtualizada) {
			const novaTarefa = {
				...tarefaAtualizada,
				completa: !tarefaAtualizada.completa,
			};
			patchData<ITarefa>('tarefas', id, {
				completa: novaTarefa.completa,
			}).then(() => {
				setTarefas(prev =>
					prev.map(tarefa =>
						tarefa.id === id ? novaTarefa : tarefa,
					),
				);
			});
		}
	}

	function editarTituloTarefa(id: number, novoTitulo: string) {
		const tarefaAtualizada = tarefas.find(tarefa => tarefa.id === id);

		if (tarefaAtualizada) {
			const novaTarefa = { ...tarefaAtualizada, titulo: novoTitulo };
			patchData<ITarefa>('tarefas', id, {
				titulo: novaTarefa.titulo,
			}).then(() => {
				setTarefas(prev =>
					prev.map(tarefa =>
						tarefa.id === id ? novaTarefa : tarefa,
					),
				);
			});
		}
	}

	useEffect(() => {
		getData<ITarefa[]>('tarefas', setTarefas);
	}, []);

	return (
		<TaskContext.Provider
			value={{
				tarefas,
				criarTarefa,
				excluirTarefa,
				alterarStatusTarefa,
				editarTituloTarefa,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
}

export function useTaskContext() {
	return useContext(TaskContext);
}
