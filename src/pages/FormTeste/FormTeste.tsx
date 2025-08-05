import { Formik, FormikHelpers } from 'formik';
import { styled } from 'styled-components';

import Titulo2 from '../../components/Titulos/Titulo2.tsx';
import { CampoTexto } from '../../components/campos-form/index.tsx';
import Botao from '../../components/Elementos/Botao/Botao.tsx';
import { formTesteSchema } from '../../schemas/formTeste.schema.tsx';

interface ICampos {
	nome: string;
	sobrenome: string;
	email: string;
	cargo: string;
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export default function FormTeste() {
	return (
		<>
			<Titulo2>Formulario de teste</Titulo2>

			<Formik
				initialValues={{
					nome: '',
					sobrenome: '',
					email: '',
					cargo: '',
				}}
				onSubmit={(
					values: ICampos,
					{ setSubmitting }: FormikHelpers<ICampos>,
				) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 500);
                }}
                validationSchema={formTesteSchema}
			>
				{({
					values,
					errors,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<Form onSubmit={handleSubmit}>
						<CampoTexto
							label='nome'
							aoMudar={handleChange}
							aoDeixar={handleBlur}
							valor={values.nome}
							msgErro={errors.nome}
						/>

						<CampoTexto
							label='sobrenome'
							aoMudar={handleChange}
							aoDeixar={handleBlur}
							valor={values.sobrenome}
							msgErro={errors.sobrenome}
						/>

						<CampoTexto
							label='E-mail'
							name='email'
							aoMudar={handleChange}
							aoDeixar={handleBlur}
							valor={values.email}
							msgErro={errors.email}
							type='email'
						/>

						<CampoTexto
							label='cargo'
							aoMudar={handleChange}
							aoDeixar={handleBlur}
							valor={values.cargo}
							msgErro={errors.cargo}
						/>

						<Botao type='submit'>Enviar</Botao>
					</Form>
				)}
			</Formik>
		</>
	);
}
