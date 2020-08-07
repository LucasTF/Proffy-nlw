import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import * as Styled from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherCard from '../../components/TeacherCard';

const Teachers: React.FC = () => {
	return (
		<Styled.Container>
			<PageHeader title='Proffys disponíveis' />
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
