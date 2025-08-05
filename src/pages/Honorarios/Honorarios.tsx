import styles from './Honorarios.module.css'
import { Titulo2, Titulo3 } from '../../components/Titulos/index.ts'
import FormHonorarios from './components/FormHonorarios/FormHonorarios.tsx'

export default function Honorarios() {
	return (
		<>
			<Titulo2>Honorários</Titulo2>

			<Titulo3>Cadastrar</Titulo3>
			<FormHonorarios />

			<Titulo3>Visualizar</Titulo3>
		</>
	)
}
