import styles from './cep.module.css';
import { SetStateAction, useState, useEffect } from 'react';
import CampoTexto from '../../../components/campos-form/CampoTexto/CampoTexto.tsx';
import Titulo3 from '../../../components/Titulos/Titulo3.tsx';
import { useDataContext } from '../../../context/DadosContext.tsx';

interface IContexto {
	loading: boolean;
	setLoading: React.Dispatch<SetStateAction<boolean>>;
}

export default function Cep() {
	const [cep, setCep] = useState('');
	const [dadosEndereco, setDadosEndereco] = useState(null);
	const [endereco, setEndereco] = useState('');
	const [numero, setNumero] = useState('');
	const [cidade, setCidade] = useState('');

	const { loading, setLoading }: IContexto = useDataContext();

	async function aoMudar(evt: React.ChangeEvent<HTMLInputElement>) {
		let entrada = evt.target.value;
		entrada = entrada.replace(/[a-zA-Z]/g, '').replace(/\W/g, '');

		setCep(entrada);

		if (entrada.length > 8) {
			entrada = entrada.slice(0, 8);

			setCep(entrada);
		}

		if (entrada.length === 8) {
			const entradaMod = entrada.replace('-', '').replace('.', '');

			let dadosRecebidos = await pesquisaCep(entradaMod);
			setDadosEndereco(dadosRecebidos);
		}
	}

	async function pesquisaCep(cep: string) {
		setLoading(true);
		try {
			const resposta = await fetch(
				`https://viacep.com.br/ws/${cep}/json/`,
			);

			if (resposta.ok) {
				const dados = await resposta.json();
				setLoading(false);
				return dados;
			} else {
				setLoading(false);
				throw new Error(
					`Erro na requisição: ${resposta.status} ${resposta.statusText}`,
				);
			}
		} catch (erro) {
			console.error(erro);
		}
	}

	useEffect(() => {
		if (dadosEndereco) {
			setEndereco(
				`${dadosEndereco.logradouro}, Bairro ${dadosEndereco.bairro}`,
			);
			setCidade(`${dadosEndereco.localidade}/${dadosEndereco.uf}`);
		}
	}, [dadosEndereco]);

	return (
		<>
			<Titulo3>CEP</Titulo3>
			<input
				className={styles.input}
				value={cep}
				onChange={aoMudar}
				placeholder='Digite seu CEP'
			/>

			<div style={{ display: 'flex', gap: '1rem' }}>
				<input
					className={styles.input}
					value={endereco}
					placeholder='Endereço'
				/>

				<input
					className={styles.input}
					value={numero}
					onChange={evt => setNumero(evt.target.value)}
					placeholder='Nº'
				/>

				<input
					className={styles.input}
					value={cidade}
					placeholder='Cidade/UF'
				/>
			</div>
		</>
	);
}
