declare module '*.svg' {
	export default any
}

declare module '*.svg?react' {
	export default React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

declare module '*.png' {
	export default string
}

declare module '*.gif' {
	export default string
}

declare module '*.jpg' {
	export default string
}

declare module '*.jpeg' {
	export default string
}
