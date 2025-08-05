import { RouterProvider, useParams } from "react-router-dom";
import { DadosProvider } from "./context/DadosContext.tsx";
import { router } from './router.tsx'
import TaskProvider from "./context/TarefasContexto.tsx";
import ConfigProvider from "./context/ConfigContext.tsx";

export default function App() {
	return (
		<DadosProvider>
			<ConfigProvider>
				<TaskProvider>
					<RouterProvider router={router} />
				</TaskProvider>
			</ConfigProvider>
		</DadosProvider>
	)
}
