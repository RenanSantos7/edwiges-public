import { useEffect, useState } from 'react'
import { calcularPenaEmDias } from './calculaPena.ts'
import CampoNumero from '../../components/campos-form/CampoNumero/CampoNumero.tsx'
import Tabela from '../../components/Elementos/Tabela/Tabela.tsx'
import styles from './ProgRegime.module.css'
import CampoData from '../../components/campos-form/CampoData/CampoData.tsx'
import { Titulo2, Titulo3 } from '../../components/Titulos/index.ts'

export default function ProgRegime() {
	
	const porcentagens = [16, 20, 25, 30, 40, 50, 60, 70]
	const [data, setData] = useState(`${new Date()}`)
	const [anos, setAnos] = useState(0)
	const [meses, setMeses] = useState(0)
	const [dias, setDias] = useState(0)
	const [diasTotal, setDiasTotal] = useState(0)
    
	useEffect(() => {
		const total = calcularPenaEmDias(new Date(data), anos, meses, dias)
		setDiasTotal(total)
	}, [anos, meses, dias, data])

	return (
		<section className={styles.calculadora}>
			<Titulo2>Calculadora de Progressão de Regime</Titulo2>

			<Titulo3>Tempo de pena</Titulo3>

			<div className={styles.entrada}>
				<CampoData
					label='Início do cumprimento'
					valor={data}
					setValor={setData}
				/>
			</div>

			<div className={styles.entrada}>
				<div className={styles.entrada__input}>
					<span>Anos</span>
					<CampoNumero
						valor={anos}
						aoMudar={setAnos}
					/>
				</div>

				<div className={styles.entrada__input}>
					<span>Meses</span>
					<CampoNumero
						valor={meses}
						aoMudar={setMeses}
					/>
				</div>

				<div className={styles.entrada__input}>
					<span>Dias</span>
					<CampoNumero
						min={1}
						valor={dias}
						aoMudar={setDias}
					/>
				</div>
			</div>


			<Tabela
				titulos={['', 'Anos', 'Meses', 'Dias', 'Total em dias']}
			>
				{porcentagens.map((porcentagem, i) => (
					<tr key={i}>
						<td>{porcentagem}%</td>
						<td></td>
						<td></td>
						<td></td>
						<td>{diasTotal * porcentagem / 100}</td>
					</tr>
				))}
			</Tabela>
		</section>
	)
}
