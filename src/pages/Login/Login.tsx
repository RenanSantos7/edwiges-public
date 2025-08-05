import styles from './Login.module.css';
import Botao from '../../components/Elementos/Botao/Botao.tsx';
import logo from '@/assets/Logo.png';
import { Link } from 'react-router-dom';
import { Titulo3 } from '../../components/Titulos/index.ts';
import { Formik } from 'formik';
import { CampoTexto } from '../../components/campos-form/index.tsx';
import Form from '../../components/styles/Form.tsx';

interface Formulario {
	usuario: string;
	senha: string;
}

export default function Login() {
	function lidaComLogin(data: Formulario) {
		console.log(data);
	}

	return (
		<div className={styles.login__container}>
			<img className={styles.logo} src={logo} alt='' />
			<div className={styles.login__card}>
				<Titulo3 style={{ marginTop: 0 }}>Faça seu login</Titulo3>

				<Formik
					initialValues={{
						usuario: '',
						senha: '',
					}}
					onSubmit={lidaComLogin}
				>
					{formik => (
						<Form onSubmit={formik.handleSubmit}>
							<CampoTexto
								name='usuario'
								label='Usuário'
								placeholder='Seu CPF ou seu e-mail'
								obrigatorio
							/>

							<CampoTexto
								name='senha'
								placeholder='Sua senha'
								type='password'
								obrigatorio
							/>

							<Botao
								style={{ alignSelf: 'center' }}
								ativo={true}
								type='submit'
							>Entrar</Botao>
						</Form>
					)}
				</Formik>
			</div>
			<span className={styles.registrese}>
				Não tem conta ainda? <Link to='/registre-se'>Registre-se.</Link>
			</span>
		</div>
	);
}
