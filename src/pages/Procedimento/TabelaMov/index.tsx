import { format } from 'date-fns';
import Tabela from '../../../components/Elementos/Tabela/Tabela.tsx';
import { ptBR } from 'date-fns/locale';
import { useEffect } from 'react';

interface IMovimentoComplemento {
	codigo: number;
	valor: number;
	nome: string;
	descricao: string;
}

interface IMovimento {
	complementosTabelados?: IMovimentoComplemento[];
	codigo: number;
	nome: string;
	dataHora: string;
}

interface TabelaMovProps {
	movimentos: IMovimento[];
}

export default function TabelaMov({ movimentos }: TabelaMovProps) {
    useEffect(() => {
        console.log(movimentos);
    },[movimentos]);

	return (
		<Tabela titulos={['Data', 'Movimento']}>
            {movimentos.map((movimento, i) => {
                const descricao = movimento.nome
                const dataObj = new Date(movimento.dataHora);
                const dataStr = format(dataObj, 'dd/MM/yyyy', { locale: ptBR })

				return (
					<tr key={i}>
						<td>{dataStr}</td>
						<td>{descricao}</td>
					</tr>
				);
			})}
		</Tabela>
	);
}
