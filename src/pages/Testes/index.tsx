import styles from './Testes.module.css';
import Botao from '../../components/Elementos/Botao/Botao.tsx';
import Select from '../../components/campos-form/Select/Select.tsx';
import Switcher from '../../components/campos-form/Switcher/Switcher.tsx';
import Modal from '../../components/Elementos/Modal/Modal.tsx';
import CampoNumero from '../../components/campos-form/CampoNumero/CampoNumero.tsx';
import CheckBox from '../../components/campos-form/CheckBox/CheckBox.tsx';
import RadioButton from '../../components/campos-form/Radio/Radio.tsx';
import Notificacao from '../../components/Elementos/Notificacao/Notificacao.tsx';
import CampoMoeda from '../../components/campos-form/CampoMoeda/CampoMoeda.tsx';
import CampoData from '../../components/campos-form/CampoData/CampoData.tsx';
import CampoHora from '../../components/campos-form/CampoData/CampoHora.tsx';
import Cep from './CEP/cep.tsx';
import { SetStateAction, useEffect, useState } from 'react';
import Divisor from '../../components/Elementos/Divisor/Divisor.tsx';
import { Titulo2, Titulo3 } from '../../components/Titulos/index.ts';
import { Formik } from 'formik';
import { Form, FlexLine } from '../../components/styles/index.tsx';
import { useDataContext } from '../../context/DadosContext.tsx';

interface IContexto {
	setLoading: React.Dispatch<SetStateAction<boolean>>;
}

export default function Testes() {
	const { setLoading }: IContexto = useDataContext();

	const [num, setNum] = useState(0);
	const [modal, setModal] = useState(false);
	const [select, setSelect] = useState('');
	const [notifAberta, setNotifAberta] = useState(false);
	const [valorMoeda, setValorMoeda] = useState(0);
	const [data, setdata] = useState('');
	const [hora, sethora] = useState('');

	function fazQqcoisa(values: any) {
		console.log(values);
	}

	function abrirModal() {
		setModal(true);
	}

	return (
		<main className={styles.testes}>
			<Titulo2>Testes</Titulo2>

			<Formik
				initialValues={{
					escolha1: false,
					escolha2: false,
					preco: 1,
					opcoes: '',
					numero: 0,
					data: '',
					hora: '',
				}}
				onSubmit={fazQqcoisa}
			>
				{formik => (
					<Form>
						<FlexLine>
							<CheckBox
								name='escolha1'
								obrigatorio
								onChange={fazQqcoisa}
							/>
							<CheckBox
								name='escolha2'
								obrigatorio
								posicaoTexto='direita'
								onChange={fazQqcoisa}
							/>
						</FlexLine>

						<div>
							<CampoMoeda label='Preço: ' name='preco' />
						</div>

						<Titulo3>Botões</Titulo3>
						<FlexLine>
							<Botao onclick={abrirModal}>Abrir modal</Botao>
							<Botao onclick={fazQqcoisa} ativo={false}>
								Botao inativo
							</Botao>
							<Botao
								variante='delineado'
								onclick={() => setLoading(true)}
							>
								Carregamento
							</Botao>
							<Botao
								onclick={fazQqcoisa}
								variante='delineado'
								ativo={false}
							>
								Botao com borda
							</Botao>
							<Botao
								variante='texto'
								onclick={() => setNotifAberta(true)}
							>
								Notificação
							</Botao>
							<Botao
								onclick={fazQqcoisa}
								variante='texto'
								ativo={false}
							>
								Botao só texto
							</Botao>
						</FlexLine>

						<Select
							name='opcoes'
							label='Opções'
							opcoes={[
								'Renan',
								'Elaine',
								'Teófilo',
								'Conceição',
								'Analice',
							]}
						/>

						<FlexLine style={{ width: '100%' }}>
							<CampoNumero
								name='numero'
								label='Número'
								min={0}
								max={30}
							/>

							<Divisor variante='vertical' />

							<RadioButton
								titulo='Qual time você torce?'
								opcoes={[
									'Flamengo',
									'Vasco',
									'Fluminese',
									'Madureira',
								]}
							/>

							<CampoData name='data' />

							<CampoHora name='hora' />
						</FlexLine>
					</Form>
				)}
			</Formik>

			<Divisor variante='horizontal' />

			<Cep />

			{/* 
                <Switcher altura={1.2} name='switcher' />
            */}

			<div className='off'>
				<Notificacao
					aberta={notifAberta}
					setAberta={setNotifAberta}
					conteudo='Isso é uma notificacao'
				/>

				<Modal ativo={modal} setAtivo={setModal}>
					<h2>Olá mundo</h2>
					<p style={{ lineHeight: 1.2, marginBottom: '2rem' }}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Maecenas porttitor congue massa. Fusce posuere,
						magna sed pulvinar ultricies, purus lectus malesuada
						libero, sit amet commodo magna eros quis urna. Nunc
						viverra imperdiet enim. Fusce est. Vivamus a tellus.
						Pellentesque habitant morbi tristique senectus et netus
						et malesuada fames ac turpis egestas.
					</p>

					<div className={styles.acoes}>
						<Botao ativo variante='delineado' onclick={fazQqcoisa}>
							Não
						</Botao>
						<Botao onclick={() => setModal(false)}>Sim</Botao>
					</div>
				</Modal>
			</div>
		</main>
	);
}
