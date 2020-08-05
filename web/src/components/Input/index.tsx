import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
}

const Input: React.FC<IInputProps> = ({ name, label, ...rest }) => {
	return (
		<Container>
			<label htmlFor={name}>{label}</label>
			<input type='text' id={name} {...rest} />
		</Container>
	);
};

export default Input;
