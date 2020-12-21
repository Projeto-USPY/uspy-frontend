import React, { createContext, ReactElement, useEffect, useState } from 'react'

export const SearchDataContext: React.Context<any> = createContext([])

let data: any = null
export const getData = () => {
	if (data == null) {
		data = ['SCC210', 'SCC2011', 'Kalinka']
	}
	return data
}

const withSearchData = (child: ReactElement) => {
	const [searchData, setSearchData] = useState(data)
	useEffect(() => {
		data = getData()
		setSearchData(data)
	}, [])

	if (searchData == null) {
		return <></>
	} else {
		return <SearchDataContext.Provider value={searchData}>
			{child}
		</SearchDataContext.Provider>
	}
}

export default withSearchData
