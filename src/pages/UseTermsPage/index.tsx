import React, { ReactElement } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { useTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Navbar from 'components/Navbar'

interface CookieDescription {
	name: string
	time: string
	proprietary: string
	description: ReactElement
}

const cookieList: CookieDescription[] = [{
	name: 'access_token',
	time: 'Permanente (30 dias)',
	proprietary: 'uspy.me',
	description: <> <i>Cookie</i> de autenticação que contém o número USP do usuário vigente na sessão atual do navegador </>
}, {
	name: 'NSC_mcwt_xfcepd',
	time: 'Temporário',
	proprietary: 'uspdigital.usp.br',
	description: <> <i>Cookie</i> usado no fluxo de cadastro, para a obtenção do resumo escolar do usuário </>
}, {
	name: 'JSESSIONID',
	time: 'Temporário',
	proprietary: 'uspdigital.usp.br',
	description: <> <i>Cookie</i> usado no fluxo de cadastro, para a obtenção do resumo escolar do usuário </>
}]

export function buildURI (): string {
	return '/termos-de-uso'
}

const UseTermsPage = () => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	return <main>
		<Navbar/>
		<div style={{ height: '100px' }}></div>
		<Container>
			<h2> Termos de Uso </h2>
			<br/>

			<Card elevation={3} style={{ padding: (isDesktop ? '1rem' : '0'), lineHeight: '150%' }}>
				<CardContent>

					<p> Ao clicar em “Concordo com os termos de uso”, você concorda com os termos de uso da plataforma, refletidos pelos valores propostos abaixo. </p>

					<h3> 1. Do serviço </h3>

					<section>

						<p> {'O USPY ("uspy", "site", "nosso(a)", "nós" ou "conosco") possui dois grandes propósitos:'}</p>

						<ul>
							<li> Proporcionar um espaço ao estudante de graduação do ICMC que contenha informações acadêmicas úteis de maneira centralizada e de fácil acesso. </li>
							<li> Mediar um processo colaborativo de coleta de informações individuais a fim de gerar estatísticas e indicativos que possam auxiliar o aluno na sua vida acadêmica. </li>
						</ul>

					</section>

					<h3> 2. Da aceitação </h3>

					<section>

						<p> O presente Termo estabelece direitos e obrigações contratadas de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e as pessoas usuárias do USPY. </p>

						<p> Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a observá-las, sob o risco de banimento de sua conta. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-la. </p>

					</section>

					<h3> 3. Do cadastro </h3>

					<section>

						<p> O acesso às funcionalidades da plataforma exigirá a realização de um cadastro prévio. Ao realizar o cadastro, o usuário consente com o fornecimento dos seguintes dados: </p>

						<ul>
							<li> Número USP (número de matrícula)  </li>
							<li> Histórico de notas do aluno  </li>
						</ul>

						<p> Essas informações são obtidas a partir do resumo escolar do aluno e são necessárias pelos seguintes motivos </p>

						<ul>
							<li> O Número USP é usado como identificador de <i>login</i> do usuário </li>
							<li> O histórico de notas do usuário é usado para o cálculo das estatísticas conjuntas de cada disciplina: taxa de aprovação, distribuição e média, além de fornecer a informação de quais disciplinas foram cursadas pelo aluno. </li>
						</ul>

						<p> Todos os dados são ofuscados utilizando técnicas de criptografia. </p>

						<p> O usuário se compromete a não informar seus dados cadastrais e/ou de acesso à plataforma a terceiros, responsabilizando-se integralmente pelo uso que deles seja feito. </p>

						<p> Além disso, o usuário poderá, a qualquer momento, requisitar o cancelamento de seu cadastro conosco e suas informações serão completamente removidas da plataforma. </p>

					</section>

					<h3> 4. Da política de privacidade </h3>

					<section>

						<p> Os dados adicionados no site a partir do cadastro dos usuários e suas ações posteriores seguem a Lei Nº 13.709, de 14 de agosto de 2018, sendo assim, anônimas. </p>

						<p> Não serão divulgadas quaisquer avaliações e/ou informações específicas de algum aluno, somente estatísticas conjuntas que ofuscam os desempenhos e opiniões individuais dos usuários. Todos os dados pessoais serão protegidos e criptografados. </p>

					</section>

					<h3> 5. Da autenticidade de informações </h3>

					<section>

						<p> O USPY não é um sistema oficial, com isso, as informações fornecidas deverão ser desfrutadas com muito cuidado. Os dados disponibilizados devem ser utilizados com o objetivo somente de informação pessoal.  </p>

						<p> Nós não nos responsabilizamos pelo uso indevido dos dados fornecidos, e o mau uso das ferramentas disponibilizadas pela plataforma podem sujeitar o usuário a ter sua conta banida sem aviso prévio.  </p>

					</section>

					<h3> 6. Do uso de <i>cookies</i> </h3>

					<section>

						<p> <i>Cookies</i> são pequenos trechos de texto usados para armazenar informações em navegadores <i>web</i>. Eles podem ser permanentes ou temporários: </p>

						<ul>
							<li> <b>permanentes:</b> permanecem no seu navegador durante um período determinado ou até que você os exclua. </li>
							<li> <b>temporários:</b> expiram assim que você fecha o seu navegador, encerrando a sessão. </li>
						</ul>

						<p> O USPY utiliza <i> cookies </i> para trafegar dados entre diferentes pontos da aplicação. Sem estes não é possível autorizar o usuário a utilizar os recursos disponíveis para usuários cadastrados. Dessa forma, ao se cadastrar, o usuário consente o armazenamento de <i>cookies</i> específicos do USPY em seu navegador. </p>

						<p> Os seguintes <i> cookies </i> são utilizados: </p>

						<TableContainer component={Paper}>
							<Table padding={!isDesktop ? 'checkbox' : 'default'} size={isDesktop ? 'medium' : 'small'} aria-label="Tabela de cookies">
								<TableHead>
									<TableRow>
										<TableCell align='center'> <b>Nome</b> </TableCell>
										<TableCell align='center'> <b>Tempo</b> </TableCell>
										<TableCell align='center'> <b>Proprietário</b> </TableCell>
										<TableCell align='center'> <b>Descrição</b> </TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{cookieList.map(cookieDescription => <TableRow key={cookieDescription.name}>
										<TableCell align='center' style={{ fontFamily: '\'Roboto Mono\', monospace' }}> {cookieDescription.name} </TableCell>
										<TableCell align='center'> {cookieDescription.time} </TableCell>
										<TableCell align='center'> {cookieDescription.proprietary} </TableCell>
										<TableCell align='center'> {cookieDescription.description} </TableCell>
									</TableRow>)}
								</TableBody>

							</Table>
						</TableContainer>

						<p> O <i>cookie</i> de autenticação é necessário pois existem recursos do site (dentre esses são: avaliar disciplina ou professor, visualizar estatísticas de uma disciplina, ver perfil, etc) que estão restritos a usuários cadastrados e devidamente autenticados. </p>

						<p> Apesar da maioria dos navegadores estar inicialmente configurada para aceitar <i> cookies </i> de forma automática, você pode rever suas permissões a qualquer tempo, de forma a bloqueá-los, aceitá-los ou ativar notificações para quando alguns <i> cookies </i> forem enviados ao seu dispositivo.  Todavia, a revogação do consentimento de determinados <i> cookies </i> pode inviabilizar o funcionamento de alguns recursos da plataforma. </p>

					</section>

					<h3> 7. Das alterações </h3>

					<section>

						<p> Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e a qualquer momento, para adequar ou modificar os serviços, bem como para atender a novas exigências legais. As alterações serão veiculadas pelo site e o usuário poderá optar por aceitar o novo conteúdo ou cancelar o cadastro vigente. </p>

					</section>

					<h3> 8. Questões e esclarecimentos </h3>

					<section>

						<p> Os desenvolvedores solicitam encarecidamente que, caso os usuários tenham alguma sugestão para acrescentar ou possibilitar uma melhoria, entrem em contato. Para quaisquer dúvidas sobre o sistema, opções, botões, cadastros e outros, a equipe de desenvolvimento estará à disposição para auxiliar a todos. A plataforma foi feita de alunos para alunos, portanto toda colaboração é bem vinda. </p>

					</section>

				</CardContent>
			</Card>

		</Container>
	</main>
}

export default UseTermsPage
