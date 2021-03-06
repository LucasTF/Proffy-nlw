import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	padding: 60px 40px;
	background-color: #8257e5;
`;

export const TopBar = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const TextContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.Text`
	font-family: Archivo_700Bold;
	color: #fff;
	font-size: 24px;
	line-height: 32px;
	max-width: 160px;
	margin: 20px 0 40px 0;
`;

export const FilterButton = styled(BorderlessButton)``;
