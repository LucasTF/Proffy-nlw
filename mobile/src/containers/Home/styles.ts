import styled from 'styled-components/native';

interface IButton {
	primary?: boolean;
}

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	background-color: #8257e5;
	padding: 40px;
`;

export const Banner = styled.Image`
	width: 100%;
`;

export const Title = styled.Text`
	color: #fff;
	font-family: Poppins_400Regular;
	font-size: 20px;
	line-height: 30px;
	margin-top: 80px;
`;

export const TitleBold = styled.Text`
	font-family: Poppins_600SemiBold;
`;

export const ButtonContainer = styled.View`
	flex-direction: row;
	margin-top: 40px;
	justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<IButton>`
	height: 150px;
	width: 48%;
	background-color: ${props => (props.primary ? '#9871f5' : '#04d361')};
	border-radius: 8px;
	padding: 24px;
	justify-content: space-between;
`;

export const ButtonText = styled.Text`
	font-family: Archivo_700Bold;
	color: #fff;
	font-size: 18px;
`;

export const TotalConnText = styled.Text`
	font-family: Poppins_400Regular;
	color: #d4c2ff;
	font-size: 12px;
	line-height: 20px;
	max-width: 140px;
	margin-top: 40px;
`;
