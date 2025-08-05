import { Formik } from 'formik';
import { useState } from 'react';

import styles from './CadastrarProc.module.css';
import Botao from '../../components/Elementos/Botao/Botao.tsx';
import {
	BtnContainer,
	FlexLine,
	Form,
} from '../../components/styles/index.tsx';
import {
	CampoData,
	CampoTexto,
	Select,
} from '../../components/campos-form/index.tsx';
import { IFase, IPolo } from '../../types/types.ts';
import { postData } from '../../utils/requisicoes/index.ts';
import { Titulo2 } from '../../components/Titulos/index.ts';
import ModalPronto from '../../components/ModalFormPronto/ModalPronto.tsx';
import { useDataContext } from '../../context/DadosContext.tsx';

interface IValores {
	cliente: string;
	numCNJ: string;
	ajuizamento: string;
	fase: IFase;
	natureza: string;
	ultMov: string;
	dum: string;
	polo: IPolo;
	esfera: string;
	juizo: string;
	observacao: string;
}

export default function CadastrarProc() {
	const { procedimentos, setProcedimentos, setLoading } = useDataContext();
	const [modalPronto, setModalPronto] = useState(false);

	function cadastrarProcedimento(valores: IValores) {
		const ids = procedimentos.map(cliente => cliente.id);
		const ultimoId = Math.max(...ids);
		const novoProc = {
			id: ultimoId + 1,
			procedimento: `PROC${String(ultimoId + 1).padStart(5, '0')}`,
			...valores,
		};
		setLoading(true);
		try {
			postData('procedimentos', novoProc);
			setProcedimentos(prev => [...prev, novoProc]);
		} finally {
			setLoading(false);
			setModalPronto(true);
		}
	}

	return (
		<>
			<Titulo2>Cadastrar Procedimento</Titulo2>

			<Formik
				initialValues={{
					cliente: '',
					numCNJ: '',
					ajuizamento: '',
					fase: '',
					natureza: '',
					ultMov: '',
					dum: '',
					polo: '',
					esfera: '',
					juizo: '',
					observacao: '',
				}}
				onSubmit={cadastrarProcedimento}
			>
				{formik => (
					<Form onSubmit={formik.handleSubmit}>
						<FlexLine>
							<CampoTexto name='cliente' obrigatorio />

							<Select
								name='polo'
								opcoes={['Ativo', 'Passivo']}
								obrigatorio
							/>
						</FlexLine>

						<FlexLine>
							<CampoTexto label='número CNJ' name='numCNJ' />

							<CampoTexto name='juizo' label='juízo' />

							<CampoTexto name='natureza' obrigatorio />

							<Select
								name='esfera'
								opcoes={['Administrativa', 'Judicial']}
								obrigatorio
							/>
						</FlexLine>

						<Select
							name='fase'
							opcoes={[
								'Postulatória',
								'Saneamento',
								'Aguardando Audiência',
								'Concluso para julgamento',
								'Concluso para liminar',
								'Sentenciado',
								'Acordo homologado',
								'Prazo para recurso',
								'Recurso',
								'Em 2ª instância',
								'Cumprimento de sentença',
								'Transitado em julgado',
								'Arquivado',
							]}
						/>

						<FlexLine>
							<CampoData
								label='Data de ajuizamento'
								name='ajuizamento'
							/>

							<CampoData
								label='Data da Última movimentação'
								name='dum'
							/>

							<CampoTexto
								label='Última Movimentação'
								name='ultMov'
							/>
						</FlexLine>

						<CampoTexto
							type='textarea'
							label='observação'
							name='observacao'
						/>

						<BtnContainer>
							<Botao type='reset' variante='delineado'>
								Limpar
							</Botao>
							<Botao type='submit'>Cadastrar</Botao>
						</BtnContainer>
					</Form>
				)}
			</Formik>

			<ModalPronto
				ativo={modalPronto}
				setAtivo={setModalPronto}
				mensagem='O procedimento foi cadastrado com sucesso.'
				path='/procedimentos'
			/>
		</>
	);
}
