import Titulo2 from '../../components/Titulos/Titulo2.tsx';
import styles from './styles.module.css';

export default function Sobre() {
	return (
		<>
			<Titulo2>Sobre</Titulo2>
			<div className={styles.container}>
				<p className={styles.texto}>
					Projeto Edwiges é um projeto de sistema de gestão para
					escritórios de advocacia que tem como foco a experiência do
					usuário, ou seja, advogados e estagiários de advocacia.
				</p>

				<p className={styles.texto}>@RenanSantos7, 2024.</p>
			</div>
		</>
	);
}
