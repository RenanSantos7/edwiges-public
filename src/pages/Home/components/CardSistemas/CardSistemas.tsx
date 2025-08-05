import styles from './CardSistemas.module.css'
import logoTJPI from '@/assets/logo_tjpi_transp.png'
import logoJFPI from '@/assets/logo_jf_transp.png'
import logoJTPI from '@/assets/logo_trt_transp.png'
import logo from '@/assets/brastra_transp.png'
import { Titulo3 } from '../../../../components/Titulos/index.ts'
import Papel from '../../../../components/styles/Papel/Papel.tsx'

interface CardSistemasProps {
    id: string
    titulo: string
    links: ILink[]
}

interface ILink {
    id: number
    url: string
    nome: string
}

export default function CardSistemas({ id, titulo, links }:CardSistemasProps) {
    let bg = ''

    switch (id) {
        case 'jepi':
            bg = logoTJPI
            break
        case 'jfpi':
            bg = logoJFPI
            break
        case 'jtpi':
            bg = logoJTPI
            break
        default:
            bg = logo
            break
    }


    return (
        <Papel className={styles.sistemas__box} style={{backgroundImage: `url(${bg})`}}>
            <Titulo3 style={{marginTop: 0}}>{titulo}</Titulo3>
            <ul>
                {links.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.url} target='blank'>{link.nome}</a>
                        </li>
                    )
                })}
            </ul>
        </Papel>
    )
}
