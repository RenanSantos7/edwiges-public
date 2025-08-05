import styles from './Pesquisa.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SetStateAction, useState } from 'react'
import { ICliente } from '../../../../types/types.ts'

interface PesquisaProps {
	placeholder: string
	itens: ICliente[]
	setItensFiltrados: React.Dispatch<SetStateAction<ICliente[]>>
}

export default function PesquisaCliente({ placeholder, itens, setItensFiltrados }: PesquisaProps) {
	const [valor, setValor] = useState('')

	function aoPesquisar() {
		let resultados: ICliente[] = []

		const nome = itens.filter((item: any) => item.nome.toLowerCase().includes(valor.toLowerCase()))
		const cpf = itens.filter((item: any) => item.cpf.includes(valor))
		const nomeCpf = [...nome, ...cpf]

		//* Set evita valores duplicados
		resultados = [...new Set(nomeCpf)]

		setItensFiltrados(resultados)
	}

	return (
		<label className={styles.pesquisar}>
			<FontAwesomeIcon icon={faSearch} className={styles.pesquisar__ico} />

			<input
				type='search'
				placeholder={placeholder}
				className={styles.input}
				value={valor}
				onChange={evt => {
					setValor(evt.target.value)
					aoPesquisar()
				}}
			/>
		</label>
	)
}
