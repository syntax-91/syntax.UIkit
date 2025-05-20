import React, { type SetStateAction } from 'react'

type BtnType = 'button' | 'submit' | 'reset'
type InpType = 'text' | 'password' | 'email' | ''

export interface BtnProps {
	label?: string
	type?: BtnType
	onClick?: () => void
	w?: number

	style?: 'укажите свои кастомные типы, и опишите в css' | 'default'

	location?: 'start' | 'center' | 'end'
	theme?: 'dark' | 'light'
	isBlock?: boolean
	max_w?: number
}

/* INPUT */

export interface InputProps {
	required?: boolean
	type?: InpType
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	style?: 'укажите свои кастомные типы, и опишите в css' | 'default'
	theme?: 'dark' | 'light'
}

/* Modal window */

export type TModal = 'info' | 'prompt' | 'error'

export interface ModalProps {
	/* shared */
	type?: TModal
	title?: string
	msg?: string
	titleBtn?: string
	setIsOpen: React.Dispatch<SetStateAction<boolean>>
	theme?: 'light' | 'dark'
	autoClose?: boolean
	autoCloseDuration?: number
}
