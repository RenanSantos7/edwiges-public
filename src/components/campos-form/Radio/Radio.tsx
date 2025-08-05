import styles from './RadioButton.module.css'

interface RadioProps {
    titulo:string
    opcoes: string[]
    name?: string
}

export default function RadioButton({titulo, opcoes, name = 'opcao'}:RadioProps) {
    return (
        <fieldset className={styles.campoRadio}>
            <legend className={styles.titulo}>{titulo}</legend>

            <div className={styles.container}>
                {opcoes.map(opcao => (
                    <label key={opcao} className={styles.label}>
                        <input type='radio' name={name} value={opcao} className={styles.input} />
                        <div className={styles.indicador}></div>
                        <span>{opcao}</span>
                    </label>
                ))}
            </div>

        </fieldset>
    )
}
