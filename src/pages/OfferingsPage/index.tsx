import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Offering } from 'types/Offering'
import { Subject } from 'types/Subject'

import api from 'API'
import ErrorScreen from 'components/ErrorScreen'
import Navbar from 'components/Navbar'
import { useQueryParam } from 'hooks'
import { buildURI as buildSubjectPageURI } from 'pages/SubjectPage'
import { buildURI as buildSubjectsPageURI } from 'pages/SubjectsPage'

import Desktop from './Desktop'
import Mobile from './Mobile'

export interface URLParameter {
	course: string
	specialization: string
	code: string
}

export function buildURI (courseCode: string, courseSpecialization: string, subjectCode: string, professorCode?: string): string {
	return `/oferecimentos/${courseCode}/${courseSpecialization}/${subjectCode}${professorCode ? '?professor=' + professorCode : ''}`
}

export function getBreadcrumbLinks (course: string, specialization: string, code: string) {
	return [
		{
			url: buildSubjectsPageURI(),
			text: 'Disciplinas'
		},
		{
			url: buildSubjectPageURI(course, specialization, code),
			text: code
		},
		{
			url: buildURI(course, specialization, code),
			text: 'Oferecimentos'
		}
	]
}

const OfferingsPage = () => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

	const { course, specialization, code } = useParams<URLParameter>()
	const [subject, setSubject] = useState<Subject | null>(null)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [offerings, setOfferings] = useState<Offering[] | null>(null)

	const selectedOfferingCode: string = useQueryParam().get('professor') || ''

	useEffect(() => {
		api.getSubjectWithCourseAndCode(course, specialization, code).then(data => {
			setSubject(data)
		}).catch(err => {
			if (err.code === 'not_found') {
				setErrorMessage('Não foi possível encontrar essa disciplina')
			} else {
				setErrorMessage(`Algo deu errado (${err.message}). Tente novamente mais tarde`)
				console.error(err)
			}
		})

		api.getSubjectOfferings(course, specialization, code).then(data => {
			setOfferings(data)
		}).catch(err => {
			if (err.code === 'not_found') {
				setErrorMessage('Não foi possível encontrar oferecimentos para esta disciplina')
			} else if (err.code === 'unauthorized') {
				setErrorMessage('Você deve estar logado para ver esta página!')
			} else {
				setErrorMessage(`Algo deu errado (${err.message}). Tente novamente mais tarde`)
				console.error(err)
			}
		})
	}, [])

	let selectedOffering: Offering = offerings?.find(o => o.code === selectedOfferingCode)
	if (!selectedOffering && offerings?.length) selectedOffering = offerings[0]

	return <div className="main">
		<Navbar/>
		<Grid container direction='column' className='full-height' wrap='nowrap'>
			<Grid item xs="auto" style={{ minHeight: '64px' }}/>
			<Grid item xs>
				{
					errorMessage
						? <ErrorScreen
							message={errorMessage}
							breadcrumbs={getBreadcrumbLinks(course, specialization, code)}
						/>
						: isDesktop
							? <Desktop
								offerings={offerings}
								subject={subject}
								selectedOffering={selectedOffering}
							/>
							: <Mobile
								offerings={offerings}
								subject={subject}
								selectedOffering={selectedOffering}
							/>

				}
			</Grid>
		</Grid>
	</div>
}

export default OfferingsPage
