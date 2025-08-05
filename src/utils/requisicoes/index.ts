const endPoint = 'http://localhost:4567';

/**
 * Realiza requisição do tipo GET
 * @param data o nome do subdomínio no endPoint
 * @param setData o setter do estado que vai receber os dados
 */
export async function getData<T>(
	data: string,
	setData: React.Dispatch<React.SetStateAction<T>>,
) {
	try {
		const resposta = await fetch(`${endPoint}/${data}`);
		if (resposta.ok) {
			const dados = await resposta.json();
			setData(dados);
		} else {
			throw new Error(
				`Erro na requisição de ${data}: ${resposta.status} ${resposta.statusText}`,
			);
		}
	} catch (error) {
		console.error(`Erro ao buscar ${data}:`, error);
	}
}

/**
 * Realiza requisição do tipo POST
 * @param url o nome do subdomínio no endPoint
 * @param data os dados a serem salvos
 */
export async function postData<T>(url: string, data: T) {
	try {
		const opcoes = {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		};
		const resposta = await fetch(`${endPoint}/${url}`, opcoes);

		if (resposta.ok) {
			console.log('Dados enviados ao servidor com sucesso');
		} else {
			console.error('Erro ao enviar dados:', resposta.statusText);
		}
	} catch (error) {
		console.error('Erro na requisição:', error);
	}
}

/**
 * Realiza requisição do tipo PUT
 * @param url o nome do subdomínio no endPoint
 * @param id a id do objeto
 * @param data os dados a serem salvos
 */
export async function putData<T>(url: string, id: number, data: T) {
	try {
		const endPointPut = `${endPoint}/${url}/${id}`;
		const response = await fetch(endPointPut, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return response.ok
			? response.json()
			: Promise.reject('Erro ao atualizar dados');
	} catch (error) {
		console.error('Erro na requisição:', error);
	}
}

/**
 * Realiza requisição do tipo PATCH
 * @param url o nome do subdomínio no endPoint
 * @param id a id do objeto
 * @param data os dados a serem salvos
 */
export async function patchData<T>(url: string, id: number, data: Partial<T>) {
	try {
		const endPointPatch = `${endPoint}/${url}/${id}`;
		const response = await fetch(endPointPatch, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return response.ok
			? response.json()
			: Promise.reject('Erro ao atualizar dados');
	} catch (error) {
		console.error('Erro na requisição:', error);
	}
}

/**
 * Realiza requisição do tipo DELETE
 * @param url o nome do subdomínio no endPoint
 * @param id a id do objeto
 */
export async function deleteData(url: string, id: number) {
	try {
		const endPointDel = `${endPoint}/${url}/${id}`;
		const response = await fetch(endPointDel, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			throw new Error('Erro ao deletar dados');
		}
	} catch (error) {
		console.error('Erro na requisição:', error);
	}
}
