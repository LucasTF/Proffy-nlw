import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../utils/api';

import * as Styled from './styles';

import LandingImg from '../../assets/images/landing.png';
import StudyIcon from '../../assets/images/icons/study.png';
import GiveClassesIcon from '../../assets/images/icons/give-classes.png';
import HeartIcon from '../../assets/images/icons/heart.png';

const Home: React.FC = () => {
	const navigation = useNavigation();

	const [connections, setConnections] = useState(0);

	useEffect(() => {
		api.get('connections')
			.then(res => {
				setConnections(res.data.total);
			})
			.catch(err => console.log(err));
	}, []);

	function NavToStudyHandler() {
		navigation.navigate('Study');
	}

	function NavToGiveClassesHandler() {
		navigation.navigate('GiveClasses');
	}

	return (
		<Styled.Container>
			<Styled.Banner resizeMode='contain' source={LandingImg} />

			<Styled.Title>
				Seja bem vindo, {'\n'}
				<Styled.TitleBold>O que deseja fazer?</Styled.TitleBold>
			</Styled.Title>

			<Styled.ButtonContainer>
				<Styled.Button onPress={NavToStudyHandler} primary>
					<Image source={StudyIcon} />
					<Styled.ButtonText>Estudar</Styled.ButtonText>
				</Styled.Button>

				<Styled.Button onPress={NavToGiveClassesHandler}>
					<Image source={GiveClassesIcon} />
					<Styled.ButtonText>Dar aulas</Styled.ButtonText>
				</Styled.Button>
			</Styled.ButtonContainer>

			<Styled.TotalConnText>
				Total de {connections} conexões já realizadas{' '}
				<Image source={HeartIcon} />
			</Styled.TotalConnText>
		</Styled.Container>
	);
};

export default Home;
