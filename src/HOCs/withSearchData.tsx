import React, { createContext, ReactElement, useEffect, useState } from 'react'

import { client } from 'API'
export const SearchDataContext: React.Context<any> = createContext(['SCC210', 'Kalinka'])

function unique (arr: string[]): string[] {
	return [...new Set(arr)]
}

let data: string[] = null
function getData (setter: Function) {
	if (data == null) {
		client().get('/api/subject/all?institute=55').then((res: any) => {
			data = res.data.reduce((cur: string[], course: any) => {
				return [...cur, ...Object.keys(course.subjects).map((val, idx) => ({
					course: course.code,
					specialization: course.specialization,
					code: val,
					name: course.subjects[val]
				}))]
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
