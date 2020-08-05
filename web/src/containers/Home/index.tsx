import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import LogoImg from '../../assets/images/logo.svg';
import HomeImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import ConectionsIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../utils/api';

export default function Home() {
	const [connections, setConnections] = useState(0);

	useEffect(() => {
		api.get('connections')
			.then(res => {
				setConnections(res.data.total);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<Container>
			<div id='home-page-content' className='container'>
				<div className='logo-container'>
					<img src={LogoImg} alt='Logo' />
					<h2>Sua plataforma de ensino online.</h2>
				</div>

				<img src={HomeImg} alt='Home' className='home-image' />

				<div className='buttons-container'>
					<Link to='/study' className='study'>
						<img src={StudyIcon} alt='Estudar' />
						Estudar
					</Link>
					<Link to='/give-classes' className='give-classes'>
						<img src={GiveClassesIcon} alt='Dar Aulas' />
						Dar Aulas
					</Link>
				</div>

				<span className='total-connections'>
					Total de {connections} conexões já realizadas
					<img src={ConectionsIcon} alt='Conexões' />
				</span>
			</div>
		</Container>
	);
}
