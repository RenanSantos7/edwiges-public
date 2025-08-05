import styles from './FormHonorarios.module.css';
import CampoTexto from '../../../../components/campos-form/CampoTexto/CampoTexto.tsx';
import { FormEvent, useEffect, useState } from 'react';
import { Honorario } from '../../../../types/classHonorarios.ts';
import CampoNumero from '../../../../components/campos-form/CampoNumero/CampoNumero.tsx';
import FlexLine from '../../../../components/styles/FlexLine.tsx';
import CampoMoeda from '../../../../components/campos-form/CampoMoeda/CampoMoeda.tsx';
import Botao from '../../../../components/Elementos/Botao/Botao.tsx';
import { useDataContext } from '../../../../context/DadosContext.tsx';

interface FormHonorariosProps {}

export default function FormHonorarios({}: FormHonorariosProps) {
	const { clientes } = useDataContext();

	const [honorarios, setHonorarios] = useState<Honorario[]>([]);

	const [valorTotal, setValorTotal] = useState(0);
	const [parcelas, setParcelas] = useState(1);
	const [valorParcela, setValorParcela] = useState(0);

	const [clienteId, setClienteId] = useState(0);
	const [nomeCliente, setNomeCliente] = useState('');
	const [msgErroNome, setMsgErroNome] = useState('');

	const [observacao, setObservacao] = useState('');
	const [procId, setProcId] = useState(0);

	function aoSubmeter(evt: FormEvent) {
		evt.preventDefault();

		const honorario = new Honorario(
			valorTotal,
			parcelas,
			valorParcela,
			clienteId,
			procId,
		);

		if (!!observacao.length) honorario.observacao = observacao;

		setHonorarios(prev => [...prev, honorario]);
	}

	useEffect(() => {
		if (clientes.some(cliente => cliente.nome === nomeCliente)) {
			setClienteId(() => {
				const clienteSelec = clientes.find(
					cliente => cliente.nome === nomeCliente,
				);
				return clienteSelec.id;
			});
		} else if (nomeCliente.length > 3) {
			setMsgErroNome('Cliente não encontrado');
		}
	}, [nomeCliente]);

	useEffect(() => {
		setValorParcela(valorTotal / parcelas);
	}, [valorParcela, parcelas]);

	return (
		<form onSubmit={aoSubmeter}>
			<CampoTexto
				label='Nome do cliente'
				valor={nomeCliente}
				setValor={setNomeCliente}
				mensagemErro={msgErroNome}
				obrigatorio
			/>

			<FlexLine>
				<CampoMoeda
					valor={valorTotal}
					setValor={setValorTotal}
					nomeCampo='Valor Total'
					obrigatorio
				/>

				<CampoNumero
					label='Número de parcelas:'
					valor={parcelas}
					aoMudar={setParcelas}
				/>

				<CampoMoeda
					valor={valorParcela}
					setValor={setValorParcela}
					nomeCampo='Valor da Parcela'
					obrigatorio
				/>
			</FlexLine>

			<Botao type='submit' style={{ marginTop: '1rem' }}>
				Cadastrar
			</Botao>
		</form>
	);
}

// valorTotal,
// parcelas,
// valorParcela,
// clienteId,
// procId
