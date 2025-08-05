import { createBrowserRouter } from 'react-router-dom'

import Base from './pages/Base.tsx'
import CadastroCliente from './pages/CadastroCliente/CadastroCliente.tsx'
import CadastrarProc from './pages/CadastrarProc/CadastrarProc.tsx'
import CalculadoraPrazos from './pages/CalculadoraPrazos/CalculadoraPrazos.tsx'
import ClienteUm from './pages/Cliente/Cliente.tsx'
import Clientes from './pages/Clientes/Clientes.tsx'
import Erro404 from './pages/Erro404/index.tsx'
import FormTeste from './pages/FormTeste/FormTeste.tsx'
import Home from './pages/Home/Home.tsx'
import Honorarios from './pages/Honorarios/Honorarios.tsx'
import Login from './pages/Login/Login.tsx'
import Pagamentos from './pages/Pagamentos/Pagamentos.tsx'
import PagConfiguracoes from './pages/Config/Configuracoes.tsx'
import Procedimento from './pages/Procedimento/index.tsx'
import Procedimentos from './pages/Procedimentos/Procedimentos.tsx'
import ProgRegime from './pages/ProgRegime/ProgRegime.tsx'
import Registro from './pages/Registro/Registro.tsx'
import Sobre from './pages/Sobre/index.tsx'
import Tarefas from './pages/PagTarefas/PagTarefas.tsx'
import Testes from './pages/Testes/index.tsx'

export const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/registre-se',
		element: <Registro />,
	},
	{
		path: '/',
		element: <Base />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'clientes',
				children: [
					{
						index: true,
						element: <Clientes />,
					},
					{
						path: ':clienteId',
						element: <ClienteUm />,
					},
					{
						path: 'cadastrar',
						element: <CadastroCliente />,
					},
				],
			},
			{
				path: 'procedimentos',
				children: [
					{
						index: true,
						element: <Procedimentos />,
					},
					{
						path: 'cadastrar',
						element: <CadastrarProc />,
					},
					{
						path: ':procId',
						element: <Procedimento />
					}
				],
			},
			{
				path: 'tarefas',
				element: <Tarefas />,
			},
			{
				path: 'honorarios',
				children: [
					{
						index: true,
						element: <Honorarios />,
					},
					{
						path: 'pagamentos',
						element: <Pagamentos />,
					},
				],
			},
			{
				path: 'calculadora-prazos',
				element: <CalculadoraPrazos />,
			},
			{
				path: 'progressao-regime',
				element: <ProgRegime />,
			},
			{
				path: 'configuracoes',
				element: <PagConfiguracoes />,
			},
			{
				path: 'testes',
				element: <Testes />,
			},
			{
				path: 'formteste',
				element: <FormTeste />
			},
			{
				path: 'sobre',
				element: <Sobre />
			},
			{
				path: '*',
				element: <Erro404 />,
			},
		],
	},
])
