import Styles from './Sistemas.module.css'
import CardSistemas from '../CardSistemas/CardSistemas.tsx'
import { Titulo2 } from '../../../../components/Titulos/index.ts'

export default function Sistemas() {
	return (
		<section className={Styles.sistemas}>
			<Titulo2>Sistemas</Titulo2>

			<div className={Styles.sistemasContainer}>
				<CardSistemas
					key={0}
					id='jepi'
					titulo='Justiça Estadual do Piauí'
					links={[
						{
							id: 0,
							url: 'http://www.tjpi.jus.br/portaltjpi/',
							nome: 'Site do Tribunal',
						},
						{
							id: 1,
							url: 'https://pje.tjpi.jus.br/1g/ng2/dev.seam#/painel-usuario-interno',
							nome: 'PJe 1º Grau',
						},
						{
							id: 2,
							url: 'https://pje.tjpi.jus.br/2g/login.seam',
							nome: 'PJe 2º Grau',
						},
						{
							id: 3,
							url: 'https://www.tjpi.jus.br/portaladvogado/listarProcessos#',
							nome: 'Portal do Advogado',
						},
						{
							id: 4,
							url: 'https://seeu.pje.jus.br/seeu/',
							nome: 'SEEU',
						},
					]}
				/>

				<CardSistemas
					key={1}
					id='jfpi'
					titulo='Justiça Federal PI'
					links={[
						{
							id: 5,
							url: 'http://portal.trf1.jus.br/',
							nome: 'Site do Tribunal',
						},
						{
							id: 6,
							url: 'https://pje1g.trf1.jus.br/pje/login.seam',
							nome: 'PJe 1º Grau',
						},
						{
							id: 7,
							url: 'https://pje2g.trf1.jus.br/pje/login.seam',
							nome: 'PJe 2º Grau',
						},
					]}
				/>

				<CardSistemas
					key={2}
					id='jtpi'
					titulo='Justiça do Trabalho PI'
					links={[
						{
							id: 8,
							url: 'http://www.trt22.jus.br/portal/home.jsp',
							nome: 'Site do Tribunal',
						},
						{
							id: 9,
							url: 'https://pje.trt22.jus.br/primeirograu/login.seam',
							nome: 'PJe 1º Grau',
						},
						{
							id: 10,
							url: 'https://pje.trt22.jus.br/segundograu/login.seam',
							nome: 'PJe 2º Grau',
						},
					]}
				/>

				<CardSistemas
					key={3}
					id='outrostrib'
					titulo='Outros Tribunais'
					links={[
						{
							id: 11,
							url: 'http://portal.stf.jus.br/',
							nome: 'Supremo Tribunal Federal',
						},
						{
							id: 12,
							url: 'https://www.stj.jus.br/sites/portalp/Sob-medida/Advogado',
							nome: 'Superior Tribunal de Justiça',
						},
						{
							id: 13,
							url: 'http://www.tjce.jus.br/',
							nome: 'Tribunal de Justiça do Ceará',
						},
						{
							id: 14,
							url: 'http://www.tjma.jus.br/',
							nome: 'Tribunal de Justiça do Maranhão',
						},
						{
							id: 15,
							url: 'https://pesquisajuris.tjdft.jus.br/IndexadorAcordaos-web/sistj?visaoId=tjdf.sistj.acordaoeletronico.buscaindexada.apresentacao.VisaoBuscaAcordao',
							nome: 'Tribunal de Justiça do DF',
						},
					]}
				/>
			</div>
		</section>
	)
}
