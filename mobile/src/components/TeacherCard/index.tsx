import React, { useState } from 'react';
import { Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import HeartIcon from '../../assets/images/icons/heart-outline.png';
import UnfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import WhatsappIcon from '../../assets/images/icons/whatsapp.png';

import * as Styled from './styles';
import api from '../../utils/api';

export interface ITeacher {
	id: number;
	name: string;
	avatar: string;
	subject: string;
	bio: string;
	whatsapp: string;
	cost: string;
	favorited: boolean;
}

const TeacherCard: React.FC<ITeacher> = ({
	id,
	name,
	avatar,
	subject,
	bio,
	whatsapp,
	cost,
	favorited,
}) => {
	const [isFavorited, setIsFavorited] = useState(favorited);

	async function toggleFavoriteHandler() {
		const favorites = await AsyncStorage.getItem('favorites');

		let favArr: Array<ITeacher> = [];
		if (favorites) favArr = JSON.parse(favorites);

		if (isFavorited) {
			const favIndex = favArr.findIndex((teacher: ITeacher) => {
				return teacher.id === id;
			});

			favArr.splice(favIndex, 1);

			setIsFavorited(false);
		} else {
			favArr.push({
				id,
				name,
				avatar,
				subject,
				bio,
				whatsapp,
				cost,
				favorited: true,
			});

			setIsFavorited(true);
		}

		await AsyncStorage.setItem('favorites', JSON.stringify(favArr));
	}

	function whatsappHandler() {
		api.post('connections', {
			user_id: id,
		});

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
					<Styled.FavoriteButton
						favorite={isFavorited}
						onPress={toggleFavoriteHandler}
					>
						{isFavorited ? (
							<Image source={UnfavoriteIcon} />
						) : (
							<Image source={HeartIcon} />
						)}
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
