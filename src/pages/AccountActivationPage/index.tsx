import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import api from 'API'
import Navbar from 'components/Navbar'
import ErrorDrawing from 'images/error-illustration.svg'
import { buildURI as buildLoginPageURI } from 'pages/LoginPage'

export function buildURI (): string {
	return '/account/verify'
}

const AccountActivationPage = () => {
	const [verifying, setVerifying] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const history = useHistory()

	useEffect(() => {
		const token = new URLSearchParams(window.location.search).get('token') // get token from URL params
		api.verifyAccount(token).then(() => {
			setVerifying(false)
			setTimeout(() => {
				history.replace(buildLoginPageURI())
			}, 3000)
		}).catch(err => {
			setVerifying(false)
			if (err.status === 400) {
				setErrorMessage('Erro: este link expirou :(')
			} else if (err.status === 404) {
				setErrorMessage('Erro: este usuário não existe')
			} else {
				setErrorMessage(`Algo de errado aconteceu :(. Tente novamente mais tarde (${err})`)
			}
		})
	}, [])

	return <div className="main">
		<main>
			<Navbar/>
			<div style={{ height: '150px' }}></div>

			<Container>
				<Grid container justify='center' alignItems='center' direction='column'>
					<Grid item>
						{
							verifying
								? <CircularProgress />
								: errorMessage
									? <Typography variant='h4'> {errorMessage} </Typography>
									: <Typography variant='h4'> Conta verificada com sucesso! </Typography>
						}
					</Grid>
					{errorMessage
						? <Grid item>
							<img src={ErrorDrawing} height={200}/>
						</Grid>
						: null}
				</Grid>

			</Container>
		</main>
	</div>
}

export default AccountActivationPage
