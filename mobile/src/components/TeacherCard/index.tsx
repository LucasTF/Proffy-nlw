import React from 'react';
import { Image, Linking } from 'react-native';

import HeartIcon from '../../assets/images/icons/heart-outline.png';
import UnfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import WhatsappIcon from '../../assets/images/icons/whatsapp.png';

import * as Styled from './styles';

interface ITeacherProps {
	id: number;
	name: string;
	avatar: string;
	subject: string;
	bio: string;
	whatsapp: string;
	cost: string;
}

const TeacherCard: React.FC<ITeacherProps> = ({
	id,
	name,
	avatar,
	subject,
	bio,
	whatsapp,
	cost,
}) => {
	function whatsappHandler() {
		Linking.openURL(`whatsapp://send?phone=+55${whatsapp}`);
	}

	return (
		<Styled.Container>
			<Styled.Profile>
				<Styled.Avatar source={{ uri: avatar }} />

				<Styled.ProfileInfo>
					<Styled.ProfileName>{name}</Styled.ProfileName>
					<Styled.ProfileSubject>{subject}</Styled.ProfileSubject>
				</Styled.ProfileInfo>
			</Styled.Profile>

			<Styled.ProfileBio>{bio}</Styled.ProfileBio>

			<Styled.Footer>
				<Styled.Price>
					Preço/Hora {'   '}
					<Styled.Value>R$ {cost}</Styled.Value>
				</Styled.Price>

				<Styled.ButtonsContainer>
					<Styled.FavoriteButton>
						<Image source={HeartIcon} />
					</Styled.FavoriteButton>

					<Styled.ContactButton onPress={whatsappHandler}>
						<Image source={WhatsappIcon} />
						<Styled.ContactButtonText>
							Entrar em contato
						</Styled.ContactButtonText>
					</Styled.ContactButton>
				</Styled.ButtonsContainer>
			</Styled.Footer>
		</Styled.Container>
	);
};

export default TeacherCard;
