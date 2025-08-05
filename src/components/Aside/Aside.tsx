import styles from './Aside.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCalculator,
	faCalendarDays,
	faCircleInfo,
	faDatabase,
	faEarthAmericas,
	faGear,
	faNoteSticky,
	faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import AsideListItem from './AsideListItem/AsideListItem.tsx';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/DadosContext.tsx';

export default function Aside() {
	const { asideOculto } = useDataContext();

	const links = [
		{
			id: 0,
			text: 'Banco de dados do Escritório',
			path: 'https://onedrive.live.com/edit.aspx?resid=778B26F40AD021B1!286658',
			icon: faDatabase,
		},
		{
			id: 1,
			text: 'Notion',
			path: 'https://www.notion.so/',
			icon: faNoteSticky,
		},
		{
			id: 2,
			text: 'INSS Digital',
			path: 'https://www.oabpi.org.br/servicos/inssdigital/',
			icon: faEarthAmericas,
		},
		{
			id: 3,
			text: 'Todoist',
			path: 'https://todoist.com/app',
			icon: faSquareCheck,
		},
		{
			id: 4,
			text: 'Agenda do Google',
			path: 'https://calendar.google.com/',
			icon: faCalendarDays,
		},
		{
			id: 5,
			text: 'SOS Cálculos',
			path: 'https://tribunais.soscalculos.com.br/login',
			icon: faCalculator,
		},
	];

	return (
		<aside
			className={classNames(
				styles.aside,
				asideOculto ? styles.colapsado : '',
			)}
		>
			<h3 className={styles.aside__titulo}>Links Importantes</h3>
			<div className={styles.flexbox}>
				<div className={styles.aside__links}>
					<ul>
						{links.map(link => (
							<AsideListItem
								key={link.id}
								text={link.text}
								icon={link.icon}
								path={link.path}
							/>
						))}
					</ul>
				</div>

				<div className={styles.configs}>
					<ul>
						<Link to='/configuracoes'>
							<li>
								<FontAwesomeIcon icon={faGear} />
								<span>Configurações</span>
							</li>
						</Link>

						<Link to='/sobre'>
							<li>
								<FontAwesomeIcon icon={faCircleInfo} />
								<span>Sobre</span>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</aside>
	);
}
