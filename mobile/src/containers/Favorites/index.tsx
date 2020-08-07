import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherCard from '../../components/TeacherCard';

import * as Styled from './styles';

const Favorites: React.FC = () => {
	return (
		<Styled.Container>
			<PageHeader title='Meus proffys favoritos' />
			<Styled.TeachersList
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				<TeacherCard />
			</Styled.TeachersList>
		</Styled.Container>
	);
};

export default Favorites;
