import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid'

import Navbar from 'components/Navbar'

const UseTermsPage = () => {
	return <main>
		<Navbar/>
		<div style={{ height: '100px' }}></div>
		<Container>
			<h2> Termos de Uso </h2>
			<br/>

			<Card elevation={3}>
				<CardContent>

					<p> Ao clicar em “Concordo com os termos de uso”, você concorda com os termos de uso da plataforma, refletidos pelos valores propostos abaixo. </p>

					<h3> 1. Do serviço </h3>

					<p> {'O USPY ("uspy", "site", "nosso(a)", "nós" ou "conosco") possui dois grandes propósitos:'}</p>

					<ul>
						<li> Proporcionar um espaço ao estudante de graduação do ICMC que contenha informações acadêmicas úteis de maneira centralizada e de fácil acesso. </li>
						<li> Mediar um processo colaborativo de coleta de informações individuais a fim de gerar estatísticas e indicativos que possam auxiliar o aluno na sua vida acadêmica. </li>
					</ul>

					<h3> 2. Da aceitação </h3>

					<p> O presente Termo estabelece direitos e obrigações contratadas de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e as pessoas usuárias do USPY. </p>

					<p> Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a observá-las, sob o risco de banimento de sua conta. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-los. </p>

					<h3> 3. Do cadastro </h3>

					<p> O acesso às funcionalidades da plataforma exige a realização de um cadastro prévio. </p>

					<p> O usuário se compromete a não informar seus dados cadastrais e/ou de acesso à plataforma a terceiros, responsabilizando-se integralmente pelo uso que deles seja feito. </p>

					<p> O usuário poderá, a qualquer tempo, requerer o cancelamento de seu cadastro conosco. </p>

					<h3> 4. Da política de privacidade </h3>

					<p> Os dados adicionados no site a partir do cadastro dos usuários e suas ações posteriores seguem a Lei Nº 13.709, de 14 de agosto de 2018, sendo assim, anônimas. </p>

					<p> Não serão divulgadas quaisquer avaliações e/ou informações específicas de algum aluno, somente estatísticas conjuntas que ofuscam os desempenhos e opiniões individuais dos usuários. Todos os dados pessoais serão protegidos e criptografados. </p>

					<h3> 5. Da autenticidade de informações </h3>

					<p> O USPY não é um sistema oficial, com isso, as informações fornecidas deverão ser desfrutadas com muito cuidado. Os dados disponibilizados devem ser utilizados com o objetivo somente de informação pessoal.  </p>

					<p> Não nos responsabilizamos pelo uso indevido dos dados fornecidos, e o mau uso das ferramentas disponibilizadas pela plataforma podem sujeitar o usuário a ter sua conta banida sem aviso prévio.  </p>

					<h3> 6. Do uso de <i>cookies</i> </h3>

					<p> O USPY utiliza <i> cookies </i> para trafegar dados entre diferentes pontos da aplicação. Sem estes não é possível autorizar o usuário a utilizar os recursos disponíveis para usuários cadastrados. Dessa forma, ao se cadastrar, o usuário consente o armazenamento de <i>cookies</i> específicos do USPY em seu navegador. </p>

					<h3> 7. Das alterações </h3>

					<p> Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e a qualquer tempo, para adequar ou modificar os serviços, bem como para atender novas exigências legais. As alterações serão veiculadas pelo site e o usuário poderá optar por aceitar o novo conteúdo ou cancelar o cadastro vigente. </p>

					<h3> 8. Questões e esclarecimentos </h3>

					<p> Os desenvolvedores solicitam encarecidamente que, caso os usuários tenham alguma sugestão para acrescentar ou possibilitar uma melhoria, entrem em contato. Para quaisquer dúvidas sobre o sistema, opções, botões, cadastros e outros, a equipe de desenvolvimento estará à disposição para auxiliar a todos. A plataforma foi feita de alunos para alunos e portanto, toda colaboração é bem vinda. </p>

				</CardContent>
			</Card>

		</Container>
	</main>
}

export default UseTermsPage
