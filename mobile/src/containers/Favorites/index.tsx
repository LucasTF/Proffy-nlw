import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import * as Styled from './styles';
import TeacherCard, { ITeacher } from '../../components/TeacherCard';

const Favorites: React.FC = () => {
	const [favorites, setFavorites] = useState([]);

	function loadFavorites() {
		AsyncStorage.getItem('favorites').then(res => {
			if (res) {
				const favorited = JSON.parse(res);
				setFavorites(favorited);
			}
		});
	}

	useFocusEffect(() => {
		loadFavorites();
	});

	return (
		<Styled.Container>
			<PageHeader title='Meus proffys favoritos' />
			<Styled.TeachersList
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				{favorites.map((teacher: ITeacher) => {
					return (
						<TeacherCard
							key={teacher.id}
							id={teacher.id}
							name={teacher.name}
							whatsapp={teacher.whatsapp}
							avatar={teacher.avatar}
							subject={teacher.subject}
							bio={teacher.bio}
							cost={teacher.cost}
							favorited
						/>
					);
				})}
			</Styled.TeachersList>
		</Styled.Container>
	);
};

export default Favorites;
