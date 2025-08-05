import * as Yup from 'yup';

export const cadatroClienteSchema = Yup.object().shape({
	nome: Yup.string()
		.min(2, 'Nome muito curto')
		.required('Nome é obrigatório'),
	cpf: Yup.string()
		.matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
		.required('CPF é obrigatório'),
    cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
    telefone: Yup.string()
        .matches(/^\d{2}9?\d{8}$/, 'Telefone inválido'),
	enderecoNum: Yup.number(),
	email: Yup.string().email(),
	nacionalidade: Yup.string(),
	estadoCivil: Yup.string(),
	profissao: Yup.string(),
	rg: Yup.string(),
	endereco: Yup.string(),
	origem: Yup.string(),
	cidade: Yup.string(),
	financeiro: Yup.string(),
	observacao: Yup.string(),
});
