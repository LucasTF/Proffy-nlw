import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import * as Styled from './styles';

import api from '../../utils/api';
import PageHeader from '../../components/PageHeader';
import TeacherCard, { ITeacher } from '../../components/TeacherCard';

const Teachers: React.FC = () => {
	const [isfiltersVisible, setIsFiltersVisible] = useState(false);

	const [subject, setSubject] = useState('');
	const [weekDay, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	const [teachers, setTeachers] = useState([]);
	const [favorites, setFavorites] = useState<number[]>([]);

	function loadFavorites() {
		AsyncStorage.getItem('favorites').then(res => {
			if (res) {
				const favorited = JSON.parse(res);
				const favoritedIds = favorited.map((fav: ITeacher) => fav.id);

				setFavorites(favoritedIds);
			}
		});
	}

	function toggleFiltersVisibleHandler() {
		setIsFiltersVisible(state => !state);
	}

	async function searchTeachersHandler() {
		loadFavorites();

		const { data } = await api.get('classes', {
			params: {
				subject,
				week_day: weekDay,
				time,
			},
		});

		setIsFiltersVisible(false);
		setTeachers(data);
	}

	return (
		<Styled.Container>
			<PageHeader
				title='Proffys disponíveis'
				headerRight={
					<BorderlessButton onPress={toggleFiltersVisibleHandler}>
						<Feather name='filter' size={28} color='#fff' />
					</BorderlessButton>
				}
			>
				{isfiltersVisible && (
					<>
						<Styled.SearchForm>
							<Styled.Label>Matéria</Styled.Label>
							<Styled.Input
								value={subject}
								onChangeText={text => setSubject(text)}
								placeholder='Qual a matéria?'
								placeholderTextColor='#c1bccc'
							/>
						</Styled.SearchForm>

						<Styled.InputGroup>
							<Styled.InputBlock>
								<Styled.SearchForm>
									<Styled.Label>Dia da semana</Styled.Label>
									<Styled.Input
										value={weekDay}
										onChangeText={text => setWeekDay(text)}
										placeholder='Qual o dia?'
										placeholderTextColor='#c1bccc'
									/>
								</Styled.SearchForm>
							</Styled.InputBlock>

							<Styled.InputBlock>
								<Styled.SearchForm>
									<Styled.Label>Horário</Styled.Label>
									<Styled.Input
										value={time}
										onChangeText={text => setTime(text)}
										placeholder='Qual o horário?'
										placeholderTextColor='#c1bccc'
									/>
								</Styled.SearchForm>
							</Styled.InputBlock>
						</Styled.InputGroup>

						<Styled.SearchForm>
							<Styled.SearchButton
								onPress={searchTeachersHandler}
							>
								<Styled.SearchButtonText>
									Filtrar
								</Styled.SearchButtonText>
							</Styled.SearchButton>
						</Styled.SearchForm>
					</>
				)}
			</PageHeader>

			<Styled.TeachersList
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				{teachers.map((teacher: ITeacher) => {
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
							favorited={favorites.includes(teacher.id)}
						/>
					);
				})}
			</Styled.TeachersList>
		</Styled.Container>
	);
};

export default Teachers;
