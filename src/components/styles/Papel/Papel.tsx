import classNames from 'classnames'
import styles from './Papel.module.css'
import { CSSProperties, ReactNode } from 'react'

interface PapelProps {
    children: ReactNode
    style?: CSSProperties
    className?: any
}

export default function Papel({children, style, className}:PapelProps) {
    return (
        <div className={classNames(styles.papel, className)} style={style}>
            {children}
        </div>
    )
}

