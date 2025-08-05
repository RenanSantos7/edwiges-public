import { ReactNode } from 'react'
import styles from './Botao.module.css'
import classNames from 'classnames'

interface BotaoProps {
    children: ReactNode
    onclick?: (arg:any) => void
    type?: 'button' | 'submit' | 'reset'
    style?: React.CSSProperties
    ativo?: boolean
    variante?: '' | 'delineado' | 'texto'
}

export default function Botao({ children, type = 'button', style, ativo = true, onclick, variante }:BotaoProps) {
    
    const classesBotao = classNames(styles.botao, styles[variante])

    return (
        <button
            type={type}
            className={classesBotao}
            style={style}
            disabled={!ativo}
            onClick={onclick}
        >
            {children}
        </button>
    )
}
