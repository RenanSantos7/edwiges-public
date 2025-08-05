/**
 * Pega um valor do tipo número e converte em moeda
 * @param num 
 * @returns 
 */
export function numParaMoeda(num: number): string {
    return num.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

/**
 * Pega uma string de moeda em real brasileiro e converte para um tipo número utilizável no JavaScript
 * @param {string} moeda
 * @returns {number}
 */
export function moedaParaNum(moeda:string):number {
    const numStr = moeda.replace('R$ ', '')
        .replaceAll('.', '')
        .trim()
        .replace(',','.')
    
    return Number(numStr)
}