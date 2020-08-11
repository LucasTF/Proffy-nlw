import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import SuccessIcon from '../../../assets/images/icons/success-check-icon.svg';

const RegisterSuccess: React.FC = () => {
	return (
		<Container>
			<div className='container'>
				<img src={SuccessIcon} alt='Success' />
				<h1>Cadastro concluído</h1>
				<p>Agora você faz parte da plataforma Proffy.</p>
				<p>Tenha uma ótima experiência.</p>
				<NavLink to='/'>Fazer login</NavLink>
			</div>
		</Container>
	);
};

export default RegisterSuccess;
