import React, { createContext, ReactElement, useEffect, useState } from 'react'
import { API } from 'API'
export const SearchDataContext: React.Context<any> = createContext(['SCC210', 'Kalinka'])

function unique (arr: string[]): string[] {
	return [...new Set(arr)]
}

const courseAliases = new Map<string, string>()
courseAliases.set('55041', 'BCC')
courseAliases.set('55051', 'BSI')
courseAliases.set('55071', 'Estat.')
courseAliases.set('55030', 'Mat.')
courseAliases.set('55060', 'Mat. Apl.')

let data: string[] = null
function getData (setter: Function) {
	if (data == null) {
		API.get('/api/subject/all').then((res: any) => {
			data = res.data.reduce((cur: string[], course: any) => {
				return [...cur, ...Object.keys(course.subjects).map((val, idx) => val + ' - ' + course.subjects[val] + ` (${courseAliases.get(course.code as string)})`)]
			}, [])
			data = unique(data)
			setter(data)
		})
	}
	setter(data)
}

const withSearchData = (child: ReactElement) => {
	const [searchData, setSearchData] = useState(data)
	useEffect(() => {
		getData(setSearchData)
	}, [])

	if (searchData == null) {
		return <>
			{ child }
		</>
	} else {
		return <SearchDataContext.Provider value={searchData}>
			{child}
		</SearchDataContext.Provider>
	}
}

export default withSearchData
