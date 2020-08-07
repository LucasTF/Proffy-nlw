import React from 'react';

import HeartIcon from '../../assets/images/icons/heart-outline.png';
import UnfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import WhatsappIcon from '../../assets/images/icons/whatsapp.png';

import * as Styled from './styles';
import { Image } from 'react-native';

const TeacherCard: React.FC = () => {
	return (
		<Styled.Container>
			<Styled.Profile>
				<Styled.Avatar
					source={{ uri: 'https://github.com/LucasTF.png' }}
				/>

				<Styled.ProfileInfo>
					<Styled.ProfileName>Lucas Ferreira</Styled.ProfileName>
					<Styled.ProfileSubject>Programação</Styled.ProfileSubject>
				</Styled.ProfileInfo>
			</Styled.Profile>

			<Styled.ProfileBio>
				Lorem ipsum dolor.
				{'\n'}
				{'\n'}
				Sit amet consectetur, adipisicing elit. Repudiandae, iure velit?
				Recusandae neque a non porro pariatur!
			</Styled.ProfileBio>

			<Styled.Footer>
				<Styled.Price>
					Preço/Hora {'   '}
					<Styled.Value>R$ 50.00</Styled.Value>
				</Styled.Price>

				<Styled.ButtonsContainer>
					<Styled.FavoriteButton>
						<Image source={HeartIcon} />
					</Styled.FavoriteButton>

					<Styled.ContactButton>
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
