import Header from "../../components/Header/Header.tsx";
import { Tribunal } from "../../types/tribunais.ts";
import DATAJUD from "./datajud.ts";

const { endPoints, apiKey } = DATAJUD;

export default async function getMovimentacoes(tribunal: Tribunal, numProcesso: string) {
    try {
        const opcoes = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': apiKey
            },
            body: JSON.stringify({
                query: {
                    match: {
                        numeroProcesso: numProcesso
                    }
                }
            })
        }

        //@ts-expect-error
        const resposta = await fetch(`${endPoints[tribunal], opcoes}`);

        if (resposta.ok) {
            const data = await resposta.json();
            return data
        } else {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
    } catch (error) {
        throw error
    }
}