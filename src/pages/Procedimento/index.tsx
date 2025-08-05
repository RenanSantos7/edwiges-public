import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DadosContext.tsx';
import { useEffect, useMemo, useState } from 'react';
import { IProcedimento } from '../../types/types.ts';
import FlexLine from '../../components/styles/FlexLine.tsx';
import getMovimentacoes from '../../utils/requisicoes/reqDataJud.ts';
import TabelaMov from './TabelaMov/index.tsx';
import Tabela from '../../components/Elementos/Tabela/Tabela.tsx';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ProcedimentoProps {}

export default function Procedimento(props: ProcedimentoProps) {
	const { procedimentos } = useDataContext();
	const { procId } = useParams();

	const [procedimento, setProcedimento] = useState<IProcedimento>(null);
	const [movimentacoes, setMovimentacoes] = useState([]);
	const [dados, setdados] = useState('');

	async function movimentos() {
		try {
			const dados = await getMovimentacoes(
				procedimento.tribunal,
				procedimento.numCNJ,
            );
            console.log(dados)

			const hits = dados?.hits?.hits;

			if (!hits) {
				throw new Error(
					`Não foram disponibilizados dados sobre a movimentação deste processo. Verifique se:
                    - O número do processo está correto;
                    - O processo em questão está em segredo de justiça;
                    - O processo em questão foi arquivado; ou
                    - O processo em questão é muito antigo;
                    `,
				);
			} else {
				setMovimentacoes(hits.movimentos);
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		if (procedimento?.numCNJ) {
			movimentos();
		}
    }, [procedimento]);

	useEffect(() => {
		setProcedimento(
			procedimentos.find(proc => proc.procedimento === procId),
		);
	}, [procId, procedimentos]);

	return (
		<>
			<h4>{procId}</h4>
			{procedimento?.numCNJ && <h2>{procedimento.numCNJ}</h2>}

			<Tabela titulos={['Data', 'Movimento']}>
				{movimentacoes.map((movimento, i) => {
					const descricao = movimento.nome;
					const dataObj = new Date(movimento.dataHora);
					const dataStr = format(dataObj, 'dd/MM/yyyy', {
						locale: ptBR,
					});

					return (
						<tr key={i}>
							<td>{dataStr}</td>
							<td>{descricao}</td>
						</tr>
					);
				})}
			</Tabela>
		</>
	);
}
