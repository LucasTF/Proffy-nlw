import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import * as Styled from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherCard from '../../components/TeacherCard';

const Teachers: React.FC = () => {
	const [isfiltersVisible, setIsFiltersVisible] = useState(false);

	function toggleFiltersVisibleHandler() {
		setIsFiltersVisible(state => !state);
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
								placeholder='Qual a matéria?'
								placeholderTextColor='#c1bccc'
							/>
						</Styled.SearchForm>

						<Styled.InputGroup>
							<Styled.InputBlock>
								<Styled.SearchForm>
									<Styled.Label>Dia da semana</Styled.Label>
									<Styled.Input
										placeholder='Qual o dia?'
										placeholderTextColor='#c1bccc'
									/>
								</Styled.SearchForm>
							</Styled.InputBlock>

							<Styled.InputBlock>
								<Styled.SearchForm>
									<Styled.Label>Horário</Styled.Label>
									<Styled.Input
										placeholder='Qual o horário?'
										placeholderTextColor='#c1bccc'
									/>
								</Styled.SearchForm>
							</Styled.InputBlock>
						</Styled.InputGroup>

						<Styled.SearchForm>
							<Styled.SearchButton>
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
				<TeacherCard />
				<TeacherCard />
				<TeacherCard />
				<TeacherCard />
				<TeacherCard />
			</Styled.TeachersList>
		</Styled.Container>
	);
};

export default Teachers;
