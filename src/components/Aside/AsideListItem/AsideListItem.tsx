import styles from './AsideListItem.module.css'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface AsideListItemProps {
    icon: IconDefinition,
    path: string,
    text: string
}

export default function AsideListItem({icon, path, text}: AsideListItemProps) {
	return (
		<li className={styles.link}>
			<FontAwesomeIcon icon={icon} />
			<a target='_blank' rel='noopener noreferrer' href={path}>
				{text}
			</a>
		</li>
	)
}
