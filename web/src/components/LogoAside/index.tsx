import React from 'react';

import { Container } from './styles';

import LogoImage from '../../assets/images/logo.svg';

const LogoAside: React.FC = () => {
	return (
		<Container>
			<div className='background'>
				<div className='logo-container'>
					<img src={LogoImage} alt='Proffy' />
					<h3>Sua plataforma de estudos online.</h3>
				</div>
			</div>
		</Container>
	);
};

export default LogoAside;
