import React, { createContext, ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
export const SearchDataContext: React.Context<any> = createContext(['SCC210', 'Kalinka'])

const API = axios.create({
	baseURL: 'http://127.0.0.1:8081',
	responseType: 'json'
})

function unique (arr: string[]): string[] {
	return [...new Set(arr)]
}

let data: string[] = null
function getData (setter: Function) {
	if (data == null) {
		API.get('/api/subject/all').then((res: any) => {
			data = res.data.reduce((cur: string[], course: any) => {
				return [...cur, ...Object.keys(course.subjects).map((val, idx) => val + ' - ' + course.subjects[val])]
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
