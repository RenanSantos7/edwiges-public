import { useEffect, useState } from 'react'
import styles from './Switcher.module.css'

interface SwitcherProp {
	label: string
	checado: boolean
	aoMudar: () => void
	altura?: number
	posicaoTexto?: 'esquerda' | 'direita'
}

export default function Switcher({
	altura = 1,
	label,
	posicaoTexto = 'esquerda',
	checado = false,
	aoMudar,
}: SwitcherProp) {
	return (
		<label className={styles.switcher} style={{ fontSize: `${altura}rem` }}>
			{posicaoTexto === 'esquerda' && (
				<span className={styles.label}>{label}</span>
			)}
			<input
				type='checkbox'
				className={styles.inputCheck}
				checked={checado}
				onChange={aoMudar}
			/>
			<span className={styles.slider}></span>
			{posicaoTexto === 'direita' && (
				<span className={styles.label}>{label}</span>
			)}
		</label>
	)
}
