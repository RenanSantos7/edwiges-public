export class Honorario {
    private static nextId: number = 0
    private _id: number
    private _clienteId: number
    private _procId: number
    public valorTotal: number
    public parcelas: number
    public valorParcela: number
    private _falta: number
    private _quitado: boolean
    public observacao?: string
    
    constructor(
        valorTotal: number,
        parcelas: number = 1,
        valorParcela: number = valorTotal,
        clienteId: number,
        procId?: number,
        observacao?: string
    ) {
        this._id = Honorario.nextId++
        this._clienteId = clienteId
        this._procId = procId
        this.valorTotal = valorTotal
        this.parcelas = parcelas
        this.valorParcela = valorParcela
        this._falta = valorTotal
        this._quitado = false
        this.observacao = observacao
    }

    get id() {
        return this._id
    }
    
    get clienteId() {
        return this._clienteId
    }
    
    get procId() {
        return this._procId
    }

    get falta() {
        return this._falta
    }

    get quitado() {
        return this._quitado
    }

    pago(valor: number) {
        this._falta -= valor

        if (this._falta <= 0) this._quitado = true
    }

}