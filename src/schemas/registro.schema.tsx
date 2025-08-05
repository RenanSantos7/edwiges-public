import * as Yup from 'yup';

export const registroSchema = Yup.object().shape({
    nome: Yup.string()
        .min(2, 'Nome muito curto')
        .required('Nome obrigatório'),
	sobrenome: Yup.string()
		.min(3, 'Sobrenome muito curto')
		.required('Sobrenome obrigatório'),
	email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
	senha: Yup.string()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-_¬;\.])$/,
			'Sua senha deve ter letras minúsculas e maiúsculas, números e um caractere especial',
		)
		.min(8, 'Sua senha deve ter pelo menos 8 caracteres')
		.max(16, 'Sua senha pode ter no máximo 16 caracteres')
		.required('Você não cadastrou sua senha'),
    cargo: Yup.string()
        .min(3, 'Cargo muito curto'),
	cpf: Yup.string()
		.matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido')
		.required('Você precisa informar seu CPF'),
	genero: Yup.string(),
	tratamento: Yup.string(),
});
