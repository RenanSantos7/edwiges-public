import styles from './Navegacao.module.css'
import BotaoAside from './BotaoAside/BotaoAside.tsx'
import Menu from './Menu/Menu.tsx'
import BtLogout from './BtLogout/BtLogout.tsx'

export default function Navegacao() {

    return (
        <nav className={styles.menuPrincipal}>
            <div className={styles.principal}>
                <BotaoAside />

                <Menu
                    opcoesMenu={[
                        { id: 0, path: '/', titulo: 'Início' }
                    ]}
                />

                <Menu
                    opcoesMenu={[
                        {id: 0, titulo: 'Clientes', path: '/clientes'},
                        {id: 1, titulo: 'Cadastrar Cliente', path: '/clientes/cadastrar'},
                        {id: 2, titulo: 'Pesquisar', path: '/clientes'},
                    ]}
                />

                <Menu
                    opcoesMenu={[
                        {id: 0, path: '/procedimentos', titulo: 'Procedimentos'},
                        {id: 1, path: '/procedimentos/cadastrar', titulo: 'Cadastrar Procedimento'},
                        {id: 2, path: '/procedimentos', titulo: 'Pesquisa Procedimentos'},
                    ]}
                />

                <Menu
                    opcoesMenu={[
                        {id: 0, path: '/tarefas', titulo: 'Tarefas'},
                    ]}
                />

                <Menu
                    opcoesMenu={[
                        {id: 0, path: '/honorarios', titulo: 'Honorários'},
                        {id: 0, path: '/honorarios/pagamentos', titulo: 'Pagamentos'},
                    ]}
                />

                <Menu
                    opcoesMenu={[
                        {id: 0, titulo: 'Ferramentas'},
                        {id: 1, titulo: 'Gestão de Honorários', path: '/gestao-honorarios' },
                        {id: 2, titulo: 'Calculadora de Prazos', path: '/calculadora-prazos' },
                        {id: 3, titulo: 'Progressão de Regime', path: '/progressao-regime' },
                    ]}
                />
            </div>

            <BtLogout />
        </nav>
    )
}