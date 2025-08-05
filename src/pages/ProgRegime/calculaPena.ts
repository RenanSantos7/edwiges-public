type Pena = {
	anos: number
	meses: number
	dias: number
}

const anoAtual = new Date().getFullYear()

function ehBissexto(ano: number): boolean {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0
}

function calcularAnosEmDias(numeroDeAnos: number, anoInicial: number = anoAtual): number {
	let dias: number = numeroDeAnos * 365

	let anosBissextos: number = 0
	for (let ano = anoInicial; ano < anoInicial + numeroDeAnos; ano++) {
		if (ehBissexto(ano)) {
			anosBissextos++
		}
	}

	dias += anosBissextos

	return dias
}

function calcularMesesEmDias(numMeses: number, mesInicial: number, anoInicial: number) {
    const meses = [
        {mes: 'janeiro', dias: 31},
        {mes: 'fevereiro', dias: 28},
        {mes: 'março', dias: 31},
        {mes: 'abril', dias: 30},
        {mes: 'maio', dias: 31},
        {mes: 'junho', dias: 30},
        {mes: 'julho', dias: 31},
        {mes: 'agosto', dias: 31},
        {mes: 'setembro', dias: 30},
        {mes: 'outubro', dias: 31},
        {mes: 'novembro', dias: 30},
        {mes: 'dezembro', dias: 31}
    ]

    if (mesInicial >= 0 && mesInicial <= 11) {
        let acumulador = 0
        let ano = anoInicial
        for (let i = mesInicial; i < numMeses; i++) {
            if (i > 11) {
                i = 0
                ano++
            }

            if (i === 1 && ehBissexto(ano)) {
                acumulador += meses[i].dias + 1
            }

            acumulador += meses[i].dias

            return acumulador
        }
    } else {
        console.error('valor inválido para a variável "mesInicial"')
        return null
    }

}

export function calcularPenaEmDias(
    dataInicial: Date,
    anos: number,
    meses: number,
    dias: number
) {
    //              ms     s    min  h
    const diaEmMs = 1000 * 60 * 60 * 24
    const comecoMaisDias = Number(dataInicial) + (dias * diaEmMs)
    const comecoData = new Date(comecoMaisDias)
    const mesInicial = comecoData.getMonth()
    const anoInicial = comecoData.getFullYear()

    const mesesEmDias = calcularMesesEmDias(meses, mesInicial, anoInicial)
    const anosEmDias = calcularAnosEmDias(anos, anoInicial)

    return dias + mesesEmDias + anosEmDias
}