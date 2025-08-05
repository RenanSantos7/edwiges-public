import * as Yup from 'yup';

export const formTesteSchema = Yup.object().shape({
	nome: Yup.string().required('Nome obrigatório').min(2, 'Nome muito curto'),
	sobrenome: Yup.string()
		.required('Sobrenome obrigatório')
		.min(3, 'Sobrenome muito curto'),
	email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
	cargo: Yup.string()
		.min(3, 'Cargo muito curto')
});

