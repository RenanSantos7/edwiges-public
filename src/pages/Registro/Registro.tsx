import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { SetStateAction, useEffect, useMemo } from 'react';

import { IUsuario } from '../../types/types.ts';
import { Titulo3 } from '../../components/Titulos/index.ts';
import { CampoTexto } from '../../components/campos-form/index.tsx';
import { registroSchema } from '../../schemas/registro.schema.tsx';
import { useDataContext } from '../../context/DadosContext.tsx';
import Botao from '../../components/Elementos/Botao/Botao.tsx';
import Form from '../../components/styles/Form.tsx';
import Select from '../../components/campos-form/Select/Select.tsx';
import logo from '@/assets/Logo.png';
import styles from './Registro.module.css';

interface IContexto {
	usuarios: IUsuario[];
	setUsuarios: React.Dispatch<SetStateAction<IUsuario[]>>;
}

interface Campos {
	email: string;
	senha: string;
	nome: string;
	sobrenome: string;
	genero: '' | 'Feminino' | 'Masculino' | 'Não binário' | 'Prefiro não informar';
	tratamento: '' | 'Drª.' | 'Srª' | 'Dr.' | 'Sr';
	cpf: string;
	cargo: string;
}

export default function Registro() {
	const { usuarios, setUsuarios }: IContexto = useDataContext();

	function aoSubmeter(data: Campos) {
		const ids = usuarios.map(usuario => usuario.id);
		const maiorId = Math.max(...ids);
		const novoUsuario = { id: maiorId + 1, ...data };
		setUsuarios(prev => [...prev, novoUsuario]);
	}

	return (
		<div className={styles.registro__container}>
			<img className={styles.logo} src={logo} alt='' />
			<div className={styles.registro__card}>
				<Titulo3 style={{ marginTop: 0 }}>Registre-se</Titulo3>

				<Formik
					initialValues={{
						email: '',
						senha: '',
						nome: '',
						sobrenome: '',
						genero: '',
						tratamento: '',
						cpf: '',
						cargo: '',
					}}
                    onSubmit={aoSubmeter}
                    validationSchema={registroSchema}
				>
					{({ handleSubmit, values }) => {
						const tratamentos = useMemo(() => {
							if (values.genero === '') {
								return [''];
							}
							return values.genero === 'Feminino'
								? ['', 'Drª.', 'Srª']
								: ['', 'Dr.', 'Sr'];
						}, [values]);

						return (
							<Form onSubmit={handleSubmit}>
								<CampoTexto
									name='nome'
									placeholder='Digite seu pré-nome'
								/>

								<CampoTexto
									name='sobrenome'
									placeholder='Digite seu sobrenome'
								/>
								<CampoTexto
									name='nome'
									placeholder='Digite seu pré-nome'
								/>
								<CampoTexto
									name='nome'
									placeholder='Digite seu pré-nome'
								/>

								<Select
									name='genero'
									label='Gênero'
									placeholder='Escolha o gênero pelo qual quer se tratado'
									opcoes={[
										'Feminino',
										'Masculino',
										'Não binário',
										'Prefiro não informar',
									]}
								/>

								<Select
									name='tratamento'
									opcoes={tratamentos}
								/>

								<CampoTexto
									name='cpf'
									placeholder='Digite seu CPF'
								/>

								<CampoTexto
									type='email'
									name='email'
									label='E-mail'
									placeholder='Digite seu email'
								/>

								<CampoTexto
									name='senha'
									type='password'
									placeholder='Sua senha deve conter pelo menos 16 caracteres'
								/>

								<CampoTexto
									name='cargo'
									placeholder='Seu cargo'
								/>

								<Botao
									style={{ alignSelf: 'center' }}
									type='submit'
								>
									Registrar
								</Botao>
							</Form>
						);
					}}
				</Formik>
			</div>

			<span className={styles.entre}>
				Já tem conta? <Link to='/login'>Entre</Link>
			</span>
		</div>
	);
}
