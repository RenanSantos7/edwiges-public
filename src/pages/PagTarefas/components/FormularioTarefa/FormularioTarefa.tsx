import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormEvent, useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { useTaskContext } from '../../../../context/TarefasContexto.tsx'
import CampoTexto from '../../../../components/campos-form/CampoTexto/CampoTexto.tsx'
import Titulo3 from '../../../../components/Titulos/Titulo3.tsx'
import styles from './FormularioTarefa.module.css'

export default function FormularioTarefa() {
	const { tarefas, criarTarefa } = useTaskContext();

	const [entrada, setEntrada] = useState('')

	function cadastrarNovaTarefa(evt: FormEvent) {
		evt.preventDefault()
		if (entrada) {
			const palavras = entrada.split(/\s+/)

			const titulo = palavras
				.filter((palavra: string) => !palavra.startsWith('#'))
				.join(' ')

			const tags = palavras
				.filter((palavra: string) => palavra.startsWith('#'))
				.map(tag => tag.trim())
				.map((tag, i) => ({ id: i, titulo: tag }))

			criarTarefa(titulo, tags)

			setEntrada('')
		}
	}

	return (
        <>
            <Titulo3>Nova Tarefa</Titulo3>
            <form className={styles.container}>
                <CampoTexto
                    // valor={entrada}
                    // setValor={setEntrada}
                    placeholder='Adicione um nova tarefa. Você pode usar # para criar tags'
                />
                <button
                    title='Adicionar tarefa'
                    type='submit'
                    onClick={cadastrarNovaTarefa}
                    className={styles.btTarefa}
                >
    				<FontAwesomeIcon icon={faPlus} />
    			</button>
    		</form>
        </>
	)
}
