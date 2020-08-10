import React, { InputHTMLAttributes } from 'react';

import { StyledInput } from './styles';

export enum LoginInputPosition {
	'SINGLE',
	'TOP',
	'MIDDLE',
	'BOTTOM',
}

export interface ILoginInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	position: LoginInputPosition;
}

const LoginInput: React.FC<ILoginInputProps> = ({ position, ...rest }) => {
	let className: string;
	switch (position) {
		case LoginInputPosition.SINGLE:
			className = 'single';
			break;
		case LoginInputPosition.TOP:
			className = 'top';
			break;
		case LoginInputPosition.MIDDLE:
			className = 'middle';
			break;
		case LoginInputPosition.BOTTOM:
			className = 'bottom';
			break;
	}
	return <StyledInput className={className} {...rest} />;
};

export default LoginInput;
