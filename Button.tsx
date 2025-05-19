import s from './styles/buttonStyles.module.css'
import { BtnProps } from './types/types'

export function Button({
	label = 'text',
	type = 'button',
	style = 'default',
	location = 'start',
	theme = 'dark',
	isBlock = true,
	w = 300,
	...rest
}: BtnProps) {
	//
	return (
		<div
			className={`${isBlock ? 'flex' : 'inline-flex'}
	  	justify-${location}`}
		>
			<button
				style={{ width: w }} //
				className={` ${s[style]} ${s[theme]} `}
				onClick={rest.onClick}
			>
				{label}
			</button>
		</div>
	)
}
