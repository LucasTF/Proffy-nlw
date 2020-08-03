import React from 'react';

import { Container } from './styles';

import LogoImg from '../../assets/images/logo.svg';
import HomeImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import ConectionsIcon from '../../assets/images/icons/purple-heart.svg';

export default function Home() {
	return (
		<Container>
			<div id='home-page-content' className='container'>
				<div className='logo-container'>
					<img src={LogoImg} alt='Logo' />
					<h2>Sua plataforma de ensino online.</h2>
				</div>

				<img src={HomeImg} alt='Home' className='home-image' />

				<div className='buttons-container'>
					<a href='#' className='study'>
						<img src={StudyIcon} alt='Estudar' />
						Estudar
					</a>
					<a href='#' className='give-classes'>
						<img src={GiveClassesIcon} alt='Dar Aulas' />
						Dar Aulas
					</a>
				</div>

				<span className='total-connections'>
					Total de 200 conexões já realizadas
					<img src={ConectionsIcon} alt='Conexões' />
				</span>
			</div>
		</Container>
	);
}
