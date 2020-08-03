import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';

import { Container } from './styles';

interface IPageHeaderProps {
	title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, children }) => {
	return (
		<Container>
			<div className='top-bar-container'>
				<Link to='/'>
					<img src={BackIcon} alt='Voltar' />
				</Link>
				<img src={LogoImg} alt='Logo' />
			</div>
			<div className='header-content'>
				<strong>{title}</strong>
				{children}
			</div>
		</Container>
	);
};

export default PageHeader;
