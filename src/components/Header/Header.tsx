import styles from './Header.module.css';
import Navegacao from '../Navegacao/Navegacao.tsx'
import logo from '@/assets/logo_escritorio.png'
import MenuUsuario from './MenuUsuario/MenuUsuario.tsx';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<figure className={styles.logo}>
					<img src={logo} alt="Logo do escritório" />
				</figure>

				<MenuUsuario />
			</div>
			<Navegacao />
		</header>
	)
}
