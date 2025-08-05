import { useState } from 'react'
import styles from './CalculadoraPrazos.module.css'
import { feriados2024 } from './feriados.ts'
import CampoNumero from '../../components/campos-form/CampoNumero/CampoNumero.tsx'
import { Titulo2 } from '../../components/Titulos/index.ts'

export default function CalculadoraPrazos() {
	const [termoFinal, setTermoFinal] = useState('')
	const [dataInicial, setDataInicial] = useState('')
	const [prazo, setPrazo] = useState(1)

	const umDiaEmMilissegundos = 24 * 60 * 60 * 1000

	function calcularPrazo() {
		let dataAtual = new Date(dataInicial)

		for (let i = 0; i <= prazo; i++) {
			const diaSemana = dataAtual.getDay()

			//acrescenta um dia ao prazo
			dataAtual.setTime(dataAtual.getTime() + umDiaEmMilissegundos)

			let dataFormatada = formatarData(dataAtual)

			// Verifica se o dia atual não é um fim de semana ou feriado
			if (diaSemana == 0 || diaSemana == 6 || feriados2024.includes(dataFormatada)) {
				setPrazo(prevPrazo => prevPrazo++)
			}
		}

		setTermoFinal(formatarData(dataAtual))
	}

	function formatarData(data: Date) {
		const ano = data.getFullYear()
		const mes = (data.getMonth() + 1).toString().padStart(2, '0')
		const dia = data.getDate().toString().padStart(2, '0')
		return `${dia}/${mes}/${ano}`
	}

	return (
		<section className={styles.calculadora}>
			<Titulo2>Calculadora de Prazos</Titulo2>
			<label className={styles.calculadora__label}>
				<h3 className={styles.calculadora__label__titulo}>Termo inicial</h3>
				<input
					type='date'
					className={styles.calculadora__campo}
					value={dataInicial}
					onChange={evt => setDataInicial(evt.target.value)}
				/>
			</label>

			<label className={styles.calculadora__label}>
				<h3 className={styles.calculadora__label__titulo}>Prazo em dias úteis</h3>

				<CampoNumero
					min={1}
					valor={prazo}
					aoMudar={arg => {
						setPrazo(arg)

						if (dataInicial) {
							calcularPrazo()
						}
					}}
				/>
			</label>

			<div className={styles.termoFinal}>
				<h3 className={styles.calculadora__label__titulo}>Termo final</h3>
				<a id='termo-final' className={styles.calculadora__campo}>
					{termoFinal}
				</a>
			</div>
		</section>
	)
}
