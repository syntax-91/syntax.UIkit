import { useEffect, useRef } from 'react'
import { TB_anim } from './animations/tb'
import { Button } from './Button'
import s from './styles/modalStyles.module.css'
import type { ModalProps } from './types/types'

export function Modal({
	type = 'info',
	title = 'title',
	msg = 'привит тута типа карочи абични текст',
	titleBtn = 'хорошо',
	theme = 'dark',
	autoClose = false,
	autoCloseDuration = 0,
	...rest
}: ModalProps) {
	//
	const handleClick = () => {
		rest.setIsOpen(false)
	}

	const refModal = TB_anim()
	const refModalProgress = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (refModalProgress.current) {
			refModalProgress.current.style.setProperty(
				'--modalProgressDuration',
				`${autoCloseDuration}ms`
			)
		}

		let t: number

		if (autoClose) {
			t = setTimeout(() => rest.setIsOpen(false), autoCloseDuration)
		}

		return () => clearTimeout(t)
	}, [])

	return (
		<div
			className={`//
			${s[theme + '_c']}
			${s['modal-container']}  
		`}
		>
			<div //
				ref={refModal} //
				className={`
				${s[theme]} ${s['modal']}
				${autoClose && s['progress_']}
				`}
			>
				<div
					ref={refModalProgress} //modalProgress
					className={s.progressBar}
				/>

				<span>{title}</span>

				<p
					className='text-center py-2 
					'
				>
					{msg}
				</p>

				<Button
					theme={theme}
					onClick={handleClick}
					label={titleBtn}
					location='center'
					max_w={100}
				/>
			</div>
			{/**/}
		</div>
	)
}
