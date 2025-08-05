export default function verificaCPF(valor:string) {
    const cpf = valor.replace(/\.|-/g, '')
    const cpfQuebrado = cpf.split('')

    return verificaDV() && verificaNumerosRepetidos()

    function verificaDV() {
        let primeiroDigitoVdd = verificaCadaDV(cpf, 1)

        let segundoDigitoVdd = verificaCadaDV(cpf, 0)

        if (primeiroDigitoVdd && segundoDigitoVdd) {
            return true
        }
        return false
    }

    function verificaCadaDV(cpf:string, peso:number) {
        let soma = 0

        for (let i = 0; i < 10 - peso; i++) {
            soma += Number(cpfQuebrado[i]) * (i + peso)
        }

        let resto = soma % 11

        if (resto === 10) {
            resto = 0
        }

        return resto === Number(cpfQuebrado[10 - peso])
    }

    function verificaNumerosRepetidos() {
        const primeiroDigito = cpfQuebrado[0]
        const outrosDigitos = cpfQuebrado.slice(1)

        const digitosRepetidos = outrosDigitos.every(item => {return item === primeiroDigito})

        return digitosRepetidos
    }
}