import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import GoBackImage from '../../assets/images/icons/back.png';
import LogoImage from '../../assets/images/logo.png';

import * as Styled from './styles';

interface IPageHeaderProps {
	title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title }) => {
	const navigation = useNavigation();

	function navBackHandler() {
		navigation.navigate('Home');
	}

	return (
		<Styled.Container>
			<Styled.TopBar>
				<BorderlessButton onPress={navBackHandler}>
					<Image source={GoBackImage} resizeMode='contain' />
				</BorderlessButton>

				<Image source={LogoImage} resizeMode='contain' />
			</Styled.TopBar>

			<Styled.Title>{title}</Styled.Title>
		</Styled.Container>
	);
};

export default PageHeader;
