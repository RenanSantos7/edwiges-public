import Papel from '../../components/styles/Papel/Papel.tsx'
import Sistemas from './components/Sistemas/Sistemas.tsx'
import { Titulo2 } from '../../components/Titulos/index.ts'
import { useDataContext } from '../../context/DadosContext.tsx'
import styles from './Home.module.css'

export default function Home() {
	const idades = [
		{ id: 0, nome: 'Renan', idade: 34 },
		{ id: 1, nome: 'Elaine', idade: 38 },
		{ id: 2, nome: 'Selena', idade: 6 },
		{ id: 3, nome: 'Teófilo', idade: 30 },
	]

	const { clientes, procedimentos } = useDataContext();

	return (
		<>
			<Sistemas />
			<div className={styles.flexBox}>
				<div>
					<Titulo2>Informações Gerais</Titulo2>
					<Papel>
						<p className={styles.text}>
							<b>Clientes:</b> {clientes.length}
						</p>
						<p className={styles.text}>
							<b>Procedimentos:</b> {procedimentos.length}
						</p>
					</Papel>
				</div>
			</div>
		</>
	)
}
