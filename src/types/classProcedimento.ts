type IFase = 'Postulatória' | 'Saneamento' | 'Aguardando Audiência' | 'Concluso para julgamento' | 'Concluso para liminar' | 'Sentenciado' | 'Acordo homologado' | 'Prazo para recurso' | 'Recurso' | 'Em 2ª instância' | 'Cumprimento de sentença' | 'Transitado em julgado' | 'Arquivado' 

export class Procedimento {
	private static publicIds: string[]
	private _id: string
	public readonly procedimento: string
	public cliente: string
	public esfera: string
	private _numCNJ?: string
	public juizo?: string
	public ajuizamento?: string
	public fase?: IFase
	public natureza?: string
	public ultMov?: string
	public DUM?: string
	public polo?: 'Ativo' | 'Passivo'
	public observacao: string

	gerarPublicId() {
		const caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
		let id = []
		for (let i = 1; i < 7; i++) {
			const index = Math.floor(Math.random() * caracteres.length)
			id.push(caracteres[index])
		}
		return id.join('')
	}

	constructor(
		cliente: string,
		esfera: string,
		numCNJ?: string,
		juizo?: string,
		ajuizamento?: string,
		fase?: IFase,
		natureza?: string,
		ultMov?: string,
		DUM?: string,
		polo?: 'Ativo' | 'Passivo',
		observacao?: string
	) {
		const id = this.gerarPublicId()
		const publicId = Procedimento.publicIds.includes(id) ? this.gerarPublicId() : id

		this._id = publicId
		this.procedimento = `PROC${String(this._id).padStart(5, '0')}`
		this.cliente = cliente
		this.esfera = esfera
		this._numCNJ = numCNJ
		this.juizo = juizo
		this.ajuizamento = ajuizamento
		this.fase = fase
		this.natureza = natureza
		this.ultMov = ultMov
		this.DUM = DUM
		this.polo = polo
		this.observacao = observacao
	}

	get id() {
		return this._id
	}

	get numCNJ() {
		return this._numCNJ
	}
	
	set numCNJ(numProc: string) {
		if (!this._numCNJ.length) {
			this._numCNJ = numProc
		} else {
			alert('O número CNJ do processo não pode ser alterado. Para mais informações, contate do suporte.')
		}
	}
}