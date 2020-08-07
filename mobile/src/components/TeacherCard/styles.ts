import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface IFavoriteButton {
	favorite?: boolean;
}

export const Container = styled.View`
	background-color: #fff;
	border: 1px solid #e6e6f0;
	border-radius: 8px;
	margin-bottom: 16px;
	overflow: hidden;
`;

export const Avatar = styled.Image`
	width: 64px;
	height: 64px;
	border-radius: 32px;
	background-color: #eee;
`;

export const Profile = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 24px;
`;

export const ProfileInfo = styled.View`
	margin-left: 16px;
`;

export const ProfileName = styled.Text`
	font-family: Archivo_700Bold;
	color: #32264d;
	font-size: 20px;
`;

export const ProfileSubject = styled.Text`
	font-family: Poppins_400Regular;
	color: #6a6180;
	font-size: 12px;
	margin-top: 4px;
`;

export const ProfileBio = styled.Text`
	margin: 0 24px;
	font-family: Poppins_400Regular;
	font-size: 14px;
	line-height: 24px;
	color: #6a6180;
`;

export const Footer = styled.View`
	background-color: #fafafc;
	padding: 24px;
	margin-top: 24px;
	align-items: center;
`;

export const Price = styled.Text`
	font-family: Poppins_400Regular;
	color: #6a6180;
	font-size: 14px;
`;

export const Value = styled.Text`
	font-family: Archivo_700Bold;
	color: #8257e5;
	font-size: 16px;
`;

export const ButtonsContainer = styled.View`
	flex-direction: row;
	margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)<IFavoriteButton>`
	background-color: ${props => (props.favorite ? '#e33d3d' : '#8257e5')};
	width: 56px;
	height: 56px;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	margin-right: 8px;
`;

export const ContactButton = styled(RectButton)`
	background-color: #04d361;
	flex: 1;
	flex-direction: row;
	height: 56px;
	border-radius: 8px;
	justify-content: center;
	align-items: center;
	margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
	color: #fff;
	font-family: Archivo_700Bold;
	font-size: 16px;
	margin-left: 16px;
`;
