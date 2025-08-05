import { Formik } from 'formik';
import { useState } from 'react';

import styles from './CadastroCliente.module.css';

import Botao from '../../components/Elementos/Botao/Botao.tsx';
import { BtnContainer, FlexLine, Form } from '../../components/styles/index.tsx';
import { CampoTexto, Select } from '../../components/campos-form/index.tsx';
import { Titulo2 } from '../../components/Titulos/index.ts';
import { cadatroClienteSchema } from '../../schemas/cadastroCliente.schema.tsx';
import { postData } from '../../utils/requisicoes/index.ts';
import { useDataContext } from '../../context/DadosContext.tsx';
import ModalPronto from '../../components/ModalFormPronto/ModalPronto.tsx';

interface IValores {
	nome: string;
	nacionalidade: string;
	estadoCivil: string;
	profissao: string;
	rg: string;
	cpf: string;
	cep: string;
	endereco: string;
	enderecoNum: string;
	telefone: string;
	origem: string;
	cidade: string;
	financeiro: string;
	email: string;
	observacao: string;
}

export default function CadastroCliente() {
	const { clientes, setClientes, setLoading } = useDataContext();
	const [modalPronto, setModalPronto] = useState(false);

	function cadastrarCliente(valores: IValores) {
		const ids = clientes.map(cliente => Number(cliente.id));
		const ultimoId = Math.max(...ids);
		const { enderecoNum, ...valoresFiltrados } = valores;
		const novoCliente = {
			id: String(ultimoId + 1),
			...valoresFiltrados,
			endereco: `${valores.endereco}, ${valores.enderecoNum}`,
		};
		setLoading(true);
		try {
			postData('clientes', novoCliente);
		} finally {
			setLoading(false);
			setModalPronto(true);
		}
	}

	return (
		<>
			<Titulo2>Cadastrar Cliente</Titulo2>
			<Formik
				initialValues={{
					nome: '',
					nacionalidade: '',
					estadoCivil: '',
					profissao: '',
					rg: '',
					cpf: '',
					cep: '',
					endereco: '',
					enderecoNum: '',
					telefone: '',
					origem: '',
					cidade: '',
					financeiro: '',
					email: '',
					observacao: '',
				}}
				onSubmit={cadastrarCliente}
				validationSchema={cadatroClienteSchema}
			>
				{formik => (
					<Form onSubmit={formik.handleSubmit}>
						<CampoTexto name='nome' obrigatorio />

						<FlexLine>
							<CampoTexto name='telefone' />

							<CampoTexto
								type='email'
								label='e-mail'
								name='email'
							/>

							<CampoTexto name='rg' />

							<CampoTexto name='cpf' obrigatorio />
						</FlexLine>

						<FlexLine>
							<CampoTexto name='cep' tamanho='menor' />

							<CampoTexto
								label='Cidade/UF'
								name='cidade'
								tamanho='menor'
							/>

							<CampoTexto
								label='endereço'
								name='endereco'
								tamanho='maior'
							/>

							<CampoTexto
								label='número'
								name='enderecoNum'
								tamanho='menor'
							/>
						</FlexLine>

						<FlexLine>
							<CampoTexto name='nacionalidade' />

							<Select
								name='estadoCivil'
								label='estado civil'
								opcoes={[
									'casado(a)',
									'solteiro(a)',
									'convivente',
								]}
							/>

							<CampoTexto name='profissao' label='profissão' />
						</FlexLine>

						<FlexLine>
							<Select
								name='origem'
								opcoes={[
									'Amigos',
									'Clientes',
									'Família',
									'Agente',
									'Outros',
								]}
							/>

							<Select
								name='financeiro'
								opcoes={[
									'A receber',
									'Em pagamento',
									'Em débito',
									'Quitado',
									'Pendente',
								]}
							/>
						</FlexLine>

						<CampoTexto
							name='observacoes'
							label='observações'
							type='textarea'
						/>

						<BtnContainer>
							<Botao type='reset' variante='delineado'>
								Limpar
							</Botao>
							<Botao type='submit'>Pronto</Botao>
						</BtnContainer>
					</Form>
				)}
			</Formik>

			<ModalPronto
				ativo={modalPronto}
				setAtivo={setModalPronto}
				mensagem='O cliente foi cadastrado com sucesso.'
				path='/clientes'
			/>
		</>
	);
}
