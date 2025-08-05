/*
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './CadastrarProc.module.css'
import Botao from '../../components/Elementos/Botao/Botao.tsx'
import CampoData from '../../components/campos-form/CampoData/CampoData.tsx'
import CampoTexto from '../../components/campos-form/CampoTexto/CampoTexto.tsx'
import { IFase, IPolo } from '../../types/types.ts'
import { Procedimento } from '../../types/classProcedimento.ts'
import { Titulo2 } from '../../components/Titulos/index.ts'
import Select from '../../components/campos-form/Select/Select.tsx'

export default function CadastrarProc() {

    const { procedimentos, setProcedimentos, setLoading } = useContext(DadosContext)
    const navigate = useNavigate()

    const [cliente, setCliente] = useState('')
    const [numCNJ, setNumCNJ] = useState('')
    const [ajuizamento, setAjuizamento] = useState('')
    const [fase, setFase] = useState<IFase>('')
    const [natureza, setNatureza] = useState('')
    const [ultMov, setUltMov] = useState('')
    const [dum, setDum] = useState('')
    const [polo, setPolo] = useState<IPolo>('')
    const [esfera, setEsfera] = useState('')
    const [juizo, setJuizo] = useState('')
    const [observacao, setObservacao] = useState('')

    async function cadastrarProcedimento() {
        const novoProc = new Procedimento(cliente, esfera, numCNJ, juizo, ajuizamento, fase, natureza, ultMov, dum, polo, observacao)

        try {
            setLoading(true)
            setProcedimentos(prev => (
                [...prev, novoProc])
            )
        } finally {
            setLoading(false)
            navigate('/procedimentos')
        }
    }

    return (
        <>
            <Titulo2>Cadastrar Procedimento</Titulo2>

            <form onSubmit={cadastrarProcedimento} className={styles.form}>
                <fieldset className={styles.form__grupo}>
                    <CampoTexto
                        label='cliente'
                        valor={cliente}
                        setValor={setCliente}
                        obrigatorio
                    />
    
                    <Select
                        label='Polo'
                        valor={polo}
                        setValor={setPolo}
                        opcoes={['Ativo', 'Passivo']}
                        obrigatorio
                    />
                </fieldset>

                <fieldset className={styles.form__grupo}>
                    <CampoTexto
                        label='número CNJ'
                        valor={numCNJ}
                        setValor={setNumCNJ}
                    />
                    
                    <CampoTexto
                        label='juízo'
                        valor={juizo}
                        setValor={setJuizo}
                    />
    
                    <CampoTexto
                        label='natureza'
                        valor={natureza}
                        setValor={setNatureza}
                        obrigatorio
                    />
                    
                    <Select
                        label='Esfera'
                        valor={esfera}
                        setValor={setEsfera}
                        opcoes={['Administrativa', 'Judicial']}
                        obrigatorio
                    />
                </fieldset>

                <Select
                    label='Fase'
                    opcoes={['Postulatória', 'Saneamento', 'Aguardando Audiência', 'Concluso para julgamento', 'Concluso para liminar', 'Sentenciado', 'Acordo homologado', 'Prazo para recurso', 'Recurso', 'Em 2ª instância', 'Cumprimento de sentença', 'Transitado em julgado', 'Arquivado']}
                    valor={fase}
                    setValor={setFase}
                />
    
                <fieldset className={styles.form__grupo}>
                    <CampoData
                        label='Data de ajuizamento'
                        valor={ajuizamento}
                        setValor={setAjuizamento}
                    />
                
                    <CampoData
                        label='Data da Última movimentação'
                        valor={dum}
                        setValor={setDum}
                    />

                    <CampoTexto
                        label='Última Movimentação'
                        valor={ultMov}
                        setValor={setUltMov}
                    />
                </fieldset>

                <CampoTexto
                    type='textarea'
                    label='observação'
                    valor={observacao}
                    setValor={setObservacao}
                />

                <div className={styles.containerBtn }>
                    <Botao type='submit'>Cadastrar</Botao>
                </div>
                
            </form>
        </>
    )
}
*/