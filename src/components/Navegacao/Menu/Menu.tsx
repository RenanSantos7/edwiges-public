import styles from './Menu.module.css'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface OpcoesMenu {
    id: number
    titulo: string
    path?: string
}

interface MenuProps {
    opcoesMenu: OpcoesMenu[]
}

export default function Menu({ opcoesMenu }: MenuProps) {

    const primeiraOpcao = opcoesMenu[0]
    const outrasOpcoes = opcoesMenu.slice(1)
    
	return (
		<div className={classNames(styles.dropdown, styles.navitem)}>
            <Link
                className={styles.link__superior}
                to={primeiraOpcao.path}
            >{primeiraOpcao.titulo}</Link>
			
            {!!outrasOpcoes.length &&
                <div className={styles.dropdownContent}>
                    {outrasOpcoes.map(opcao => (
                        <Link
                            key={opcao.id}
                            className={styles.link}
                            to={opcao.path}
                        >{opcao.titulo}</Link>
                    ))}
                </div>
            }
		</div>
	)
}
