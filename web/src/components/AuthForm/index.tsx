import React from 'react';

import { Container } from './styles';

interface IAuthFormProps {
	title: string;
	description?: string;
	formSubmitText: string;
	onSubmit: Function;
}

const AuthForm: React.FC<IAuthFormProps> = ({
	title,
	description,
	formSubmitText,
	onSubmit,
	children,
}) => {
	return (
		<Container>
			<h2 className='title'>{title}</h2>
			{description && <p className='description'>{description}</p>}
			<form onSubmit={e => onSubmit(e)}>
				{children}
				<button className='submit-button' type='submit'>
					{formSubmitText}
				</button>
			</form>
		</Container>
	);
};

export default AuthForm;
