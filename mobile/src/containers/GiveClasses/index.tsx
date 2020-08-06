import React from 'react';
import { useNavigation } from '@react-navigation/native';

import GiveClassesBgImage from '../../assets/images/give-classes-background.png';

import * as Styled from './styles';

const GiveClasses: React.FC = () => {
	const navigation = useNavigation();

	function navBackToHomeHandler() {
		navigation.goBack();
	}

	return (
		<Styled.Container>
			<Styled.Background resizeMode='contain' source={GiveClassesBgImage}>
				<Styled.Title>Quer ser um Proffy?</Styled.Title>
				<Styled.Description>
					Para começar, você precisa se cadastrar como professor na
					nossa plataforma web.
				</Styled.Description>
			</Styled.Background>

			<Styled.Button onPress={navBackToHomeHandler}>
				<Styled.ButtonText>Tudo bem</Styled.ButtonText>
			</Styled.Button>
		</Styled.Container>
	);
};

export default GiveClasses;
