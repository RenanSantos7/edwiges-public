import { ReactNode, SetStateAction, useEffect } from 'react'
import Botao from '../Botao/Botao.tsx'
import styles from './Notificacao.module.css'

interface NotificaoProps {
    aberta: boolean
    setAberta: React.Dispatch<SetStateAction<boolean>>
    conteudo: ReactNode
}

export default function Notificacao({ aberta, setAberta, conteudo }:NotificaoProps) {
    
    const tempoNotificacao = 3000
    
    useEffect(() => {
        if (aberta) {
            setTimeout(() => {
                setAberta(false)
            }, tempoNotificacao)
        }
    }, [aberta])

    /*
    function notificar(msg) {
		const tempoNotificacao = 3000
		setNotificando(true)
		setTimeout(() => {
			setNotificando(false)
		}, tempoNotificacao)
		setMsgNotificacao(msg)
	}
    */

    return (
        <article className={`
            ${styles.notificacao}
            ${aberta ? styles.aberta : ''}
        `}>
            <div className={styles.conteudo}>
                {conteudo}
            </div>

            <div className={styles.btContainer}>
                <Botao onclick={() => setAberta(false)}>OK</Botao>
            </div>
        </article>
    )
}
