import styles from './ModaPronto.module.css';
import Botao from '../Elementos/Botao/Botao.tsx';
import Modal from '../Elementos/Modal/Modal.tsx';
import { SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface ModalProntoProps {
	ativo: boolean;
	setAtivo: React.Dispatch<SetStateAction<boolean>>;
	mensagem: string;
	path: string
}

export default function ModalPronto(props: ModalProntoProps) {
	const navigarPara = useNavigate()

	return (
		<Modal ativo={props.ativo} setAtivo={props.setAtivo}>
			<h3 className={styles.modalTitulo}>Pronto</h3>
			<p className={styles.modalTexto}>{props.mensagem}</p>
			<div className={styles.divBotoes}>
				<Botao onclick={() => {
					props.setAtivo(false)
					navigarPara(props.path)
				}}>Ok</Botao>
			</div>
		</Modal>
	);
}
