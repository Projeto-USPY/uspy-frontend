import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import useTheme from '@material-ui/styles/useTheme'

import { setLastUpdatedAccount } from 'actions'
import api from 'API'
import InfoModal from 'components/InfoModal'
import PartialInput from 'components/PartialInput'
import { useErrorDialog, useMySnackbar } from 'hooks'

interface PropsType {
    open: boolean
    close: () => void
}

const UpdateTranscriptModal: React.FC<PropsType> = ({ open, close }) => {
	const [authCode, setAuthCode] = useState<string[]>(['', '', '', ''])
	const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false)
	const [pending, setPending] = useState<boolean>(false)

	const [captchaImg, setCaptchaImg] = useState<string>('')
	const [captcha, setCaptcha] = useState<string>('')
	const [showCaptchaError, setShowCaptchaError] = useState<boolean>(false)

	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
	const notify = useMySnackbar()

	const captchaOk = /^[\w\d]{4}$/.test(captcha)
	const authCodeString = ['0', '1', '2', '3'].reduce((prev, cur) => prev + '-' + (document.querySelector(`#auth-code-${cur}`)?.value || ''), '').substr(1)
	const authCodeOk = /^[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}/.test(authCodeString)

	const uspyAlert = useErrorDialog()

	useEffect(() => {
		api.getRegistrationCaptcha().then(captchaImg => {
			setCaptchaImg(captchaImg)
		})
	}, [])

	const handlePaste = (id: number, str: string) => {
		const values = authCode.slice()
		for (let i = id; i < 4; ++i) values[i] = ''
		for (let i = 0; i < str.length; ++i) {
			if (id + Math.floor(i / 4) >= 4) break
			values[id + Math.floor(i / 4)] += str[i]
		}
		setAuthCode(values)
	}

	const dispatch = useDispatch()
	const submit = () => {
		setPending(true) // update is pending
		api.updateAccount(authCodeString, captcha).then(() => {
			notify('Hist??rico atualizado com sucesso', 'success')
			setPending(false)
			close()

			api.isAuthenticated().then(([_, lastUpdated]) => {
				dispatch(setLastUpdatedAccount(lastUpdated))
			}).catch(err => {
				console.error(`Error: (${err})`)
			})
		}).catch(err => {
			if (err.code === 'bad_request') {
				uspyAlert('C??digo de autenticidade ou captcha inv??lidos. Lembre-se que o c??digo de autenticidade usado deve ter sido gerado na ??ltima hora!')
			} else {
				uspyAlert(`Algo deu errado (${err.message}). Tente novamente mais tarde`, 'Falha no cadastro')
			}
			setCaptcha('')
			setShowCaptchaError(false)
			api.getRegistrationCaptcha().then(captchaImg => {
				setCaptchaImg(captchaImg)
			})
			setPending(false)
		})
	}

	return <Dialog onClose={close} open={open}>
		<DialogTitle> Atualizar hist??rico </DialogTitle>
		<DialogContent>
			<Grid container direction='column' alignItems='center' spacing={2}>
				<Grid item>
					<Typography>
                        Atualize seu hist??rico obtendo um novo c??digo de autenticidade do seu resumo escolar.
						<InfoIcon fontSize='inherit' style={{ cursor: 'pointer' }} onClick={() => setInfoModalOpen(true)} />
					</Typography>
				</Grid>
				<Grid item style={{ maxWidth: '400px', width: '100%' }}>
					<Grid container justify={isDesktop ? 'center' : 'space-around'} alignItems='center' wrap='wrap' >
						{authCode.map((val, idx) =>
							<React.Fragment key={idx}>
								{idx ? '-' : <span> &nbsp; </span>}
								<PartialInput id={idx} initialValue={val} handlePaste={handlePaste}/>
							</React.Fragment>
						)}
					</Grid>
				</Grid>
				<Grid item style={{ maxWidth: '400px', width: '100%' }}>
					<img
						src={captchaImg}
						style={{ width: '100%' }}
						alt="Captcha n??o encontrado"
					/>
				</Grid>
				<Grid item style={{ maxWidth: '400px', width: '100%' }}>
					<TextField
						label="Captcha"
						error={!captchaOk && showCaptchaError}
						helperText={!captchaOk && showCaptchaError ? 'Exatamente 4 caracteres com letras ou n??meros' : ''}
						value={captcha}
						onBlur={() => setShowCaptchaError(true)}
						onChange={(evt: any) => setCaptcha(evt.target.value)}
						variant='outlined'
						color='secondary'
						size='small'
						fullWidth
					/>
				</Grid>
			</Grid>
		</DialogContent>
		<DialogActions>
			<Button onClick={close} color="secondary">
                Cancelar
			</Button>
			<Button
				onClick={submit}
				color="secondary"
				disabled={!captchaOk || !authCodeOk}
				endIcon={pending ? <CircularProgress size={20} /> : null}
			>
                Confirmar
			</Button>
		</DialogActions>
		<InfoModal open={infoModalOpen} handleClose={() => setInfoModalOpen(false)}/>
	</Dialog>
}

export default UpdateTranscriptModal
