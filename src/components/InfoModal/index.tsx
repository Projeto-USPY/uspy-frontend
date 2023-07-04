import React from 'react'

import Backdrop from '@material-ui/core/Backdrop'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CloseIcon from '@material-ui/icons/CloseOutlined'
import { useTheme } from '@material-ui/core/styles'

import ImageBlock from 'components/ImageBlock'
import AuthenticityCodeImage from 'images/authenticityCode.png'
import CheckboxesImage from 'images/checkboxes.png'
import { buildURI as buildUseTermsPageURI } from 'pages/UseTermsPage'

interface InfoModalProps {
	open: boolean
	handleClose: () => void
}

const InfoModal: React.FC<InfoModalProps> = ({ open, handleClose }) => {
	// Style stuff
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				margin: 0,
				borderWidth: '0px',
			}}
			BackdropProps={{
				timeout: 500,
			}}>
			<Fade in={open}>
				<div
					style={{
						width: isDesktop ? '60%' : '90%',
						maxHeight: '90vh',
						background: 'white',
						overflow: 'auto',
						position: 'relative',
					}}>
					<Grid
						container
						justify="flex-end"
						style={{ position: 'fixed', top: '0px', left: '0px' }}>
						<Grid item>
							<IconButton
								onClick={handleClose}
								size="medium"
								aria-label="close"
								disableRipple>
								<CloseIcon
									fontSize="large"
									style={{
										color: isDesktop ? 'white' : 'black',
										padding: '2rem',
									}}
								/>
							</IconButton>
						</Grid>
					</Grid>
					<Box m={3}>
						<Typography variant="h4">
							{' '}
							Como obter o código de autenticidade?{' '}
						</Typography>
						<p>
							<span style={{ fontSize: '1.2rem' }}>1.</span> Entre
							em{' '}
							<Link
								color="secondary"
								href="https://uspdigital.usp.br/jupiterweb/historicoEscolar"
								target="_blank">
								{' '}
								JupiterWeb{' '}
							</Link>
							, escolha seu menu e curso, e marque as caixas
							conforme a imagem:{' '}
						</p>
						<ImageBlock
							imageSource={CheckboxesImage}
							size="small"
							title="Marcação das caixas"
							caption='Marque a caixa "Com Autenticação"'
						/>
						<p>
							{' '}
							<span style={{ fontSize: '1.2rem' }}>2.</span>{' '}
							Clique em {'"Buscar"'}, e o seu histórico escolar
							será gerado com um código de autenticidade no topo
							do documento, como na imagem:{' '}
						</p>
						<ImageBlock
							imageSource={AuthenticityCodeImage}
							size="medium"
							title="código de autenticidade"
							caption="Código de 16 dígitos gerado"
						/>

						<p>
							<span style={{ fontSize: '1.2rem' }}>3.</span> É
							este código de 16 dígitos que será usado para
							verificar que você está atrelado à USP e pode se
							cadastrar.
						</p>

						<Divider />
						<p>
							{' '}
							<strong>
								{' '}
								O que fazemos com o seu histórico escolar?{' '}
							</strong>
							<br />
							Seu histórico escolar é usado para extrair seus
							dados e informações sobre: disciplinas que cursou,
							médias que obteve e status de aprovação. Antes de
							irem para o banco de dados, eles são anonimizados e
							criptografados. Nós garantimos total transparência,
							e você pode ler mais sobre isso no nosso documento
							de{' '}
							<Link
								color="secondary"
								href={buildUseTermsPageURI()}
								target="_blank">
								{' '}
								termos e condições
							</Link>
							.{' '}
						</p>
						<p>
							{' '}
							O <span className="uspy">USPY</span> funciona graças
							à colaboração dos usuários em oferecer seus dados
							para alimentar as estatísticas de aprovações, médias
							e reviews de disciplinas.{' '}
						</p>

						<Button
							fullWidth
							color="primary"
							size="medium"
							variant="outlined"
							onClick={handleClose}>
							Ok
						</Button>
					</Box>
				</div>
			</Fade>
		</Modal>
	)
}

export default InfoModal
