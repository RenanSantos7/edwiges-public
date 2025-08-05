const mensagensErro = {
	email: {
		valueMissing: 'O campo de e-mail não pode estar vazio.',
		typeMismatch: 'Por favor, preencha um email válido.',
		tooShort: 'Por favor, preencha um email válido.',
	},

	cpf: {
		valueMissing: 'O campo de CPF não pode estar vazio.',
		patternMismatch: 'Por favor, preencha um CPF válido.',
		customError: 'O CPF digitado não existe.',
		tooShort: 'O campo de CPF não tem caractéres suficientes.',
	},

	senha: {
		tooShort: 'A senha precisa ter pelo menos 16 caractéres',
		valueMissing: 'O campo de senha não pode estar vazio.',
	},
    
	termos: {
		valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
	},
}

export default mensagensErro