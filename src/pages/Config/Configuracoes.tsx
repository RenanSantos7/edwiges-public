import { useEffect } from "react";
import Titulo2 from "../../components/Titulos/Titulo2.tsx";
import Titulo3 from "../../components/Titulos/Titulo3.tsx";
import { Switcher } from "../../components/campos-form/index.tsx";
import { useConfig } from "../../context/ConfigContext.tsx";

export default function PagConfiguracoes() {

    const { exibirTarefasCompletas, setExibirTarefasCompletas } = useConfig()

    return (
        <>
            <Titulo2>Configuracoes</Titulo2>
            <Titulo3>Tarefas</Titulo3>
            <Switcher
                label="Exibir tarefas já completadas"
                checado={exibirTarefasCompletas}
                aoMudar={() => setExibirTarefasCompletas(prev => !prev)}
                posicaoTexto="direita"
            />
        </>
    )
}