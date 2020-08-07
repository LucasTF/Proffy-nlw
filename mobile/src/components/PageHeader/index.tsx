import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import GoBackImage from '../../assets/images/icons/back.png';
import LogoImage from '../../assets/images/logo.png';

import * as Styled from './styles';

interface IPageHeaderProps {
	title: string;
	headerRight?: ReactNode;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
	title,
	headerRight,
	children,
}) => {
	const navigation = useNavigation();

	function navBackHandler() {
		navigation.navigate('Home');
	}

	return (
		<Styled.Container>
			<Styled.TopBar>
				<Styled.FilterButton onPress={navBackHandler}>
					<Image source={GoBackImage} resizeMode='contain' />
				</Styled.FilterButton>

				<Image source={LogoImage} resizeMode='contain' />
			</Styled.TopBar>

			<Styled.TextContainer>
				<Styled.Title>{title}</Styled.Title>

				{headerRight}
			</Styled.TextContainer>

			{children}
		</Styled.Container>
	);
};

export default PageHeader;
