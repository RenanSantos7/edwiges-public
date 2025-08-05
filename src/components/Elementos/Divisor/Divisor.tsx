import styles from './Divisor.module.css'

interface DivisorProps {
    variante: 'horizontal' | 'vertical'
}

export default function Divisor({variante = 'horizontal'}: DivisorProps) {
    if (variante === 'horizontal') return <hr className={styles.horizontal} />

    if (variante === 'vertical') return <hr className={styles.vertical} />
}

