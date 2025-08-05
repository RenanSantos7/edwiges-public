import { Tribunal } from "./tribunais.ts";

export interface ICliente {
	id: string;
	nome: string;
	nacionalidade: string;
	estadoCivil: string;
	profissao: string;
	rg: string;
	cpf: string;
	endereco: string;
	telefone: string;
	origem: 'Amigos' | 'Clientes' | 'Família' | 'Agente' | 'Outros';
	cidade: string;
	financeiro:
		| 'A receber'
		| 'Em pagamento'
		| 'Em débito'
		| 'Quitado'
		| 'Pendente';
	email: string;
	observacao: string;
}

// % Procedimento

export type IFase =
	| ''
	| 'Postulatória'
	| 'Saneamento'
	| 'Aguardando Audiência'
	| 'Concluso para julgamento'
	| 'Concluso para liminar'
	| 'Sentenciado'
	| 'Acordo homologado'
	| 'Prazo para recurso'
	| 'Recurso'
	| 'Em 2ª instância'
	| 'Cumprimento de sentença'
	| 'Transitado em julgado'
	| 'Arquivado';

export type IPolo = '' | 'Ativo' | 'Passivo';

export interface IProcedimento {
	id: number;
	procedimento: string;
	cliente: string;
	numCNJ?: string;
	juizo?: string;
	tribunal?: Tribunal;
	ajuizamento?: string;
	fase?: IFase;
	natureza?: string;
	ultMov?: string;
	DUM?: string;
	polo?: IPolo;
	esfera: string;
	observacao?: string;
}

export interface IUsuario {
	id: number;
	email: string;
	senha: string;
	nome: string;
	sobrenome: string;
	genero:
		| ''
		| 'Feminino'
		| 'Masculino'
		| 'Não binário'
		| 'Prefiro não informar';
	tratamento: '' | 'Drª.' | 'Srª' | 'Dr.' | 'Sr';
	cpf: string;
	cargo: string;
}

export interface ITag {
	id: number;
	titulo: string;
}

export interface ITarefa {
	id: number;
	titulo: string;
	completa: boolean;
	tags?: ITag[];
}

export interface IHonorarios {
	id: number;
	clienteId: number;
	procId: number;
	valorTotal: number;
	parcelas: number;
	valorParcela: number;
	falta: number;
	quitado: boolean;
	observacao?: string;
}
